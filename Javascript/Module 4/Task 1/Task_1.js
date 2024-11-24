document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    const query = document.getElementById('query').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.textContent = 'Loading...';

    try {

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();
            console.clear();
            console.log(data);
            resultsContainer.textContent = JSON.stringify(data, null, 2);
        }
    } catch (error) {
        console.error(error);
        resultsContainer.textContent = 'An error occurred. Please try again.';
    }
});
