async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
        processFetchedData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
function processFetchedData(data) {
    console.log("Processing Data:", data);
}

fetchDataWithAsyncAwait();
