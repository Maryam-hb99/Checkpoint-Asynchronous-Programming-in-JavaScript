// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
        console.log(value);
    }
}

// Test
iterateWithAsyncAwait([1, 2, 4, 8]); // Logs 1, 2, 4, 8 with a 1-second delay between each


// Task 02: Awaiting a Call
async function awaitCall() {
    const fakeFetch = () =>
        new Promise(resolve => setTimeout(() => resolve("Data fetched"), 2000));

    const data = await fakeFetch(); // Wait for the promise to resolve
    console.log(data);
}

// Test
awaitCall(); // Logs "Data fetched" after 2 seconds


// Task 03: Handling Errors with Async/Await
async function awaitCallWithErrorHandling() {
    const fakeFetch = () =>
        new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("Failed to fetch data")), 2000)
        );

    try {
        const data = await fakeFetch(); // Wait for the promise to resolve or reject
        console.log(data);
    } catch (error) {
        console.error("Error: Could not fetch the data. Please try again later."); // Friendly error message
    }
}

// Test
awaitCallWithErrorHandling(); // Logs "Error: Could not fetch the data. Please try again later." after 2 seconds

// Task 04: Awaiting Concurrent Requests


async function concurrentRequests() {
    const fakeFetch1 = () =>
        new Promise(resolve => setTimeout(() => resolve("Result 1"), 2000));
    const fakeFetch2 = () =>
        new Promise(resolve => setTimeout(() => resolve("Result 2"), 3000));

    const [result1, result2] = await Promise.all([fakeFetch1(), fakeFetch2()]); // Resolve both promises concurrently
    console.log("Results:", result1, result2);
}

// Test
concurrentRequests(); // Logs "Results: Result 1 Result 2" after both requests are complete (3 seconds in total)



// Task 05: Awaiting Parallel Calls
async function parallelCalls(urls) {
    const fakeFetch = url =>
        new Promise(resolve =>
            setTimeout(() => resolve(`Data from ${url}`), Math.random() * 2000)
        );

    const responses = await Promise.all(urls.map(url => fakeFetch(url))); // Fetch data from all URLs
    console.log("Responses:", responses);
}

// Test
parallelCalls(["url1", "url2", "url3"]); // Logs responses like "Responses: [Data from url1, Data from url2, Data from url3]" after all requests are complete
