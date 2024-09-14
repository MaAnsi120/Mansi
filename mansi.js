[1:50 pm, 14/9/2024] Mansi: // Sample data for countries and capitals
const countries = [
    { name: "France", capital: "Paris" },
    { name: "Germany", capital: "Berlin" },
    { name: "India", capital: "New Delhi" },
    { name: "Japan", capital: "Tokyo" },
    // Add more countries and capitals
];

// Getting references to the input and suggestion box
const searchBar = document.getElementById('search-bar');
const suggestionsBox = document.getElementById('suggestions');

// Event listener for search input
searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    if (query.length > 0) {
        // Filter countries based on query
        const filteredCountries = countries.filter(country => 
            country.name.toLowerCase().includes(query) || 
            country.capital.toLowerCase().includes(query)
        );

        // Display suggestions
        filteredCountries.forEach(country => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = ${country.name} - ${country.capital};
            suggestionItem.addEventListener('click', function() {
                searchBar.value = ${country.name} - ${country.capital};
                suggestionsBox.innerHTML = ''; // Clear suggestions after selection
            });
            suggestionsBox.appendChild(suggestionItem);
        });
    }
});

