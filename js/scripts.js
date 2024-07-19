document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function makeActive() {
        const sectionId = this.getAttribute('href').substring(1);
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });

        navLinks.forEach(link => link.classList.remove('current'));
        this.classList.add('current');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', makeActive);
    });
});
