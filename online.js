document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const buttons = document.querySelectorAll('button');
    const levelButtons = document.querySelectorAll('.level-button');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = '#00f';
        });
        link.addEventListener('mouseout', function () {
            if (!this.classList.contains('active')) {
                this.style.color = '';
            }
        });
    });

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            this.classList.add('animate__animated', 'animate__pulse');
        });

        button.addEventListener('mouseout', function () {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
    });

    levelButtons.forEach(button => {
        button.addEventListener('click', function () {
            levelButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

