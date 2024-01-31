document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display all blog posts
    function fetchAllBlogPosts() {
        fetch("src/data/services/wordpress.json") // Updated file path
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
        const postContainer = document.querySelector(".single"); // Change this selector as needed

        // Create a card for the blog post
        const container = document.createElement("div");
        container.classList.add("integration-single-container");
        container.innerHTML = `

        <div class="px-4 text-center">
        <img
          class="mx-auto"
          src="images/icons/webflow-colored.svg"
          alt=""
        />
        <h1 class="mt-6">${blogPost.title}</h1>
        <p class="mt-6">
        ${blogPost.description}
        </p>
        <a class="btn btn-primary mt-8 px-10" href="#">Start ${blogPost.title}</a>
      </div>
      <div class="my-12 border-y border-border py-3">
        <ul class="tab-nav filter-list justify-center border-b-0" data-tab-nav>
          <li>
            <a class="filter-btn active btn btn-sm" data-tab="0" href="#"
              >About Service</a
            >
          </li>
          <li>
            <a
              class="filter-btn btn btn-sm inline-block border border-[#A9A9A9] text-dark" data-tab="1"
              href="#"
              >Benefits</a
            >
          </li>
          <li>
            <a
              class="filter-btn btn btn-sm inline-block border border-[#A9A9A9] text-dark" data-tab="2"
              href="#"
              >How to start?</a
            >
          </li>
        </ul>
      </div>
      <div class="integrations-single-content px-4 tab-content" data-tab-content >
        <div class="tab-content-panel" data-tab-panel="0">
          <h4>How to connect your store with Webflow</h4>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Nulla quis lorem ut libero
            malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor
            volutpat. Cras ultricies ligula sed magna dictum porta. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor
            accumsan tincidunt. Nulla porttitor accumsan tincidunt. Sed
            porttitor lectus nibh. Donec sollicitudin molestie malesuada.
            Donec sollicitudin
          </p>
          <ul>
            <li>
              Enhance or improve User experience, our Site, or our Service.
            </li>
            <li>Process transactions.</li>
            <li>Send emails about our Site or respond to inquiries.</li>
            <li>
              Send emails and updates about Conclude, including news and
              requests for agreement to amended legal documents such
            </li>
            <li>
              Perform any other function that we believe in good is necessary
              to protect the or proper functioning of our Site or Service.
            </li>
          </ul>
          <h4>Why opening Webflow sales channels?</h4>
          <p>
            feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
            a. Vivamus suscipit tortor eget felis porttitor volutpat. Cras
            ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
            tincidunt. Nulla porttitor accumsan tincidunt. Sed porttitor
            lectus nibh. Donec sollicitudin molestie malesuada. Donec
            sollicitudin
          </p>
        </div>
        <div class="tab-content-panel" data-tab-panel="1">
          <h4>How to connect your store with Webflow 1</h4>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Nulla quis lorem ut libero
            malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor
            volutpat. Cras ultricies ligula sed magna dictum porta. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor
            accumsan tincidunt. Nulla porttitor accumsan tincidunt. Sed
            porttitor lectus nibh. Donec sollicitudin molestie malesuada.
            Donec sollicitudin
          </p>
          <ul>
            <li>
              Enhance or improve User experience, our Site, or our Service.
            </li>
            <li>Process transactions.</li>
            <li>Send emails about our Site or respond to inquiries.</li>
            <li>
              Send emails and updates about Conclude, including news and
              requests for agreement to amended legal documents such
            </li>
            <li>
              Perform any other function that we believe in good is necessary
              to protect the or proper functioning of our Site or Service.
            </li>
          </ul>
          <h4>Why opening Webflow sales channels?</h4>
          <p>
            feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
            a. Vivamus suscipit tortor eget felis porttitor volutpat. Cras
            ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
            tincidunt. Nulla porttitor accumsan tincidunt. Sed porttitor
            lectus nibh. Donec sollicitudin molestie malesuada. Donec
            sollicitudin
          </p>
        </div>
        <div class="tab-content-panel" data-tab-panel="2">
          <h4>How to connect your store with Webflow 2</h4>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus magna justo, lacinia eget
            consectetur sed, convallis at tellus. Nulla quis lorem ut libero
            malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor
            volutpat. Cras ultricies ligula sed magna dictum porta. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor
            accumsan tincidunt. Nulla porttitor accumsan tincidunt. Sed
            porttitor lectus nibh. Donec sollicitudin molestie malesuada.
            Donec sollicitudin
          </p>
          <ul>
            <li>
              Enhance or improve User experience, our Site, or our Service.
            </li>
            <li>Process transactions.</li>
            <li>Send emails about our Site or respond to inquiries.</li>
            <li>
              Send emails and updates about Conclude, including news and
              requests for agreement to amended legal documents such
            </li>
            <li>
              Perform any other function that we believe in good is necessary
              to protect the or proper functioning of our Site or Service.
            </li>
          </ul>
          <h4>Why opening Webflow sales channels?</h4>
          <p>
            feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
            a. Vivamus suscipit tortor eget felis porttitor volutpat. Cras
            ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
            tincidunt. Nulla porttitor accumsan tincidunt. Sed porttitor
            lectus nibh. Donec sollicitudin molestie malesuada. Donec
            sollicitudin
          </p>
        </div>
      </div>
    </div>
  </div>
</div



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

