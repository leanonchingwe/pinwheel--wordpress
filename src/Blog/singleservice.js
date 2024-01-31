document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display all blog posts
    function fetchAllBlogPosts() {
        fetch("data/blog-posts/allpost.json") // Updated file path
            .then(response => response.json())
            .then(data => {
                 // Process and display all blog posts
                data.forEach(blogPost => {
                    displayBlogPost(blogPost);
                });
            })
            .catch(error => {
                console.error("Error fetching blog posts:", error);
            });
    }
    // Function to display a single blog post
    function displayBlogPost(blogPost) {
        const postContainer = document.querySelector(".row"); // Change this selector as needed

        // Create a card for the blog post
        const card = document.createElement("div");
        card.classList.add("col-md-4");
        card.innerHTML = `
            <div class="card mb-4">
                <img src="assets/images/${blogPost.image}" class="card-img-top" alt="Blog Image">
                <div class="card-body">
                    <h5 class="card-title">${blogPost.title}</h5>
                    <p class="card-text">${blogPost.content.substring(0, 100)}...</p>
                    <a href="single.html?id=${blogPost.id}" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;

        postContainer.appendChild(card);
    }

    // Fetch and display all blog posts
    
     fetchAllBlogPosts();
});