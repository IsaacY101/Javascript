document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const query = document.getElementById('query').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.clear();
        console.log(data);

        resultsContainer.innerHTML = '';
        if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No results found.</p>';
        } else {
            data.forEach(item => {
                const show = item.show;

                const card = document.createElement('div');
                card.style.border = '1px solid #ccc';
                card.style.padding = '10px';
                card.style.margin = '10px 0';
                card.style.borderRadius = '8px';
                card.style.backgroundColor = '#f9f9f9';

                const title = document.createElement('h2');
                title.textContent = show.name;
                card.appendChild(title);

                if (show.image && show.image.medium) {
                    const img = document.createElement('img');
                    img.src = show.image.medium;
                    img.alt = `${show.name} poster`;
                    img.style.width = '150px';
                    img.style.borderRadius = '4px';
                    img.style.marginRight = '10px';
                    card.appendChild(img);
                }

                if (show.summary) {
                    const summary = document.createElement('p');
                    summary.innerHTML = show.summary;
                    card.appendChild(summary);
                }

                resultsContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error(error);
        resultsContainer.innerHTML = '<p>An error occurred while fetching data. Please try again.</p>';
    }
});
