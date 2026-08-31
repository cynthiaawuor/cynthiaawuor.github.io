const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const pageName = link.dataset.page;


        // Remove active state from navigation
        navLinks.forEach((item) => {
            item.classList.remove("active");
        });


        // Activate clicked navigation
        link.classList.add("active");


        // Hide all pages
        pages.forEach((page) => {
            page.classList.remove("active");
        });


        // Show selected page
        const selectedPage =
            document.getElementById(pageName);

        selectedPage.classList.add("active");

    });

});
