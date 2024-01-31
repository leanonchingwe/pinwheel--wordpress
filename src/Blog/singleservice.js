document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display all blog posts
    function fetchAllBlogPosts() {
        fetch("src/data/services/wordpress.json") // Updated file path
            .then(response => response.json())
            .then(data => {
                // Process and display all blog posts
                data.webmeshWordPressDevelopmentPackage.features.forEach(blogPost => {
                    displayBlogPost(blogPost);
                });
            })
            .catch(error => {
                console.error("Error fetching blog posts:", error);
            });
    }

    // Function to display a single blog post
    function displayBlogPost(blogPost) {
        const postContainer = document.querySelector(".single"); // Change this selector as needed

        // Create a card for the blog post
        const container = document.createElement("div");
        container.classList.add("lg:col-10");
        container.innerHTML = `
            <div class="px-4 text-center">
                <img class="mx-auto" src="images/icons/webflow-colored.svg" alt="" />
                <h1 class="mt-6">${blogPost.title}</h1>
                <p class="mt-6">${blogPost.description}</p>
                <a class="btn btn-primary mt-8 px-10" href="#">Start ${blogPost.title}</a>
            </div>
            <div class="my-12 border-y border-border py-3">
                <ul class="tab-nav filter-list justify-center border-b-0" data-tab-nav>
                    <li>
                        <a class="filter-btn active btn btn-sm" data-tab="0" href="#">About Service</a>
                    </li>
                    <li>
                        <a class="filter-btn btn btn-sm inline-block border border-[#A9A9A9] text-dark" data-tab="1" href="#">Benefits</a>
                    </li>
                    <li>
                        <a class="filter-btn btn btn-sm inline-block border border-[#A9A9A9] text-dark" data-tab="2" href="#">How to start?</a>
                    </li>
                </ul>
            </div>
            <div class="integrations-single-content px-4 tab-content" data-tab-content>
                <div class="tab-content-panel" data-tab-panel="0">
                    <h4>How to connect your store with Webflow</h4>
                    <p>${blogPost.content}</p>
                    <ul>${blogPost.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
                    <h4>Why opening Webflow sales channels?</h4>
                    <p>${blogPost.content}</p>
                </div>
                <div class="tab-content-panel" data-tab-panel="1">
                    <h4>How to connect your store with Webflow 1</h4>
                    <p>${blogPost.content}</p>
                    <ul>${blogPost.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
                    <h4>Why opening Webflow sales channels?</h4>
                    <p>${blogPost.content}</p>
                </div>
                <div class="tab-content-panel" data-tab-panel="2">
                    <h4>How to connect your store with Webflow 2</h4>
                    <p>${blogPost.content}</p>
                    <ul>${blogPost.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
                    <h4>Why opening Webflow sales channels?</h4>
                    <p>${blogPost.content}</p>
                </div>
            </div>
        `;

        postContainer.appendChild(container);
    }

    // Fetch and display all blog posts
    fetchAllBlogPosts();
});
