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
// Displays a matrix-style background with countdown and welcome sequence
document.addEventListener('DOMContentLoaded', function() {
    const splash = document.querySelector('#splash-screen');
    const body = document.body;
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    if (!splash || !canvas) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters - now using MERISHAW SCHOOL prominently
    const matrixChars = 'MERISHAW SCHOOL';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Initialize drops
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * canvas.height / fontSize;
    }

    // Matrix animation with more visible characters
    function drawMatrix() {
        ctx.fillStyle = 'rgba(123, 17, 19, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#7b1113'; // Maroon
        ctx.font = fontSize + 'px monospace';
        ctx.shadowColor = 'rgba(197, 160, 89, 0.6)';
        ctx.shadowBlur = 8;

        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    // Start matrix animation
    const matrixInterval = setInterval(drawMatrix, 35);

    // Countdown animation
    const digit3 = document.getElementById('digit-3');
    const digit2 = document.getElementById('digit-2');
    const digit1 = document.getElementById('digit-1');

    // Show 3
    setTimeout(() => {
        digit3.style.opacity = '1';
        digit3.style.animation = 'digitEnlarge 1s ease-out forwards';
    }, 500);

    // Hide 3, show 2
    setTimeout(() => {
        digit3.style.animation = 'pixelSlide 1s ease-out forwards';
        setTimeout(() => {
            digit3.style.display = 'none';
            digit2.style.opacity = '1';
            digit2.style.animation = 'digitEnlarge 1s ease-out forwards';
        }, 100);
    }, 2000);

    // Hide 2, show 1
    setTimeout(() => {
        digit2.style.animation = 'rocketLaunch 1s ease-out forwards';
        setTimeout(() => {
            digit2.style.display = 'none';
            digit1.style.opacity = '1';
            digit1.style.animation = 'digitEnlarge 1s ease-out forwards';
        }, 100);
    }, 3500);

    // Hide 1 with lie down effect
    setTimeout(() => {
        digit1.style.animation = 'lieDown 1s ease-out forwards';
        setTimeout(() => {
            digit1.style.display = 'none';
        }, 1000);

        // Start welcome text collapse animation
        const welcomeText = document.querySelector('.splash-welcome');
        if (welcomeText) {
            welcomeText.style.animation = 'none'; // Stop fadeInUp
            welcomeText.style.opacity = '1';

            // Split welcome text into letters
            const text = welcomeText.textContent;
            welcomeText.textContent = '';
            welcomeText.style.display = 'flex';
            welcomeText.style.gap = '0.1em';

            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char; // Non-breaking space
                span.style.display = 'inline-block';
                span.style.animation = `letterFall 0.8s ease-in-out ${index * 0.25}s forwards`;
                welcomeText.appendChild(span);
            });
        }
    }, 5000);

    // Hide splash after all letters have fallen
    setTimeout(() => {
        clearInterval(matrixInterval);
        splash.classList.add('hide');
        body.classList.remove('splash-active');
    }, 7500);

    // Remove element
    splash.addEventListener('transitionend', () => {
        if (splash.classList.contains('hide')) {
            splash.remove();
        }
    });
});

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (!searchInput || !searchBtn) return;

    // Search button click handler
    searchBtn.addEventListener('click', function() {
        performSearch();
    });

    // Enter key handler
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        // Get all sections that can be searched
        const sections = document.querySelectorAll('section[id]');
        let foundSection = null;

        // Search through section content
        sections.forEach(section => {
            const content = section.textContent.toLowerCase();
            if (content.includes(query)) {
                foundSection = section;
            }
        });

        // If found, scroll to section
        if (foundSection) {
            foundSection.scrollIntoView({ behavior: 'smooth' });
            // Highlight the section briefly
            foundSection.style.transition = 'background-color 0.3s ease';
            foundSection.style.backgroundColor = 'rgba(197, 160, 89, 0.1)';
            setTimeout(() => {
                foundSection.style.backgroundColor = '';
            }, 2000);
        } else {
            // Show no results message
            showSearchMessage('No results found for "' + query + '"');
        }

        // Clear search input
        searchInput.value = '';
    }

    function showSearchMessage(message) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--clr-maroon);
            color: var(--clr-white);
            padding: 1rem 2rem;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            z-index: 10000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;

        document.body.appendChild(messageEl);

        // Remove after 3 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
    }
});

// Newsletter Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterConsent = document.getElementById('newsletter-consent');

    if (!newsletterForm || !newsletterEmail || !newsletterConsent) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = newsletterEmail.value.trim();
        const consent = newsletterConsent.checked;

        // Basic validation
        if (!email) {
            showFormMessage('Please enter your email address.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        if (!consent) {
            showFormMessage('Please agree to receive updates.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = newsletterForm.querySelector('.cta-button');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="button-text">Subscribing...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success
            showFormMessage('Thank you for subscribing! Welcome to the Merishaw community.', 'success');

            // Reset form
            newsletterEmail.value = '';
            newsletterConsent.checked = false;

            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showFormMessage(message, type) {
        // Remove existing messages
        const existingMessage = newsletterForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = 'form-message';
        messageEl.textContent = message;
        messageEl.style.cssText = `
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            text-align: center;
            ${type === 'success' ?
                'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' :
                'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
            }
        `;

        // Insert after form
        newsletterForm.appendChild(messageEl);

        // Auto-remove success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageEl.remove();
            }, 5000);
        }
    }
});

// Language Selector Functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageSelect = document.getElementById('language-select');

    if (!languageSelect) return;

    languageSelect.addEventListener('change', function() {
        const selectedLang = this.value;

        // Show language change message
        const messageEl = document.createElement('div');
        messageEl.textContent = `Language changed to ${selectedLang === 'en' ? 'English' : selectedLang === 'sw' ? 'Swahili' : 'French'}`;
        messageEl.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: var(--clr-gold);
            color: var(--clr-maroon);
            padding: 1rem 2rem;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            z-index: 10000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;

        document.body.appendChild(messageEl);

        // Remove after 3 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 3000);

        // Here you would typically reload the page with the selected language
        // or update content dynamically based on the selected language
        console.log('Language changed to:', selectedLang);
    });
});

