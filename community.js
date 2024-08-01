// Highlight the active page in the navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to hovered link
            link.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            // Reset the active class to the "Community" link after mouse leaves
            navLinks.forEach(nav => nav.classList.remove('active'));
            document.querySelector('.nav-links a[href="#"]').classList.add('active');
        });
    });

    // Set the "Community" link as active by default
    document.querySelector('.nav-links a[href="#"]').classList.add('active');
});
