let debounceTimeout;

function showSuggestions() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const input = document.getElementById('searchInput');
        const filter = input.value.toLowerCase();
        const suggestions = document.getElementById('suggestions');
        const items = suggestions.getElementsByTagName('a');

        let count = 0;
        for (let i = 0; i < items.length; i++) {
            const textValue = items[i].textContent || items[i].innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                items[i].style.display = '';
                count++;
            } else {
                items[i].style.display = 'none';
            }
        }
        suggestions.style.display = count > 0 ? 'block' : 'none';
    }, 300); 
}

document.getElementById('searchInput').addEventListener('focus', function() {
    document.getElementById('suggestions').style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-bar')) {
        document.getElementById('suggestions').style.display = 'none';
    }
});
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


// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('.nav-links a');
//     navLinks.forEach(link => {
//         link.addEventListener('mouseenter', () => {
//             // Remove active class from all links
//             navLinks.forEach(nav => nav.classList.remove('active'));
//             // Add active class to hovered link
//             link.classList.add('active');
//         });
//         link.addEventListener('mouseleave', () => {
//             // Reset the active class to the "Community" link after mouse leaves
//             navLinks.forEach(nav => nav.classList.remove('active'));
//             document.querySelector('.nav-links a[href="#"]').classList.add('active');
//         });
//     });

//     // Set the "Community" link as active by default
//     document.querySelector('.nav-links a[href="#"]').classList.add('active');
// });
