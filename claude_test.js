// Function to fetch posts and log the response
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            console.log('Response data:', data); // Log the response data
        })
        .catch(error => console.error('Error fetching posts:', error)); // Handle any errors
}

// Call the function to fetch posts
fetchPosts();
