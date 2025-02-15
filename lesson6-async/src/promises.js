function fetchDataWithPromises() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched Data:", data);
            processFetchedData(data);
        })
        .catch(error => console.error("Error fetching data:", error));
}

function processFetchedData(data) {
    console.log("Processing Data:", data);
}

fetchDataWithPromises();
