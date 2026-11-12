
// GET NAVIGATION ELEMENTS
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// MOBILE NAVIGATION MENU
menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "×" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// HIGHLIGHT ACTIVE NAVIGATION SECTION
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navItems.forEach((item) => {

                item.classList.toggle(
                    "active",
                    item.getAttribute("href") === `#${entry.target.id}`
                );

            });

        }

    });

}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach((section) => {

    observer.observe(section);

});


// AUTOMATIC CURRENT YEAR IN FOOTER
document.getElementById("year").textContent =
    new Date().getFullYear();
