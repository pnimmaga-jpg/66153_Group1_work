import orjson
import os
import heapq
from collections import defaultdict
from itertools import combinations  # Add this

def build_genre_index(input_path, output_path):
    temp_index = defaultdict(set)
    print(f"Processing {input_path} for genre indexing...")

    with open(input_path, 'rb') as f:
        for line in f:
            data = orjson.loads(line)
            book_id = int(data['book_id'])
            for combined_key in data.get('genres', {}).keys():
                genres = [g.strip() for g in combined_key.split(',') if g.strip()]
                for g in genres:
                    temp_index[g].add(book_id)

    final_index = {genre: sorted(list(ids)) for genre, ids in temp_index.items()}
    with open(output_path, 'wb') as f:
        f.write(orjson.dumps(final_index, option=orjson.OPT_INDENT_2))
    print(f"Created {output_path}")

def get_top_books_by_genre(genre_map_path, books_json_path, output_path, min_ratings=100):
    with open(genre_map_path, 'rb') as f:
        genre_map = orjson.loads(f.read())

    book_to_genres = defaultdict(list)
    for genre, ids in genre_map.items():
        for b_id in ids:
            book_to_genres[str(b_id)].append(genre)

    top_books = defaultdict(list)

    print(f"Filtering for books with at least {min_ratings} ratings...")
    with open(books_json_path, 'rb') as f:
        for line in f:
            book_data = orjson.loads(line)
            b_id = str(book_data.get('book_id'))

            if b_id in book_to_genres:
                r_count = int(book_data.get('ratings_count', 0))
                if r_count < min_ratings:
                    continue

                rating = float(book_data.get('average_rating', 0))
                title = book_data.get('title', 'Unknown Title')
                
                for genre in book_to_genres[b_id]:
                    # FIX: Added b_id to the tuple here (now 4 elements)
                    heapq.heappush(top_books[genre], (rating, r_count, title, b_id))
                    if len(top_books[genre]) > 5:
                        heapq.heappop(top_books[genre])

    final_rankings = {}
    for genre, heap in top_books.items():
        sorted_books = sorted(heap, key=lambda x: (x[0], x[1]), reverse=True)
        final_rankings[genre] = [
            {
                "book_id": b[3],  # Now index 3 exists!
                "title": b[2], 
                "rating": b[0], 
                "ratings_count": b[1]
            } for b in sorted_books
        ]

    with open(output_path, 'wb') as f:
        f.write(orjson.dumps(final_rankings, option=orjson.OPT_INDENT_2))
    print(f"Created {output_path} with quality filter.")

if __name__ == "__main__":
    GENRE_DATA = 'genres.json'      # The small file with genre tags
    BOOKS_DATA = 'books.json'       # The 2-million row file
    MAP_FILE = 'genre_map.json'     # The output of task 1
    TOP_FILE = 'top_5_genres.json'  # The final requested file

    # Check if genre_map exists
    if not os.path.exists(MAP_FILE):
        build_genre_index(GENRE_DATA, MAP_FILE)
    else:
        print(f"Skipping indexing: '{MAP_FILE}' already exists.")

    # Check if top_5 file exists
    if not os.path.exists(TOP_FILE):
        get_top_books_by_genre(MAP_FILE, BOOKS_DATA, TOP_FILE)
    else:
        print(f"Skipping top books analysis: '{TOP_FILE}' already exists.")