
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("nav ul li");
    let currentActive = document.querySelector(".active");

    navItems.forEach(item => {
        item.addEventListener("mouseover", function() {

            if (currentActive) {
                currentActive.classList.remove("active");
            }
            item.classList.add("active");
        });

        item.addEventListener("mouseout", function() {
            item.classList.remove("active");
            if (item !== currentActive) {
                currentActive.classList.add("active");
            }
        });

        item.addEventListener("click", function() {
            if (currentActive) {
                currentActive.classList.remove("active");
            }
            item.classList.add("active");
            currentActive = item;
        });
    });
});
