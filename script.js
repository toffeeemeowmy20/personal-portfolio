

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");



menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "×" : "☰";

});



document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});



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



document.getElementById("year").textContent =
    new Date().getFullYear();
