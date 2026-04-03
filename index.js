// Surprising Mascot Pop-Up Animation
// Uses Intersection Observer to detect when the mascot section comes into view
// Then triggers a fun animation to make the mascot "pop up" surprisingly

document.addEventListener('DOMContentLoaded', function() {
    const mascotSection = document.querySelector('.mascot-section');
    const mascotImg = document.querySelector('.mascot-img');

    if (!mascotSection || !mascotImg) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay for surprise effect
                setTimeout(() => {
                    mascotImg.classList.add('visible');
                }, 300); // 300ms delay for anticipation

                // Stop observing after animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Trigger a bit before fully in view
    });

    // Start observing the mascot section
    observer.observe(mascotSection);
});

// Hero title swoosh loop
// Splits text into individual animating span characters

document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';

    originalText.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'swoosh-letter';
        span.textContent = char;

        const delay = index * 0.18; // stagger letters by 180ms
        span.style.animationDelay = `${delay}s`;
        heroTitle.appendChild(span);
    });
});

// Contact Section Glow Effect
// Highlights the contact section when user arrives at it
document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.querySelector('#contact');

    if (!contactSection) return;

    // Create Intersection Observer for contact section
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add glow effect
                contactSection.classList.add('glow');

                // Remove glow after 3 seconds
                setTimeout(() => {
                    contactSection.classList.remove('glow');
                }, 3000);

                // Stop observing after animation triggers
                contactObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger a bit before fully in view
    });

    // Start observing the contact section
    contactObserver.observe(contactSection);
});

// JOIN US Button Click Glow Effect
// Highlights the quick links and social sections for 5 seconds on button click
document.addEventListener('DOMContentLoaded', function() {
    const joinUsButton = document.querySelector('a[href="#contact"].primary-btn');
    const footerLinks = document.querySelector('.footer-links');
    const footerSocial = document.querySelector('.footer-social');

    if (!joinUsButton || !footerLinks || !footerSocial) return;

    joinUsButton.addEventListener('click', function(e) {
        // Add glow effect to both sections
        footerLinks.classList.add('active-glow');
        footerSocial.classList.add('active-glow');

        // Remove glow after 5 seconds
        setTimeout(() => {
            footerLinks.classList.remove('active-glow');
            footerSocial.classList.remove('active-glow');
        }, 5000);
    });
});

// Typewriter Effect for Athletics Heading
// Creates letter-by-letter reveal animation for ultra-exciting dopamine effect
document.addEventListener('DOMContentLoaded', function() {
    const athleticsHeading = document.querySelector('#athletics-heading');

    if (!athleticsHeading) return;

    const athleticsSection = document.querySelector('#athletics');

    // Create Intersection Observer for athletics section
    const athleticsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get original text
                const text = athleticsHeading.textContent;

                // Clear the heading
                athleticsHeading.textContent = '';
                athleticsHeading.classList.add('active');

                // Split text into individual characters and wrap in spans
                text.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.className = 'typewriter-char';
                    span.style.animationDelay = (index * 0.25) + 's'; // 250ms between each letter
                    athleticsHeading.appendChild(span);
                });

                // Stop observing after animation triggers
                athleticsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px'
    });

    // Start observing the athletics section
    athleticsObserver.observe(athleticsSection);
});

// Pixie Dust Button Animation
// Adds elegant disappear/reappear effect to all CTA buttons on click
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only prevent default if button has href
            if (this.href) {
                e.preventDefault();

                const target = this.href;

                // Wrap button text in spans if not already done
                if (!this.querySelector('.button-text')) {
                    const text = this.textContent;
                    this.textContent = '';
                    const span = document.createElement('span');
                    span.className = 'button-text';
                    span.textContent = text;
                    this.appendChild(span);
                }

                // Trigger pixie dust animation
                this.classList.add('pixie-clicked');

                // After dust clears (600ms), restore text and navigate
                setTimeout(() => {
                    this.classList.remove('pixie-clicked');
                    this.classList.add('text-restore');

                    // Navigate after text drop animation (600ms)
                    setTimeout(() => {
                        this.classList.remove('text-restore');
                        // Navigate to target
                        if (target.startsWith('#')) {
                            const element = document.querySelector(target);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        } else {
                            window.location.href = target;
                        }
                    }, 600);
                }, 600);
            }
        });
    });
});

// Varsity Standard Typewriter with Green Glow
// Triggers typewriter animation when the text scrolls into view
document.addEventListener('DOMContentLoaded', function() {
    const varsityText = document.querySelector('#varsity-standard-text');
    
    if (!varsityText) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !varsityText.classList.contains('active')) {
                // Trigger typewriter animation when in view
                varsityText.classList.add('active');
                
                // Stop observing after animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: '0px 0px -50px 0px'
    });

    // Start observing the varsity text
    observer.observe(varsityText);
});

// Splash Screen Intro Animation
// Displays a vinyl graffiti-style welcome animation before revealing the page
document.addEventListener('DOMContentLoaded', function() {
    const splash = document.querySelector('#splash-screen');
    const sequenceContainer = document.querySelector('.splash-sequence');
    const body = document.body;

    if (!splash || !sequenceContainer) return;

    const words = ['I', 'AM', 'WHO', 'I', 'AM', 'BECAUSE', 'OF', 'WHO', 'WE', 'ARE'];
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.animationDelay = `${2.6 + index * 0.12}s`;
        span.style.opacity = '1';
        span.style.animation = `floatWord 3.6s ease-in-out ${2.6 + index * 0.12}s infinite`;
        sequenceContainer.appendChild(span);
    });

    // Reveal the floating word sequence after the welcome line appears
    setTimeout(() => {
        sequenceContainer.style.opacity = '1';
    }, 2800);

    // Hide the splash screen after the intro completes
    setTimeout(() => {
        splash.classList.add('hide');
        body.classList.remove('splash-active');
    }, 6200);

    // Remove the element from DOM once transition finishes
    splash.addEventListener('transitionend', () => {
        if (splash.classList.contains('hide')) {
            splash.remove();
        }
    });
});

