// script.js

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.typing-text');
    const phrases = ['buttr.io', '100x your tech.'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Deleting text
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = 150; // Typing speed
        if (isDeleting) {
            typingSpeed /= 2; // Deleting is faster
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Phrase is fully typed, pause before deleting
            typingSpeed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Phrase is fully deleted, move to the next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing the next phrase
        }

        setTimeout(typeText, typingSpeed);
    }

    // Smooth scroll for navbar links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    typeText();
});