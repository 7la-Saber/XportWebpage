document.addEventListener('DOMContentLoaded', function() {
    const serviceImages = document.querySelectorAll('.services .service img');
    
    serviceImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    });
});
