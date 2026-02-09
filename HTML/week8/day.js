// Database of Cambodian Heritage Sites
const locations = [
    { name: "Angkor Wat", category: "Temple", rating: 9.8, price: "Free Entry*", img: "https://images.unsplash.com/photo-1544013508-2226369b02f6?w=400" },
    { name: "Bayon Temple", category: "Temple", rating: 9.5, price: "Ticket Required", img: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?w=400" },
    { name: "Fish Amok", category: "Food", rating: 9.2, price: "$5 - $15", img: "https://images.unsplash.com/photo-1541014741259-de5294113961?w=400" },
    { name: "Apsara Dance Show", category: "Art", rating: 9.0, price: "$20", img: "https://images.unsplash.com/photo-1583344048240-dc5298a445cb?w=400" },
    { name: "Royal Palace", category: "Temple", rating: 9.4, price: "$10", img: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?w=400" }
];

// Function to render cards to the screen
function displayResults(data) {
    const grid = document.getElementById('resultsGrid');
    grid.innerHTML = ""; // Clear current results

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = "card";
        
        // Logic: Change background slightly on mouseover
        card.onmouseover = () => card.style.borderColor = "#006ce4";
        card.onmouseout = () => card.style.borderColor = "#ddd";

        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="card-content">
                <span class="rating">${item.rating}</span>
                <h3 style="margin:0">${item.name}</h3>
                <p style="color: #666; font-size: 14px;">${item.category}</p>
                <p style="font-weight: bold; color: #008009;">${item.price}</p>
                <button class="btn-blue" style="width: 100%; margin-top: 10px;">View Details</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Logic for the Live Search Bar
function filterResults() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = locations.filter(loc => 
        loc.name.toLowerCase().includes(searchTerm) || 
        loc.category.toLowerCase().includes(searchTerm)
    );
    displayResults(filtered);
}

// Initial display on page load
displayResults(locations);