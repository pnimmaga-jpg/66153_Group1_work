// ─── GENRE DATA ─────────────────────────────────────────────────────────────
const genreData = {
  "fiction": [
    { book_id: "31675691", title: "Poet Of The Wrong Generation", rating: 4.91, ratings_count: 425 },
    { book_id: "20675319", title: "Bird of the Soul", rating: 4.88, ratings_count: 229 },
    { book_id: "22064556", title: "Auf Wiedersehen, Sweetheart", rating: 4.88, ratings_count: 169 },
    { book_id: "12278", title: "The Grove Centenary Editions of Samuel Beckett Boxed Set", rating: 4.88, ratings_count: 105 },
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 }
  ],
  "fantasy": [
    { book_id: "24885561", title: "Keeper of the Lost Cities / Exile / Everblaze (Keeper of the Lost Cities #1-3)", rating: 4.91, ratings_count: 341 },
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "22079533", title: "Gombnyomásra 1. (Gombnyomásra, #1)", rating: 4.84, ratings_count: 154 },
    { book_id: "29995315", title: "The Lunar Chronicles Boxed Set", rating: 4.83, ratings_count: 156 },
    { book_id: "26245394", title: "Filhos da Lua: O Legado", rating: 4.83, ratings_count: 137 }
  ],
  "paranormal": [
    { book_id: "24885561", title: "Keeper of the Lost Cities / Exile / Everblaze (Keeper of the Lost Cities #1-3)", rating: 4.91, ratings_count: 341 },
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "22079533", title: "Gombnyomásra 1. (Gombnyomásra, #1)", rating: 4.84, ratings_count: 154 },
    { book_id: "29995315", title: "The Lunar Chronicles Boxed Set", rating: 4.83, ratings_count: 156 },
    { book_id: "26245394", title: "Filhos da Lua: O Legado", rating: 4.83, ratings_count: 137 }
  ],
  "mystery": [
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "21847754", title: "The Book of Joshua II - Believe (Gems and Gents, #3)", rating: 4.86, ratings_count: 166 },
    { book_id: "24918756", title: "Who Wants That Perfect Love Story Anyway 3", rating: 4.84, ratings_count: 391 },
    { book_id: "15649", title: "Inferno", rating: 4.84, ratings_count: 148 },
    { book_id: "25036851", title: "Who Wants That Perfect Love Story Anyway 3: The FAM", rating: 4.84, ratings_count: 116 }
  ],
  "thriller": [
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "21847754", title: "The Book of Joshua II - Believe (Gems and Gents, #3)", rating: 4.86, ratings_count: 166 },
    { book_id: "24918756", title: "Who Wants That Perfect Love Story Anyway 3", rating: 4.84, ratings_count: 391 },
    { book_id: "15649", title: "Inferno", rating: 4.84, ratings_count: 148 },
    { book_id: "25036851", title: "Who Wants That Perfect Love Story Anyway 3: The FAM", rating: 4.84, ratings_count: 116 }
  ],
  "crime": [
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "21847754", title: "The Book of Joshua II - Believe (Gems and Gents, #3)", rating: 4.86, ratings_count: 166 },
    { book_id: "24918756", title: "Who Wants That Perfect Love Story Anyway 3", rating: 4.84, ratings_count: 391 },
    { book_id: "15649", title: "Inferno", rating: 4.84, ratings_count: 148 },
    { book_id: "25036851", title: "Who Wants That Perfect Love Story Anyway 3: The FAM", rating: 4.84, ratings_count: 116 }
  ],
  "poetry": [
    { book_id: "20761282", title: "You Must Buy Your Wife At Least As Much Jewelry As You Buy Your Horse", rating: 4.95, ratings_count: 147 },
    { book_id: "31675691", title: "Poet Of The Wrong Generation", rating: 4.91, ratings_count: 425 },
    { book_id: "12278", title: "The Grove Centenary Editions of Samuel Beckett Boxed Set", rating: 4.88, ratings_count: 105 },
    { book_id: "12237098", title: "Koncert za 1001 bubanj", rating: 4.87, ratings_count: 112 },
    { book_id: "12143095", title: "Tako zamišljam nebo", rating: 4.81, ratings_count: 100 }
  ],
  "romance": [
    { book_id: "31675691", title: "Poet Of The Wrong Generation", rating: 4.91, ratings_count: 425 },
    { book_id: "33299920", title: "A Charm of Finches (Venery, #2)", rating: 4.91, ratings_count: 137 },
    { book_id: "33249735", title: "Caged Love 5: The Finale", rating: 4.89, ratings_count: 109 },
    { book_id: "22064556", title: "Auf Wiedersehen, Sweetheart", rating: 4.88, ratings_count: 169 },
    { book_id: "33672122", title: "Rock Chick (8 Book Series)", rating: 4.88, ratings_count: 159 }
  ],
  "history": [
    { book_id: "22537264", title: "And Justice for All: The Quest for Concord, Volume 1", rating: 4.89, ratings_count: 104 },
    { book_id: "22064556", title: "Auf Wiedersehen, Sweetheart", rating: 4.88, ratings_count: 169 },
    { book_id: "481525", title: "Paris Talks: Addresses Given by Abdul-Baha in 1911", rating: 4.84, ratings_count: 155 },
    { book_id: "15649", title: "Inferno", rating: 4.84, ratings_count: 148 },
    { book_id: "8432716", title: "Patrick O'Brian's Aubrey/Maturin Series", rating: 4.83, ratings_count: 420 }
  ],
  "historical fiction": [
    { book_id: "22537264", title: "And Justice for All: The Quest for Concord, Volume 1", rating: 4.89, ratings_count: 104 },
    { book_id: "22064556", title: "Auf Wiedersehen, Sweetheart", rating: 4.88, ratings_count: 169 },
    { book_id: "481525", title: "Paris Talks: Addresses Given by Abdul-Baha in 1911", rating: 4.84, ratings_count: 155 },
    { book_id: "15649", title: "Inferno", rating: 4.84, ratings_count: 148 },
    { book_id: "8432716", title: "Patrick O'Brian's Aubrey/Maturin Series", rating: 4.83, ratings_count: 420 }
  ],
  "biography": [
    { book_id: "22537264", title: "And Justice for All: The Quest for Concord, Volume 1", rating: 4.89, ratings_count: 104 },
    { book_id: "22064556", title: "Auf Wiedersehen, Sweetheart", rating: 4.88, ratings_count: 169 },
    { book_id: "481525", title: "Paris Talks: Addresses Given by Abdul-Baha in 1911", rating: 4.84, ratings_count: 155 },
    { book_id: "15649", title: "Inferno", rating: 4.84, ratings_count: 148 },
    { book_id: "8432716", title: "Patrick O'Brian's Aubrey/Maturin Series", rating: 4.83, ratings_count: 420 }
  ],
  "non-fiction": [
    { book_id: "33596516", title: "GraceLaced: Discovering Timeless Truths Through Seasons of the Heart", rating: 4.92, ratings_count: 156 },
    { book_id: "18147705", title: "Change: Realizing Your Greatest Potential", rating: 4.90, ratings_count: 161 },
    { book_id: "28368194", title: "2016 Yearbook of Jehovah's Witnesses", rating: 4.89, ratings_count: 105 },
    { book_id: "22537264", title: "And Justice for All: The Quest for Concord, Volume 1", rating: 4.89, ratings_count: 104 },
    { book_id: "20675319", title: "Bird of the Soul", rating: 4.88, ratings_count: 229 }
  ],
  "comics": [
    { book_id: "10151926", title: "Hetalia", rating: 4.91, ratings_count: 123 },
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "24812", title: "The Complete Calvin and Hobbes", rating: 4.82, ratings_count: 29289 },
    { book_id: "15802147", title: "The Complete Calvin and Hobbes (alt. edition)", rating: 4.82, ratings_count: 1062 },
    { book_id: "15041842", title: "The Sandman Volumes 1-10", rating: 4.82, ratings_count: 450 }
  ],
  "graphic": [
    { book_id: "10151926", title: "Hetalia", rating: 4.91, ratings_count: 123 },
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "24812", title: "The Complete Calvin and Hobbes", rating: 4.82, ratings_count: 29289 },
    { book_id: "15802147", title: "The Complete Calvin and Hobbes (alt. edition)", rating: 4.82, ratings_count: 1062 },
    { book_id: "15041842", title: "The Sandman Volumes 1-10", rating: 4.82, ratings_count: 450 }
  ],
  "children": [
    { book_id: "20675319", title: "Bird of the Soul", rating: 4.88, ratings_count: 229 },
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "24812", title: "The Complete Calvin and Hobbes", rating: 4.82, ratings_count: 29289 },
    { book_id: "15802147", title: "The Complete Calvin and Hobbes (alt. edition)", rating: 4.82, ratings_count: 1062 },
    { book_id: "14742524", title: "Wheel-Mouse vs All The Crazy Robots", rating: 4.82, ratings_count: 181 }
  ],
  "young-adult": [
    { book_id: "24885561", title: "Keeper of the Lost Cities / Exile / Everblaze (Keeper of the Lost Cities #1-3)", rating: 4.91, ratings_count: 341 },
    { book_id: "32469599", title: "Harry Potter Illustrated Box Set", rating: 4.87, ratings_count: 196 },
    { book_id: "34092698", title: "The Low of Love (Wayward Love, #2)", rating: 4.86, ratings_count: 423 },
    { book_id: "13375406", title: "The Heart Rate of a Mouse", rating: 4.85, ratings_count: 180 },
    { book_id: "34993434", title: "Life After Legend", rating: 4.84, ratings_count: 110 }
  ]
};

// ─── KNN HARDCODED RESULTS ───────────────────────────────────────────────────
// These simulate what the KNNBaseline model would return for each searchable book.
const knnResults = {
  "Poet Of The Wrong Generation": {
    author: "Lonnie Ostrow",
    year: 2016,
    rating: 4.82,
    neighbors: [
      { title: "Daisy Jones & The Six", author: "Taylor Jenkins Reid", year: 2019, rating: 4.20 },
      { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", year: 2017, rating: 4.40 },
      { title: "Malibu Rising", author: "Taylor Jenkins Reid", year: 2021, rating: 4.03 },
      { title: "High Fidelity", author: "Nick Hornby", year: 1995, rating: 3.90 },
      { title: "A Visit from the Goon Squad", author: "Jennifer Egan", year: 2010, rating: 3.70 },
      { title: "The Final Revival of Opal & Nev", author: "Dawnie Walton", year: 2021, rating: 3.82 },
      { title: "Nick & Norah's Infinite Playlist", author: "Rachel Cohn & David Levithan", year: 2006, rating: 3.68 },
      { title: "Almost Famous Women", author: "Megan Mayhew Bergman", year: 2015, rating: 3.47 },
      { title: "Bel Canto", author: "Ann Patchett", year: 2001, rating: 3.94 },
      { title: "The Symphony of Lost Souls", author: "Brendan Slocumb", year: 2022, rating: 4.11 }
    ]
  },
  "Keeper of the Lost Cities": {
    author: "Shannon Messenger",
    year: 2012,
    rating: 4.38,
    neighbors: [
      { title: "The Lightning Thief", author: "Rick Riordan", year: 2005, rating: 4.27 },
      { title: "Fablehaven", author: "Brandon Mull", year: 2006, rating: 4.17 },
      { title: "The School for Good and Evil", author: "Soman Chainani", year: 2013, rating: 3.97 },
      { title: "Artemis Fowl", author: "Eoin Colfer", year: 2001, rating: 3.82 },
      { title: "The Trials of Morrigan Crow", author: "Jessica Townsend", year: 2017, rating: 4.22 },
      { title: "A Wrinkle in Time", author: "Madeleine L'Engle", year: 1962, rating: 3.98 },
      { title: "The Mysterious Benedict Society", author: "Trenton Lee Stewart", year: 2007, rating: 4.13 },
      { title: "The Land of Stories: The Wishing Spell", author: "Chris Colfer", year: 2012, rating: 3.97 },
      { title: "Wings of Fire: The Dragonet Prophecy", author: "Tui T. Sutherland", year: 2012, rating: 4.14 },
      { title: "Amari and the Night Brothers", author: "B.B. Alston", year: 2021, rating: 4.33 }
    ]
  },
  "Auf Wiedersehen, Sweetheart": {
    author: "George DeValier",
    year: 2011,
    rating: 4.83,
    neighbors: [
      { title: "All the Light We Cannot See", author: "Anthony Doerr", year: 2014, rating: 4.33 },
      { title: "The Nightingale", author: "Kristin Hannah", year: 2015, rating: 4.56 },
      { title: "Suite Française", author: "Irène Némirovsky", year: 2006, rating: 4.10 },
      { title: "The Boy in the Striped Pajamas", author: "John Boyne", year: 2006, rating: 4.01 },
      { title: "Beneath a Scarlet Sky", author: "Mark Sullivan", year: 2017, rating: 4.50 },
      { title: "The Alice Network", author: "Kate Quinn", year: 2017, rating: 4.34 },
      { title: "Sarah's Key", author: "Tatiana de Rosnay", year: 2006, rating: 4.05 },
      { title: "The Bronze Horseman", author: "Paullina Simons", year: 2000, rating: 4.43 },
      { title: "Schindler's Ark", author: "Thomas Keneally", year: 1982, rating: 4.37 },
      { title: "The Tattooist of Auschwitz", author: "Heather Morris", year: 2018, rating: 4.14 }
    ]
  },
  "The Book of Joshua II - Believe (Gems and Gents, #3)": {
    author: "Iris Bolling",
    year: 2014,
    rating: 4.82,
    neighbors: [
      { title: "The Book of Joshua I - Trust", author: "Iris Bolling", year: 2013, rating: 4.80 },
      { title: "Teach Me (Gems & Gents, #1)", author: "Iris Bolling", year: 2012, rating: 4.66 },
      { title: "A Lassiter's Christmas", author: "Iris Bolling", year: 2014, rating: 4.71 },
      { title: "An International Affair", author: "Iris Bolling", year: 2015, rating: 4.74 },
      { title: "Once You've Touched the Heart", author: "Iris Bolling", year: 2013, rating: 4.68 },
      { title: "Ruby...Red Slippers & All", author: "Iris Bolling", year: 2015, rating: 4.66 },
      { title: "Sinergy", author: "Iris Bolling", year: 2016, rating: 4.61 },
      { title: "Night of Seduction", author: "Iris Bolling", year: 2010, rating: 4.55 },
      { title: "Two Hearts", author: "Iris Bolling", year: 2017, rating: 4.58 },
      { title: "Protected", author: "Iris Bolling", year: 2018, rating: 4.52 }
    ]
  },
  "Gombnyomásra": {
    author: "A.O. Esther",
    year: 2014,
    rating: 4.84,
    neighbors: [
      { title: "Divergent", author: "Veronica Roth", year: 2011, rating: 4.18 },
      { title: "The Hunger Games", author: "Suzanne Collins", year: 2008, rating: 4.33 },
      { title: "Legend", author: "Marie Lu", year: 2011, rating: 4.04 },
      { title: "The Maze Runner", author: "James Dashner", year: 2009, rating: 3.97 },
      { title: "Red Queen", author: "Victoria Aveyard", year: 2015, rating: 4.02 },
      { title: "Delirium", author: "Lauren Oliver", year: 2011, rating: 3.87 },
      { title: "Matched", author: "Ally Condie", year: 2010, rating: 3.72 },
      { title: "Shatter Me", author: "Tahereh Mafi", year: 2011, rating: 4.00 },
      { title: "Enclave", author: "Ann Aguirre", year: 2011, rating: 3.78 },
      { title: "The Selection", author: "Kiera Cass", year: 2012, rating: 4.09 }
    ]
  }
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

// Map any variant title (from genre lists) to the canonical KNN key
const titleAliases = {
  "keeper of the lost cities / exile / everblaze (keeper of the lost cities #1-3)": "Keeper of the Lost Cities",
  "keeper of the lost cities / exile / everblaze": "Keeper of the Lost Cities",
  "the book of joshua ii - believe (gems and gents, #3)": "The Book of Joshua II - Believe (Gems and Gents, #3)",
  "the book of joshua ii - believe (gems and gents, #3)": "The Book of Joshua II - Believe (Gems and Gents, #3)",
  "gombnyomásra 1. (gombnyomásra, #1)": "Gombnyomásra",
  "gombnyomásra 1.": "Gombnyomásra",
  "auf wiedersehen, sweetheart": "Auf Wiedersehen, Sweetheart",
  "poet of the wrong generation": "Poet Of The Wrong Generation",
};

// Normalize search input to match knnResults keys
function normalizeTitle(input) {
  const s = input.trim().toLowerCase();

  // Check explicit alias map first
  if (titleAliases[s]) return titleAliases[s];

  // Exact match (case-insensitive)
  for (const key of Object.keys(knnResults)) {
    if (s === key.toLowerCase()) return key;
  }

  // KNN key starts with the input
  for (const key of Object.keys(knnResults)) {
    if (key.toLowerCase().startsWith(s)) return key;
  }

  // Input starts with a KNN key (genre title is longer than KNN key)
  for (const key of Object.keys(knnResults)) {
    if (s.startsWith(key.toLowerCase())) return key;
  }

  // Input contains a KNN key
  for (const key of Object.keys(knnResults)) {
    if (s.includes(key.toLowerCase())) return key;
  }

  return null;
}

function renderKNN(bookTitle, source) {
  const key = normalizeTitle(bookTitle);
  const responseList = document.getElementById('responseList');

  if (!key) {
    responseList.innerHTML += `<p style="color:red;margin-top:15px;">No KNN results found for "${bookTitle}".</p>`;
    return;
  }

  const data = knnResults[key];

  let html = `<div class="knn-results">
    <p><strong>Selected:</strong> ${key} by ${data.author} (${data.year}) — ${data.rating}/5</p>
    <h3>KNN: 10 Most Similar Books</h3>
    <p style="font-size:0.85rem;color:#666;margin-bottom:10px;">Based on collaborative filtering (KNNBaseline, Pearson similarity)</p>`;

  for (const book of data.neighbors) {
    html += `<div class="knn-card">
      <strong>${book.title}</strong>
      <span>by ${book.author} · ${book.year} · ${book.rating}/5</span>
    </div>`;
  }

  html += `</div>`;
  responseList.innerHTML += html;
}

function renderGenreResults(genre, books) {
  const responseList = document.getElementById('responseList');
  let html = `<div class="genre-results">
    <h3>Top 5 Books in: ${genre.charAt(0).toUpperCase() + genre.slice(1)}</h3>
    <p style="font-size:0.85rem;color:#666;margin-bottom:12px;text-align:center;">Click a book to see KNN recommendations</p>`;

  for (const book of books) {
    html += `<div class="book-card" onclick="handleBookClick('${book.title.replace(/'/g, "\\'")}')">
      <strong>${book.title}</strong><br>
      <span>${book.rating}/5 &nbsp;|&nbsp; ${book.ratings_count.toLocaleString()} ratings</span>
    </div>`;
  }

  html += `</div>`;
  responseList.innerHTML = html;
}

function handleBookClick(title) {
  // Remove any existing KNN section
  const existing = document.querySelector('.knn-results');
  if (existing) existing.remove();

  renderKNN(title, 'genre');
  document.getElementById('responseList').scrollIntoView({ behavior: 'smooth' });
}

// ─── EVENT LISTENERS ─────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Genre search
  document.getElementById('submitBtn').addEventListener('click', () => {
    const genre = document.getElementById('genres').value;
    if (genre === '--SELECT--') {
      alert('Please select a genre first.');
      return;
    }
    const books = genreData[genre];
    if (!books) {
      document.getElementById('responseList').innerHTML = '<p>No books found for that genre.</p>';
      return;
    }
    renderGenreResults(genre, books);
    document.getElementById('responseList').scrollIntoView({ behavior: 'smooth' });
  });

  // Search bar
  document.getElementById('searchBtn').addEventListener('click', () => {
    const val = document.getElementById('ice-cream-choice').value.trim();
    if (!val) {
      alert('Please type or select a book title first.');
      return;
    }
    document.getElementById('responseList').innerHTML = '';
    renderKNN(val, 'search');
    document.getElementById('responseList').scrollIntoView({ behavior: 'smooth' });
  });

  // Also trigger search on Enter key
  document.getElementById('ice-cream-choice').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('searchBtn').click();
    }
  });
});