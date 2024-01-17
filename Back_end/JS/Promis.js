// Example: Simulating an asynchronous operation using a Promise

// Function that returns a Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const success = Math.random() < 0.8; // Simulating a successful operation 80% of the time

      if (success) {
        const data = { message: "Data fetched successfully!" };
        resolve(data); // Resolving the Promise with the fetched data
      } else {
        reject(new Error("Failed to fetch data.")); // Rejecting the Promise with an error message
      }
    }, 2000); // Simulating a 2-second delay
  });
};

// Using the Promise
fetchData()
  .then((result) => {
    // This block is executed when the Promise is fulfilled
    console.log("Fulfilled:", result);
  })
  .catch((error) => {
    // This block is executed when the Promise is rejected
    console.error("Rejected:", error.message);
  });
