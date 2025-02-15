async function fetchWithErrorHandling() {
    const firstUrl = "https://danko-url.com";
    try {
        console.log("Process...")
        const response = await fetch(firstUrl);
        if (!response.ok) {
            throw new Error("First request failed, trying fallback...");
        }
        return await response.json();
    } catch (error) {
        console.warn(error.message);
        try {
            const fallbackResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!fallbackResponse.ok) {
                throw new Error("Fallback request also failed");
            }
            return await fallbackResponse.json();
        } catch (finalError) {
            throw new Error("First and Second fetch failed:" + finalError.message);
        }
    }
}

fetchWithErrorHandling()
    .then(data => console.log("Final Data:", data))
    .catch(error => console.error(error));
