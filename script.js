// Login Forms
document.getElementById('admin-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Admin login successful!');
    window.location.href = 'index.html';
});

document.getElementById('student-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Student login successful!');
    window.location.href = 'index.html';
});

document.getElementById('teacher-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Teacher login successful!');
    window.location.href = 'index.html';
});

// Book Search from Open Library
function searchBooks() {
    const query = document.getElementById("search-input").value || "science";
    const apiUrl = `https://openlibrary.org/search.json?q=${query}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const bookList = document.getElementById("openlibrary-books");
            bookList.innerHTML = ""; // clear previous results

            data.docs.slice(0, 6).forEach(book => {
                const title = book.title;
                const author = book.author_name ? book.author_name.join(", ") : "Unknown Author";
                const cover = book.cover_i 
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "https://via.placeholder.com/150x200?text=No+Cover";

                const bookCard = document.createElement("div");
                bookCard.className = "book-card";
                bookCard.innerHTML = `
                    <img src="${cover}" alt="${title}">
                    <h3>${title}</h3>
                    <p>${author}</p>
                    <a href="https://openlibrary.org${book.key}" class="btn" target="_blank">View</a>
                `;
                bookList.appendChild(bookCard);
            });
        })
        .catch(error => {
            console.error("Error fetching books:", error);
        });
}

// Load default books on page load
window.onload = searchBooks;
