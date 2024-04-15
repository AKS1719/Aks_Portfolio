document.addEventListener('DOMContentLoaded', function() {
    const phrases = ["Web Developer", "Competitive Coder"];
    const speed = 110; // typing speed in milliseconds

    const textSpan = document.querySelector('#Home  .text');
    const cursorSpan = document.querySelector('#Home .cursor');

    let phraseIndex = 0;
    let isTyping = true;

    function type() {
        if (isTyping) {
            if (phraseIndex < phrases.length) {
                const currentPhrase = phrases[phraseIndex];
                let charIndex = 0;
                function typeNextChar() {
                    if (charIndex <= currentPhrase.length) {
                        textSpan.textContent = currentPhrase.substring(0, charIndex);
                        charIndex++;
                        setTimeout(typeNextChar, speed);
                    } else {
                        isTyping = false;
                        setTimeout(pause, speed*10); // Wait before erasing
                    }
                }
                typeNextChar();
            }
        }
    }

    function pause() {
        setTimeout(erase, speed * 2); // Wait before erasing
    }

    function erase() {
        let charIndex = textSpan.textContent.length;
        function eraseNextChar() {
            if (charIndex >= 0) {
                textSpan.textContent = phrases[phraseIndex].substring(0, charIndex);
                charIndex--;
                setTimeout(eraseNextChar, speed -60);
            } else {
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
                isTyping = true;
                setTimeout(type, speed); // Start typing the next phrase
            }
        }
        eraseNextChar();
    }

    type();
});
