document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function makeActive(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

        navLinks.forEach(link => link.classList.remove('current'));
        this.classList.add('current');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', makeActive);
    });
});
