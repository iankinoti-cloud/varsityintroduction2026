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

    // Translation data for all supported languages
    const translations = {
        en: {
            // Navigation
            'Our Philosophy': 'Our Philosophy',
            'Athletics': 'Athletics',
            'The Mascot': 'The Mascot',
            'Testimonials': 'Testimonials',
            'Varsity Shop': 'Varsity Shop',
            'JOIN US!': 'JOIN US!',

            // Hero Section
            'EXCELLENCE': 'EXCELLENCE',
            'THROUGH': 'THROUGH',
            'UBUNTU': 'UBUNTU',
            'Where tradition meets innovation, and every student discovers their potential.': 'Where tradition meets innovation, and every student discovers their potential.',
            'DISCOVER MORE': 'DISCOVER MORE',

            // Philosophy Section
            'Our Philosophy': 'Our Philosophy',
            'I am because we are': 'I am because we are',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.',

            // Mascot Section
            'Meet Our Mascot': 'Meet Our Mascot',
            'The Merishaw Lion': 'The Merishaw Lion',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'Symbolizing courage, leadership, and the spirit of Ubuntu.',

            // Athletics Section
            'Varsity Excellence': 'Varsity Excellence',
            'Champions in': 'Champions in',
            'Track & Field': 'Track & Field',
            'Basketball': 'Basketball',
            'Rugby': 'Rugby',
            'Swimming': 'Swimming',

            // Testimonials Section
            'What Our Community Says': 'What Our Community Says',
            'International voices celebrating Merishaw excellence': 'International voices celebrating Merishaw excellence',

            // Recognition Section
            'International Recognition': 'International Recognition',
            'Accredited excellence on the global stage': 'Accredited excellence on the global stage',
            'STEM Excellence Program': 'STEM Excellence Program',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'Official partner in Science, Technology, Engineering, and Mathematics education',
            'United Nations Member': 'United Nations Member',
            'Accredited participant in Model United Nations global diplomacy program': 'Accredited participant in Model United Nations global diplomacy program',
            'World Scholars Network': 'World Scholars Network',
            'Elite member of the international academic excellence consortium': 'Elite member of the international academic excellence consortium',
            'Global Partnership Alliance': 'Global Partnership Alliance',
            'Strategic collaborator with leading international educational institutions': 'Strategic collaborator with leading international educational institutions',

            // Newsletter Section
            'Stay Connected': 'Stay Connected',
            'Join our global community and receive updates on Merishaw excellence': 'Join our global community and receive updates on Merishaw excellence',
            'Subscribe': 'Subscribe',

            // Footer
            'MERISHAW SCHOOL': 'MERISHAW SCHOOL',
            'I am because we are.': 'I am because we are.',
            'STEM Excellence Program': 'STEM Excellence Program',
            'United Nations Member': 'United Nations Member',
            'World Scholars Network': 'World Scholars Network',
            'Quick Links': 'Quick Links',
            'Get In Touch': 'Get In Touch',
            'Follow Us': 'Follow Us',

            // Form placeholders and messages
            'Search...': 'Search...',
            'Enter your email address': 'Enter your email address',
            'I agree to receive updates from Merishaw School': 'I agree to receive updates from Merishaw School',
            'Please enter your email address.': 'Please enter your email address.',
            'Please enter a valid email address.': 'Please enter a valid email address.',
            'Please agree to receive updates.': 'Please agree to receive updates.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'Thank you for subscribing! Welcome to the Merishaw community.',
            'Subscribing...': 'Subscribing...',
            'No results found for': 'No results found for'
        },
        sw: {
            // Navigation
            'Our Philosophy': 'Falsafa Yetu',
            'Athletics': 'Michezo',
            'The Mascot': 'Mnyama Wetu',
            'Testimonials': 'Ushuhuda',
            'Varsity Shop': 'Duka la Varsity',
            'JOIN US!': 'JIUNGE NA SISI!',

            // Hero Section
            'EXCELLENCE': 'UBORA',
            'THROUGH': 'KUPITIA',
            'UBUNTU': 'UBUNTU',
            'Where tradition meets innovation, and every student discovers their potential.': 'Mahali ambapo mila hukutana na uvumbuzi, na kila mwanafunzi hugundua uwezo wake.',
            'DISCOVER MORE': 'GUNDUA ZAIDI',

            // Philosophy Section
            'Our Philosophy': 'Falsafa Yetu',
            'I am because we are': 'Mimi ni kwa sababu sisi ni',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'Katika Shule ya Merishaw, tunaamini katika falsafa ya Ubuntu - wazo kwamba ubinadamu wetu umeunganishwa.',

            // Mascot Section
            'Meet Our Mascot': 'Kutana na Mnyama Wetu',
            'The Merishaw Lion': 'Simba wa Merishaw',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'Inayowakilisha ujasiri, uongozi, na roho ya Ubuntu.',

            // Athletics Section
            'Varsity Excellence': 'Ubora wa Varsity',
            'Champions in': 'Mabingwa katika',
            'Track & Field': 'Mbio na Uwanja',
            'Basketball': 'Mpira wa Kikapu',
            'Rugby': 'Rugby',
            'Swimming': 'Kuogelea',

            // Testimonials Section
            'What Our Community Says': 'Jamii Yetu Inasema Nini',
            'International voices celebrating Merishaw excellence': 'Sauti za kimataifa zinazosherehekea ubora wa Merishaw',

            // Recognition Section
            'International Recognition': 'Utambuzi wa Kimataifa',
            'Accredited excellence on the global stage': 'Ubora ulioidhinishwa kwenye jukwaa la ulimwengu',
            'STEM Excellence Program': 'Programu ya Ubora wa STEM',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'Mshirika rasmi katika elimu ya Sayansi, Teknolojia, Uhandisi, na Hisabati',
            'United Nations Member': 'Mwanachama wa Umoja wa Mataifa',
            'Accredited participant in Model United Nations global diplomacy program': 'Mshiriki aliyeidhinishwa katika programu ya diplomasia ya ulimwengu ya Model United Nations',
            'World Scholars Network': 'Mtandao wa Wasomi wa Dunia',
            'Elite member of the international academic excellence consortium': 'Mwanachama wa wasomi wa muungano wa ubora wa kitaaluma wa kimataifa',
            'Global Partnership Alliance': 'Muungano wa Ushirikiano wa Dunia',
            'Strategic collaborator with leading international educational institutions': 'Mshiriki wa kimkakati na taasisi zinazoongoza za elimu ya kimataifa',

            // Newsletter Section
            'Stay Connected': 'Endelea Kuunganishwa',
            'Join our global community and receive updates on Merishaw excellence': 'Jiunge na jamii yetu ya ulimwengu na upokee sasisho kuhusu ubora wa Merishaw',
            'Subscribe': 'Jisajili',

            // Footer
            'MERISHAW SCHOOL': 'SHULE YA MERISHAW',
            'I am because we are.': 'Mimi ni kwa sababu sisi ni.',
            'STEM Excellence Program': 'Programu ya Ubora wa STEM',
            'United Nations Member': 'Mwanachama wa Umoja wa Mataifa',
            'World Scholars Network': 'Mtandao wa Wasomi wa Dunia',
            'Quick Links': 'Viungo vya Haraka',
            'Get In Touch': 'Wasiliana Nasi',
            'Follow Us': 'Tufuate',

            // Form placeholders and messages
            'Search...': 'Tafuta...',
            'Enter your email address': 'Ingiza anwani yako ya barua pepe',
            'I agree to receive updates from Merishaw School': 'Nakubali kupokea sasisho kutoka Shule ya Merishaw',
            'Please enter your email address.': 'Tafadhali ingiza anwani yako ya barua pepe.',
            'Please enter a valid email address.': 'Tafadhali ingiza anwani halali ya barua pepe.',
            'Please agree to receive updates.': 'Tafadhali kubali kupokea sasisho.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'Asante kwa kujisajili! Karibu katika jamii ya Merishaw.',
            'Subscribing...': 'Inajisajili...',
            'No results found for': 'Hakuna matokeo yaliyopatikana kwa'
        },
        fr: {
            // Navigation
            'Our Philosophy': 'Notre Philosophie',
            'Athletics': 'Athlétisme',
            'The Mascot': 'Notre Mascotte',
            'Testimonials': 'Témoignages',
            'Varsity Shop': 'Boutique Varsity',
            'JOIN US!': 'REJOIGNEZ-NOUS!',

            // Hero Section
            'EXCELLENCE': 'EXCELLENCE',
            'THROUGH': 'À TRAVERS',
            'UBUNTU': 'UBUNTU',
            'Where tradition meets innovation, and every student discovers their potential.': 'Où la tradition rencontre l\'innovation, et chaque élève découvre son potentiel.',
            'DISCOVER MORE': 'DÉCOUVRIR PLUS',

            // Philosophy Section
            'Our Philosophy': 'Notre Philosophie',
            'I am because we are': 'Je suis parce que nous sommes',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'À l\'école Merishaw, nous croyons en la philosophie Ubuntu - l\'idée que notre humanité est interconnectée.',

            // Mascot Section
            'Meet Our Mascot': 'Rencontrez Notre Mascotte',
            'The Merishaw Lion': 'Le Lion de Merishaw',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'Symbolisant le courage, le leadership et l\'esprit Ubuntu.',

            // Athletics Section
            'Varsity Excellence': 'Excellence Varsity',
            'Champions in': 'Champions en',
            'Track & Field': 'Athlétisme',
            'Basketball': 'Basketball',
            'Rugby': 'Rugby',
            'Swimming': 'Natation',

            // Testimonials Section
            'What Our Community Says': 'Ce que Dit Notre Communauté',
            'International voices celebrating Merishaw excellence': 'Voix internationales célébrant l\'excellence de Merishaw',

            // Recognition Section
            'International Recognition': 'Reconnaissance Internationale',
            'Accredited excellence on the global stage': 'Excellence accréditée sur la scène mondiale',
            'STEM Excellence Program': 'Programme d\'Excellence STEM',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'Partenaire officiel dans l\'éducation Sciences, Technologie, Ingénierie et Mathématiques',
            'United Nations Member': 'Membre des Nations Unies',
            'Accredited participant in Model United Nations global diplomacy program': 'Participant accrédité au programme de diplomatie mondiale des Nations Unies Modèle',
            'World Scholars Network': 'Réseau des Érudits Mondiaux',
            'Elite member of the international academic excellence consortium': 'Membre d\'élite du consortium international d\'excellence académique',
            'Global Partnership Alliance': 'Alliance de Partenariat Mondial',
            'Strategic collaborator with leading international educational institutions': 'Collaborateur stratégique avec les principales institutions éducatives internationales',

            // Newsletter Section
            'Stay Connected': 'Restez Connecté',
            'Join our global community and receive updates on Merishaw excellence': 'Rejoignez notre communauté mondiale et recevez des mises à jour sur l\'excellence de Merishaw',
            'Subscribe': 'S\'abonner',

            // Footer
            'MERISHAW SCHOOL': 'ÉCOLE MERISHAW',
            'I am because we are.': 'Je suis parce que nous sommes.',
            'STEM Excellence Program': 'Programme d\'Excellence STEM',
            'United Nations Member': 'Membre des Nations Unies',
            'World Scholars Network': 'Réseau des Érudits Mondiaux',
            'Quick Links': 'Liens Rapides',
            'Get In Touch': 'Contactez-Nous',
            'Follow Us': 'Suivez-Nous',

            // Form placeholders and messages
            'Search...': 'Rechercher...',
            'Enter your email address': 'Entrez votre adresse e-mail',
            'I agree to receive updates from Merishaw School': 'J\'accepte de recevoir des mises à jour de l\'école Merishaw',
            'Please enter your email address.': 'Veuillez entrer votre adresse e-mail.',
            'Please enter a valid email address.': 'Veuillez entrer une adresse e-mail valide.',
            'Please agree to receive updates.': 'Veuillez accepter de recevoir des mises à jour.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'Merci de vous être abonné ! Bienvenue dans la communauté Merishaw.',
            'Subscribing...': 'Abonnement...',
            'No results found for': 'Aucun résultat trouvé pour'
        },
        am: {
            // Navigation
            'Our Philosophy': 'ፍልስፍናችን',
            'Athletics': 'ስፖርት',
            'The Mascot': 'ማስተያየታችን',
            'Testimonials': 'ምስክርነቶች',
            'Varsity Shop': 'ቫርሲቲ ሱቅ',
            'JOIN US!': 'ከኛ ጋር ተቀላቀሉ!',

            // Hero Section
            'EXCELLENCE': 'ተለያይ አፈፃፀም',
            'THROUGH': 'በኩል',
            'UBUNTU': 'ኡቡንቱ',
            'Where tradition meets innovation, and every student discovers their potential.': 'ተለያይ ልምድ እና ኢኖቬሽን ቦታ የሚገናኙበት እና እያንዳንዱ ተማሪ ሊችለው የሚችለውን የሚያወቅበት ቦታ።',
            'DISCOVER MORE': 'ተጨማሪ ያወቁ',

            // Philosophy Section
            'Our Philosophy': 'ፍልስፍናችን',
            'I am because we are': 'እኔ ነኝ ምክንያቱም እኛ ነን',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'በመሪሻው ትምህርት ቤት ቦታ ፍልስፍና ኡቡንቱን እናምናለን - ስለ ሰብዓዊ ተፈጥሮአችን የሚያሳይ ሀሳብ እና እኛ ተያያዥ ነን።',

            // Mascot Section
            'Meet Our Mascot': 'ማስተያየታችንን ያውቁ',
            'The Merishaw Lion': 'መሪሻው አንበሳ',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'የልብ ጉልበት፣ አመራር እና ኡቡንቱ መንፈስን የሚያሳይ።',

            // Athletics Section
            'Varsity Excellence': 'ቫርሲቲ ተለያይ አፈፃፀም',
            'Champions in': 'ባህሪያን በ',
            'Track & Field': 'ሩጫ እና ቦታ',
            'Basketball': 'ባስኬትቦል',
            'Rugby': 'ሩግቢ',
            'Swimming': 'መዋኛ',

            // Testimonials Section
            'What Our Community Says': 'ማህበራችን ምን ይላል',
            'International voices celebrating Merishaw excellence': 'የመሪሻው ተለያይ አፈፃፀምን የሚለምዱ የአለም ስውር ድምጾች',

            // Recognition Section
            'International Recognition': 'የአለም ማወቂያ',
            'Accredited excellence on the global stage': 'በአለም ስብስብ ላይ የተረጋገጠ ተለያይ አፈፃፀም',
            'STEM Excellence Program': 'የSTEM ተለያይ አፈፃፀም ፕሮግራም',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'በሳይንስ፣ ቴክኖሎጂ፣ ኢንጂነሪንግ እና ማቲማቲክስ ትምህርት ላይ ርስሚ አጋር',
            'United Nations Member': 'የተባበሉት መንግስታት አባል',
            'Accredited participant in Model United Nations global diplomacy program': 'በየተባበሉት መንግስታት ምሳሌ አለም አቀፍ የዲፕሎማሲ ፕሮግራም ላይ የተረጋገጠ ተሳታፊ',
            'World Scholars Network': 'የአለም ተማሪዎች አውታርክ',
            'Elite member of the international academic excellence consortium': 'የአለም አቀፍ የትምህርት ተለያይ አፈፃፀም ኮንሰርትየም የተለያዩ አባላት',
            'Global Partnership Alliance': 'የአለም አቀፍ ሽርክና ማህበር',
            'Strategic collaborator with leading international educational institutions': 'ከዋና ዋና አለም አቀፍ ትምህርት ተቋማት ጋር የስትራትጂ ምትያራዊ',

            // Newsletter Section
            'Stay Connected': 'ተያያዥ ይቆዩ',
            'Join our global community and receive updates on Merishaw excellence': 'አለም አቀፍ ማህበራችንን ይቀላቀሉ እና ስለ መሪሻው ተለያይ አፈፃፀም ያለውን ማሳወቂያ ይቀበሉ',
            'Subscribe': 'ይመዝገቡ',

            // Footer
            'MERISHAW SCHOOL': 'መሪሻው ትምህርት ቤት',
            'I am because we are.': 'እኔ ነኝ ምክንያቱም እኛ ነን።',
            'STEM Partner': 'የSTEM አጋር',
            'UN Member': 'የተባበሉት መንግስታት አባል',
            'World Scholars': 'የአለም ተማሪዎች',
            'Global Alliance': 'የአለም አቀፍ ማህበር',
            'Quick Links': 'ፈጣን አገናኞች',
            'Get In Touch': 'ከኛ ጋር ያልኩ',
            'Follow Us': 'እኛን ይከተሉ',

            // Form placeholders and messages
            'Search...': 'ፈልግ...',
            'Enter your email address': 'ኢሜል አድራሻዎን ያስገቡ',
            'I agree to receive updates from Merishaw School': 'ከመሪሻው ትምህርት ቤት ማሳወቂያ መቀበል እስማማለሁ',
            'Please enter your email address.': 'ኢሜል አድራሻዎን ያስገቡ።',
            'Please enter a valid email address.': 'ትክክለኛ ኢሜል አድራሻ ያስገቡ።',
            'Please agree to receive updates.': 'ማሳወቂያ መቀበል እስማማለሁ።',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'ለመመዝገብ እናመሰግናለን! እንኳን ደህና መጡ በመሪሻው ማህበራ።',
            'Subscribing...': 'በመመዝገብ ላይ...',
            'No results found for': 'ለ ምንም ውጤት አልተገኘም'
        },
        ar: {
            // Navigation
            'Our Philosophy': 'فلسفتنا',
            'Athletics': 'الرياضة',
            'The Mascot': 'شعارنا',
            'Testimonials': 'الشهادات',
            'Varsity Shop': 'متجر الجامعة',
            'JOIN US!': 'انضم إلينا!',

            // Hero Section
            'EXCELLENCE': 'التميز',
            'THROUGH': 'من خلال',
            'UBUNTU': 'أوبونتو',
            'Where tradition meets innovation, and every student discovers their potential.': 'حيث يلتقي التقليد بالابتكار، ويكتشف كل طالب إمكاناته.',
            'DISCOVER MORE': 'اكتشف المزيد',

            // Philosophy Section
            'Our Philosophy': 'فلسفتنا',
            'I am because we are': 'أنا موجود لأننا موجودون',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'في مدرسة ميريشو، نؤمن بفلسفة أوبونتو - الفكرة القائلة بأن إنسانيتنا مترابطة.',

            // Mascot Section
            'Meet Our Mascot': 'تعرف على شعارنا',
            'The Merishaw Lion': 'أسد ميريشو',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'رمز للشجاعة والقيادة وروح أوبونتو.',

            // Athletics Section
            'Varsity Excellence': 'تميز الجامعة',
            'Champions in': 'أبطال في',
            'Track & Field': 'الجري والميدان',
            'Basketball': 'كرة السلة',
            'Rugby': 'الرغبي',
            'Swimming': 'السباحة',

            // Testimonials Section
            'What Our Community Says': 'ما تقوله مجتمعنا',
            'International voices celebrating Merishaw excellence': 'أصوات دولية تحتفل بتميز ميريشو',

            // Recognition Section
            'International Recognition': 'الاعتراف الدولي',
            'Accredited excellence on the global stage': 'تميز معتمد على الساحة العالمية',
            'STEM Excellence Program': 'برنامج التميز في العلوم والتكنولوجيا والهندسة والرياضيات',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'شريك رسمي في تعليم العلوم والتكنولوجيا والهندسة والرياضيات',
            'United Nations Member': 'عضو في الأمم المتحدة',
            'Accredited participant in Model United Nations global diplomacy program': 'مشارك معتمد في برنامج الدبلوماسية العالمية للأمم المتحدة النموذجية',
            'World Scholars Network': 'شبكة العلماء العالمية',
            'Elite member of the international academic excellence consortium': 'عضو نخبوي في اتحاد التميز الأكاديمي الدولي',
            'Global Partnership Alliance': 'تحالف الشراكة العالمية',
            'Strategic collaborator with leading international educational institutions': 'متعاون استراتيجي مع المؤسسات التعليمية الدولية الرائدة',

            // Newsletter Section
            'Stay Connected': 'ابق على اتصال',
            'Join our global community and receive updates on Merishaw excellence': 'انضم إلى مجتمعنا العالمي واحصل على تحديثات حول تميز ميريشو',
            'Subscribe': 'اشترك',

            // Footer
            'MERISHAW SCHOOL': 'مدرسة ميريشو',
            'I am because we are.': 'أنا موجود لأننا موجودون.',
            'STEM Partner': 'شريك STEM',
            'UN Member': 'عضو الأمم المتحدة',
            'World Scholars': 'علماء العالم',
            'Global Alliance': 'التحالف العالمي',
            'Quick Links': 'روابط سريعة',
            'Get In Touch': 'تواصل معنا',
            'Follow Us': 'تابعنا',

            // Form placeholders and messages
            'Search...': 'بحث...',
            'Enter your email address': 'أدخل عنوان بريدك الإلكتروني',
            'I agree to receive updates from Merishaw School': 'أوافق على تلقي التحديثات من مدرسة ميريشو',
            'Please enter your email address.': 'يرجى إدخال عنوان بريدك الإلكتروني.',
            'Please enter a valid email address.': 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
            'Please agree to receive updates.': 'يرجى الموافقة على تلقي التحديثات.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'شكراً لاشتراكك! مرحباً بك في مجتمع ميريشو.',
            'Subscribing...': 'جارٍ الاشتراك...',
            'No results found for': 'لم يتم العثور على نتائج لـ'
        },
        ti: {
            // Navigation
            'Our Philosophy': 'ሓይሊ ፍልስፍናና',
            'Athletics': 'ስፖርት',
            'The Mascot': 'ምልክትና',
            'Testimonials': 'ምስክርነታት',
            'Varsity Shop': 'ዓዪን ሱቅ',
            'JOIN US!': 'ምስ እኛ ተሓላለይ!',

            // Hero Section
            'EXCELLENCE': 'ብሉጽ ኣፈፃፀም',
            'THROUGH': 'ብኡ',
            'UBUNTU': 'ኡቡንቱ',
            'Where tradition meets innovation, and every student discovers their potential.': 'ካብ ልምዱ ምስ ሓድሽ ሓሳብ የራእዩ ቦታ፣ እቲ ነቲ እያንዳንዱ ተማሃራይ ሊቑልቁ የኽእሉ የያወቅ።',
            'DISCOVER MORE': 'ተወሳኺ ያወቅ',

            // Philosophy Section
            'Our Philosophy': 'ሓይሊ ፍልስፍናና',
            'I am because we are': 'እኔ እለኒ ምኽንያቱ እኛ ነን',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'ኣብ ትምህርት ቤት መሪሻው ፍልስፍና ኡቡንቱ እናምናለን - ሓሳብ እቲ ሰብኣዊ ተፈጥሮአና የራእዩ እዩ።',

            // Mascot Section
            'Meet Our Mascot': 'ምልክትና ርኣይ',
            'The Merishaw Lion': 'ኣንበሳ መሪሻው',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'እቲ ልብ ጉልበት፣ ኣመራርና እና መንፈስ ኡቡንቱ የራእዩ።',

            // Athletics Section
            'Varsity Excellence': 'ብሉጽ ኣፈፃፀም ዓዪን',
            'Champions in': 'ባህሪያን ኣብ',
            'Track & Field': 'ሩጫ እና ቦታ',
            'Basketball': 'ባስኬትቦል',
            'Rugby': 'ሩግቢ',
            'Swimming': 'ምዃኑ',

            // Testimonials Section
            'What Our Community Says': 'ማህበራችን ምን ይላል',
            'International voices celebrating Merishaw excellence': 'የመሪሻው ብሉጽ ኣፈፃፀም የሚለምዱ የአለም ስውር ድምጾች',

            // Recognition Section
            'International Recognition': 'የአለም ማወቂያ',
            'Accredited excellence on the global stage': 'በአለም ስብስብ ላይ የተረጋገጠ ብሉጽ ኣፈፃፀም',
            'STEM Excellence Program': 'የSTEM ብሉጽ ኣፈፃፀም ፕሮግራም',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'በሳይንስ፣ ቴክኖሎጂ፣ ኢንጂነሪንግ እና ማቲማቲክስ ትምህርት ላይ ርስሚ አጋር',
            'United Nations Member': 'የተባበሉት መንግስታት አባል',
            'Accredited participant in Model United Nations global diplomacy program': 'በየተባበሉት መንግስታት ምሳሌ አለም አቀፍ የዲፕሎማሲ ፕሮግራም ላይ የተረጋገጠ ተሳታፊ',
            'World Scholars Network': 'የአለም ተማሪዎች አውታርክ',
            'Elite member of the international academic excellence consortium': 'የአለም አቀፍ የትምህርት ብሉጽ ኣፈፃፀም ኮንሰርትየም የተለያዩ አባላት',
            'Global Partnership Alliance': 'የአለም አቀፍ ሽርክና ማህበር',
            'Strategic collaborator with leading international educational institutions': 'ከዋና ዋና አለም አቀፓ ትምህርት ተቋማት ጋር የስትራትጂ ምትያራዊ',

            // Newsletter Section
            'Stay Connected': 'ተያያዥ ተራዊ',
            'Join our global community and receive updates on Merishaw excellence': 'አለም አቀፍ ማህበራችንን ተሓላለይ እና ስለ መሪሻው ብሉጽ ኣፈፃፀም ማሳወቂያ ተቀበል',
            'Subscribe': 'ተሓላለይ',

            // Footer
            'MERISHAW SCHOOL': 'ትምህርት ቤት መሪሻው',
            'I am because we are.': 'እኔ እለኒ ምኽንያቱ እኛ ነን።',
            'STEM Partner': 'የSTEM አጋር',
            'UN Member': 'የተባበሉት መንግስታት አባል',
            'World Scholars': 'የአለም ተማሪዎች',
            'Global Alliance': 'የአለም አቀፍ ማህበር',
            'Quick Links': 'ፈጣን ኣገናኞች',
            'Get In Touch': 'ምስ እኛ ተራእይ',
            'Follow Us': 'እኛ ተራእይ',

            // Form placeholders and messages
            'Search...': 'ፈልግ...',
            'Enter your email address': 'ኢሜል አድራሻኻ ኣእትው',
            'I agree to receive updates from Merishaw School': 'ካብ ትምህርት ቤት መሪሻው ማሳወቂያ መቀበል እስማማለሁ',
            'Please enter your email address.': 'ኢሜል አድራሻኻ ኣእትው።',
            'Please enter a valid email address.': 'ትክክለኛ ኢሜል አድራሻ ኣእትው።',
            'Please agree to receive updates.': 'ማሳወቂያ መቀበል እስማማለሁ።',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'ለመመዝገብ እናመሰግናለን! እንኳን ደህና መጡ በመሪሻው ማህበራ።',
            'Subscribing...': 'በመመዝገብ ላይ...',
            'No results found for': 'ለ ምንም ውጤት አልተገኘም'
        },
        rw: {
            // Navigation
            'Our Philosophy': 'Imyumvire Yacu',
            'Athletics': 'Imikino',
            'The Mascot': 'Ikirango Cyacu',
            'Testimonials': 'Ubuhamya',
            'Varsity Shop': 'Ububiko bwa Varsity',
            'JOIN US!': 'TWINJIRE!',

            // Hero Section
            'EXCELLENCE': 'UBUHANUZI',
            'THROUGH': 'BITURUTSE',
            'UBUNTU': 'UBUNTU',
            'Where tradition meets innovation, and every student discovers their potential.': 'Aho amateka ahasangana n\'ikoranabuhanga, kandi umunyeshuri wese agasanga ubushobozi bwe.',
            'DISCOVER MORE': 'MENYA BYINSHI',

            // Philosophy Section
            'Our Philosophy': 'Imyumvire Yacu',
            'I am because we are': 'Ndiho kuko turiho',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'Ku ishuri rya Merishaw, twemera imyumvire ya Ubuntu - igitekerezo cy\'uko ubuntu bwacu buhuze.',

            // Mascot Section
            'Meet Our Mascot': 'Mumenye Ikirango Cyacu',
            'The Merishaw Lion': 'Intare ya Merishaw',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'Isobanura ubutwari, ubuyobozi, n\'umwuka wa Ubuntu.',

            // Athletics Section
            'Varsity Excellence': 'Ubuhezanguni bwa Varsity',
            'Champions in': 'Abatsinzi mu',
            'Track & Field': 'Imikino y\'amaguru n\'ikibuga',
            'Basketball': 'Umupira w\'amaboko',
            'Rugby': 'Rugby',
            'Swimming': 'Kubukira',

            // Testimonials Section
            'What Our Community Says': 'Icyo Umuryango Wacu Uvuga',
            'International voices celebrating Merishaw excellence': 'Ijwi ry\'amahanga rishimira ubuhezanguni bwa Merishaw',

            // Recognition Section
            'International Recognition': 'Kumenyekana Mpuzamahanga',
            'Accredited excellence on the global stage': 'Ubuhezanguni bwemewe ku rubyini rw\'isi',
            'STEM Excellence Program': 'Gahunda y\'Ubuhezanguni mu STEM',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'Umufatanyabikorwa ushingiye mu burezi bw\'Ibisanzwe, Ikoranabuhanga, Ubumenyingiro n\'Imibare',
            'United Nations Member': 'Umuryango w\'Abibumbye',
            'Accredited participant in Model United Nations global diplomacy program': 'Umufatanyabikorwa wemewe mu gahunda y\'ubudipolomate mpuzamahanga ya Model United Nations',
            'World Scholars Network': 'Urubuga rw\'Abanyeshuri bo ku Isi',
            'Elite member of the international academic excellence consortium': 'Umuryango w\'ubuhezanguni bw\'ishuri mpuzamahanga',
            'Global Partnership Alliance': 'Umuryango w\'Imikoranire Mpuzamahanga',
            'Strategic collaborator with leading international educational institutions': 'Umufatanyabikorwa w\'ibigo by\'amashuri bikomeye mpuzamahanga',

            // Newsletter Section
            'Stay Connected': 'Komeza Guhuza',
            'Join our global community and receive updates on Merishaw excellence': 'Injira mu muryango wacu w\'isi wose kandi ufate amakuru ku buhezanguni bwa Merishaw',
            'Subscribe': 'Iyandikishe',

            // Footer
            'MERISHAW SCHOOL': 'ISHURI RYA MERISHAW',
            'I am because we are.': 'Ndiho kuko turiho.',
            'IB World School': 'Ishuri ry\'Isi rya IB',
            'UN Member': 'Umuryango w\'Abibumbye',
            'World Scholars': 'Abanyeshuri bo ku Isi',
            'Global Alliance': 'Umuryango Mpuzamahanga',
            'Quick Links': 'Ahuza Yihuta',
            'Get In Touch': 'Twandikire',
            'Follow Us': 'Dukurikire',

            // Form placeholders and messages
            'Search...': 'Shakisha...',
            'Enter your email address': 'Injiza aderesi ya imeyili yawe',
            'I agree to receive updates from Merishaw School': 'Nemeye guhabwa amakuru avuye ku ishuri rya Merishaw',
            'Please enter your email address.': 'Injiza aderesi ya imeyili yawe.',
            'Please enter a valid email address.': 'Injiza aderesi ya imeyili yemewe.',
            'Please agree to receive updates.': 'Nemeye guhabwa amakuru.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'Murakoze kwiyandikisha! Murakaza neza mu muryango wa Merishaw.',
            'Subscribing...': 'Biriyandikisha...',
            'No results found for': 'Nta bisubizo byabonetse kuri'
        },
        rn: {
            // Navigation
            'Our Philosophy': 'Imyiyumviro Yacu',
            'Athletics': 'Imikino',
            'The Mascot': 'Ikimenyetso Cacu',
            'Testimonials': 'Ubugwaneza',
            'Varsity Shop': 'Ububiko bwa Varsity',
            'JOIN US!': 'TWINJIRE!',

            // Hero Section
            'EXCELLENCE': 'UBUHANUZI',
            'THROUGH': 'BITURUTSE',
            'UBUNTU': 'UBUNTU',
            'Where tradition meets innovation, and every student discovers their potential.': 'Aho amateka ahasangana n\'ikoranabuhanga, kandi umunyeshuri wese agasanga ubushobozi bwe.',
            'DISCOVER MORE': 'MENYA BYINSHI',

            // Philosophy Section
            'Our Philosophy': 'Imyiyumviro Yacu',
            'I am because we are': 'Ndiho kuko turiho',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'Ku ishuri rya Merishaw, twemera imyumvire ya Ubuntu - igitekerezo cy\'uko ubuntu bwacu buhuze.',

            // Mascot Section
            'Meet Our Mascot': 'Mumenye Ikimenyetso Cacu',
            'The Merishaw Lion': 'Intare ya Merishaw',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'Isobanura ubutwari, ubuyobozi, n\'umwuka wa Ubuntu.',

            // Athletics Section
            'Varsity Excellence': 'Ubuhezanguni bwa Varsity',
            'Champions in': 'Abatsinzi mu',
            'Track & Field': 'Imikino y\'amaguru n\'ikibuga',
            'Basketball': 'Umupira w\'amaboko',
            'Rugby': 'Rugby',
            'Swimming': 'Kubukira',

            // Testimonials Section
            'What Our Community Says': 'Icyo Umuryango Wacu Uvuga',
            'International voices celebrating Merishaw excellence': 'Ijwi ry\'amahanga rishimira ubuhezanguni bwa Merishaw',

            // Recognition Section
            'International Recognition': 'Kumenyekana Mpuzamahanga',
            'Accredited excellence on the global stage': 'Ubuhezanguni bwemewe ku rubyini rw\'isi',
            'STEM Excellence Program': 'Gahunda y\'Ubuhezanguni mu STEM',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'Umufatanyabikorwa ushingiye mu burezi bw\'Ibisanzwe, Ikoranabuhanga, Ubumenyingiro n\'Imibare',
            'United Nations Member': 'Umuryango w\'Abibumbye',
            'Accredited participant in Model United Nations global diplomacy program': 'Umufatanyabikorwa wemewe mu gahunda y\'ubudipolomate mpuzamahanga ya Model United Nations',
            'World Scholars Network': 'Urubuga rw\'Abanyeshuri bo ku Isi',
            'Elite member of the international academic excellence consortium': 'Umuryango w\'ubuhezanguni bw\'ishuri mpuzamahanga',
            'Global Partnership Alliance': 'Umuryango w\'Imikoranire Mpuzamahanga',
            'Strategic collaborator with leading international educational institutions': 'Umufatanyabikorwa w\'ibigo by\'amashuri bikomeye mpuzamahanga',

            // Newsletter Section
            'Stay Connected': 'Komeza Guhuza',
            'Join our global community and receive updates on Merishaw excellence': 'Injira mu muryango wacu w\'isi wose kandi ufate amakuru ku buhezanguni bwa Merishaw',
            'Subscribe': 'Iyandikishe',

            // Footer
            'MERISHAW SCHOOL': 'ISHURI RYA MERISHAW',
            'I am because we are.': 'Ndiho kuko turiho.',
            'IB World School': 'Ishuri ry\'Isi rya IB',
            'UN Member': 'Umuryango w\'Abibumbye',
            'World Scholars': 'Abanyeshuri bo ku Isi',
            'Global Alliance': 'Umuryango Mpuzamahanga',
            'Quick Links': 'Ahuza Yihuta',
            'Get In Touch': 'Twandikire',
            'Follow Us': 'Dukurikire',

            // Form placeholders and messages
            'Search...': 'Shakisha...',
            'Enter your email address': 'Injiza aderesi ya imeyili yawe',
            'I agree to receive updates from Merishaw School': 'Nemeye guhabwa amakuru avuye ku ishuri rya Merishaw',
            'Please enter your email address.': 'Injiza aderesi ya imeyili yawe.',
            'Please enter a valid email address.': 'Injiza aderesi ya imeyili yemewe.',
            'Please agree to receive updates.': 'Nemeye guhabwa amakuru.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'Murakoze kwiyandikisha! Murakaza neza mu muryango wa Merishaw.',
            'Subscribing...': 'Biriyandikisha...',
            'No results found for': 'Nta bisubizo byabonetse kuri'
        },
        so: {
            // Navigation
            'Our Philosophy': 'Falsafadeena',
            'Athletics': 'Ciyaaraha',
            'The Mascot': 'Calanka',
            'Testimonials': 'Markhaatiyaal',
            'Varsity Shop': 'Duka Varsity',
            'JOIN US!': 'NALA KU SOO BIIR!',

            // Hero Section
            'EXCELLENCE': 'HEERKA',
            'THROUGH': 'DHEX',
            'UBUNTU': 'UBUNTU',
            'Where tradition meets innovation, and every student discovers their potential.': 'Meesha dhaqanka iyo hal-abuurka ay ku kulmaan, oo arday kastaa uu ogaado awooddiisa.',
            'DISCOVER MORE': 'OGOW WAX BADAN',

            // Philosophy Section
            'Our Philosophy': 'Falsafadeena',
            'I am because we are': 'Waxaan ahay maxaa yeelay annagu waxaan nahay',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'Dugsiga Merishaw, waxaan aaminsanahay falsafada Ubuntu - fikradda ah in bini\'aadmigeennu uu xidhiidh la leeyahay.',

            // Mascot Section
            'Meet Our Mascot': 'La Kulan Calankeena',
            'The Merishaw Lion': 'Libaaxa Merishaw',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'Calamka geesinimada, hoggaanka, iyo ruuxa Ubuntu.',

            // Athletics Section
            'Varsity Excellence': 'Heerka Varsity',
            'Champions in': 'Horyaalada',
            'Track & Field': 'Orodka iyo Garoonka',
            'Basketball': 'Kubadda Koleyga',
            'Rugby': 'Rugby',
            'Swimming': 'Dabaasha',

            // Testimonials Section
            'What Our Community Says': 'Waxa Bulshadeenu Dhahdo',
            'International voices celebrating Merishaw excellence': 'Codad caalami ah oo u dabaaldegaya heerka Merishaw',

            // Recognition Section
            'International Recognition': 'Aqoonsiga Caalamiga',
            'Accredited excellence on the global stage': 'Heerka la aqoonsan yahay ee masraxa caalamiga',
            'STEM Excellence Program': 'Barnaamijka Heerka STEM',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'Lammaane rasmi ah oo ku saabsan waxbarashada Sayniska, Teknolojiyada, Injineerinka, iyo Xisaabta',
            'United Nations Member': 'Xubinta Qaramada Midoobay',
            'Accredited participant in Model United Nations global diplomacy program': 'Ka qaybgalaha la aqoonsan yahay ee barnaamijka dublumaasiyadda caalamiga ah ee Model United Nations',
            'World Scholars Network': 'Shabakadda Aqoonyahanada Adduunka',
            'Elite member of the international academic excellence consortium': 'Xubin caan ah oo ka tirsan iskaashiga heerka tacliinta caalamiga',
            'Global Partnership Alliance': 'Isbahaysiga Iskaashiga Caalamiga',
            'Strategic collaborator with leading international educational institutions': 'Iskaashi istiraatiiji ah oo lala yeesho machadyada waxbarashada caalamiga ee hormuudka ah',

            // Newsletter Section
            'Stay Connected': 'La Soco',
            'Join our global community and receive updates on Merishaw excellence': 'Ku biir bulshadeena caalamiga ah oo hel warbixinnada heerka Merishaw',
            'Subscribe': 'Ku Biir',

            // Footer
            'MERISHAW SCHOOL': 'DUGSIGA MERISHAW',
            'I am because we are.': 'Waxaan ahay maxaa yeelay annagu waxaan nahay.',
            'STEM Partner': 'Lammaanaha STEM',
            'UN Member': 'Xubinta Qaramada Midoobay',
            'World Scholars': 'Aqoonyahanada Adduunka',
            'Global Alliance': 'Isbahaysiga Caalamiga',
            'Quick Links': 'Xidhiidho Degdeg ah',
            'Get In Touch': 'Nala Soo Xidhiidh',
            'Follow Us': 'Na Raac',

            // Form placeholders and messages
            'Search...': 'Raadi...',
            'Enter your email address': 'Gali ciwaanka emailkaaga',
            'I agree to receive updates from Merishaw School': 'Waan ogolahay inaan helo warbixinnada dugsiga Merishaw',
            'Please enter your email address.': 'Fadlan geli ciwaanka emailkaaga.',
            'Please enter a valid email address.': 'Fadlan geli ciwaan email ah oo sax ah.',
            'Please agree to receive updates.': 'Fadlan ogolow inaad hesho warbixinnada.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'Waad ku mahadsantahay isdiiwaangelinta! Ku soo dhowow bulshada Merishaw.',
            'Subscribing...': 'La Diiwaangelinayaa...',
            'No results found for': 'Wax natiijo ah looma helin'
        },
        lg: {
            // Navigation
            'Our Philosophy': 'Enfunda Yaffe',
            'Athletics': 'Emikino',
            'The Mascot': 'Akabonero Kaffe',
            'Testimonials': 'Obujulizi',
            'Varsity Shop': 'Eddaka lya Varsity',
            'JOIN US!': 'TUKWATE!',

            // Hero Section
            'EXCELLENCE': 'OBULAMU',
            'THROUGH': 'OKUTUUKIRIZA',
            'UBUNTU': 'UBUNTU',
            'Where tradition meets innovation, and every student discovers their potential.': 'Wano emikoze ebikadde ebikolagana n\'obugagga, era omwesomesi buli omu alaba obusobozi bwe.',
            'DISCOVER MORE': 'TEGEZA EBIRALA',

            // Philosophy Section
            'Our Philosophy': 'Enfunda Yaffe',
            'I am because we are': 'Nze ndi olw\'okuba tuliwo',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'Ku ssomero lya Merishaw, tukkiriza enfunda ya Ubuntu - ekiteeso nti obulamu bwaffe bwegatta.',

            // Mascot Section
            'Meet Our Mascot': 'Laba Akabonero Kaffe',
            'The Merishaw Lion': 'Empologoma ya Merishaw',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'Ekyolesa obuvumu, obufuzi, n\'omwoyo gwa Ubuntu.',

            // Athletics Section
            'Varsity Excellence': 'Obulamu bwa Varsity',
            'Champions in': 'Abawangudde mu',
            'Track & Field': 'Okudduka n\'Ekibanja',
            'Basketball': 'Bbasketball',
            'Rugby': 'Rugby',
            'Swimming': 'Okuyigiriza',

            // Testimonials Section
            'What Our Community Says': 'Ekigambo Kya Linnya Lyeffe',
            'International voices celebrating Merishaw excellence': 'Eddoboozi ly\'ensi yonna erisinza obulamu bwa Merishaw',

            // Recognition Section
            'International Recognition': 'Okumanyibwa Kw\'ensi Yonna',
            'Accredited excellence on the global stage': 'Obulamu obukkirizibwa ku mbuga y\'ensi yonna',
            'STEM Excellence Program': 'Pulogulamu y\'Obulamu mu STEM',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'Mukwanagana omugaso mu okuyiga Science, Technology, Engineering, ne Mathematics',
            'United Nations Member': 'Omulimu mu United Nations',
            'Accredited participant in Model United Nations global diplomacy program': 'Omulimu akirizibwa mu pulogulamu ya diplomacy y\'ensi yonna ya Model United Nations',
            'World Scholars Network': 'Enkunga y\'Abasomi Ab\'ensi Yonna',
            'Elite member of the international academic excellence consortium': 'Omulimu ow\'ekitiibwa mu nkunga y\'obulamu bw\'okuyiga kw\'ensi yonna',
            'Global Partnership Alliance': 'Enkunga y\'Obukwanagana Kw\'ensi Yonna',
            'Strategic collaborator with leading international educational institutions': 'Mukwanagana omugaso ne ssomero ezikulu z\'okuyiga z\'ensi yonna',

            // Newsletter Section
            'Stay Connected': 'Sigala Mukwanagana',
            'Join our global community and receive updates on Merishaw excellence': 'Wenyina mu linnya lyaffe ly\'ensi yonna era ofuna amawulire ku bulamu bwa Merishaw',
            'Subscribe': 'Wewandise',

            // Footer
            'MERISHAW SCHOOL': 'SSOMERO LYA MERISHAW',
            'I am because we are.': 'Nze ndi olw\'okuba tuliwo.',
            'STEM Partner': 'Omukwanagana wa STEM',
            'UN Member': 'Omulimu mu United Nations',
            'Cambridge International': 'Cambridge Y\'ensi Yonna',
            'Quick Links': 'Ennyunzi Ennyangu',
            'Get In Touch': 'Tukwate',
            'Follow Us': 'Tugoberere',

            // Form placeholders and messages
            'Search...': 'Noonya...',
            'Enter your email address': 'Yinza aderesi yo email',
            'I agree to receive updates from Merishaw School': 'Nkikkiriza okufuna amawulire okuva ku ssomero lya Merishaw',
            'Please enter your email address.': 'Yinza aderesi yo email.',
            'Please enter a valid email address.': 'Yinza aderesi ya email ekirizibwa.',
            'Please agree to receive updates.': 'Kkiriza okufuna amawulire.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'Weebale ku kuwandise! Tukwaniriza mu linnya lya Merishaw.',
            'Subscribing...': 'Tuwandise...',
            'No results found for': 'Tewali kyabunuzibwa ku'
        },
        ny: {
            // Navigation
            'Our Philosophy': 'Mfundo Zathu',
            'Athletics': 'Masewera',
            'The Mascot': 'Chizindikiro Chathu',
            'Testimonials': 'Umboni',
            'Varsity Shop': 'Shopu ya Varsity',
            'JOIN US!': 'LOWANI NA IFE!',

            // Hero Section
            'EXCELLENCE': 'KABWINO',
            'THROUGH': 'KUDZERA',
            'UBUNTU': 'UBUNTU',
            'Where tradition meets innovation, and every student discovers their potential.': 'Kumene miyambo ikumana ndi zatsopano, ndipo wophunzira aliyense amapeza mphamvu zake.',
            'DISCOVER MORE': 'PEZANI ZAMBIRI',

            // Philosophy Section
            'Our Philosophy': 'Mfundo Zathu',
            'I am because we are': 'Ndine chifukwa ife tili',
            'At Merishaw School, we believe in the Ubuntu philosophy - the idea that our humanity is interconnected.': 'Ku Sukulu ya Merishaw, timakhulupirira mfundo ya Ubuntu - lingaliro lakuti umunthu wathu ulumikizana.',

            // Mascot Section
            'Meet Our Mascot': 'Kumanani ndi Chizindikiro Chathu',
            'The Merishaw Lion': 'Mkango wa Merishaw',
            'Symbolizing courage, leadership, and the spirit of Ubuntu.': 'Kuyimira kulimba mtima, utsogoleri, ndi mzimu wa Ubuntu.',

            // Athletics Section
            'Varsity Excellence': 'Kubwino kwa Varsity',
            'Champions in': 'Ophunzira opambana mu',
            'Track & Field': 'Kuthamanga ndi Munda',
            'Basketball': 'Basketball',
            'Rugby': 'Rugby',
            'Swimming': 'Kusambira',

            // Testimonials Section
            'What Our Community Says': 'Chimene Gulu Lathu Limanena',
            'International voices celebrating Merishaw excellence': 'Mawu apadziko lonse okondwerera kubwino kwa Merishaw',

            // Recognition Section
            'International Recognition': 'Kuzindikirika Padziko Lonse',
            'Accredited excellence on the global stage': 'Kubwino kotsimikizirika pa siteji yapadziko lonse',
            'STEM Excellence Program': 'Pulogalamu ya Kubwino mu STEM',
            'Official partner in Science, Technology, Engineering, and Mathematics education': 'Mnzake wovomerezeka mu maphunziro a Science, Technology, Engineering, ndi Mathematics',
            'United Nations Member': 'Mamembala a United Nations',
            'Accredited participant in Model United Nations global diplomacy program': 'Wochita nawo motsimikizirika mu pulogalamu ya diplomacy yapadziko lonse ya Model United Nations',
            'World Scholars Network': 'Netiweki ya Ophunzira Padziko Lonse',
            'Elite member of the international academic excellence consortium': 'Mamembala apamwamba a mgwirizano wapadziko lonse wa kubwino kwamaphunziro',
            'Global Partnership Alliance': 'Mgwirizano wa Partnership Yapadziko Lonse',
            'Strategic collaborator with leading international educational institutions': 'Mnzake wa strategic ndi masukulu apamwamba apadziko lonse',

            // Newsletter Section
            'Stay Connected': 'Khalani Othandizana',
            'Join our global community and receive updates on Merishaw excellence': 'Lowani nafe mgulu lathu lapadziko lonse ndipo mulandire zosintha za kubwino kwa Merishaw',
            'Subscribe': 'Lembani',

            // Footer
            'MERISHAW SCHOOL': 'SUKULU YA MERISHAW',
            'I am because we are.': 'Ndine chifukwa ife tili.',
            'STEM Partner': 'Mnzathu wa STEM',
            'UN Member': 'Mamembala a United Nations',
            'World Scholars': 'Ophunzira Padziko Lonse',
            'Global Alliance': 'Mgwirizano Yapadziko Lonse',
            'Quick Links': 'Maulalo Ofulumira',
            'Get In Touch': 'Lumikizanani Nafe',
            'Follow Us': 'Titsatireni',

            // Form placeholders and messages
            'Search...': 'Fufuzani...',
            'Enter your email address': 'Lowetsani imelo yanu',
            'I agree to receive updates from Merishaw School': 'Ndikuvomereza kulandira zosintha kuchokera ku Sukulu ya Merishaw',
            'Please enter your email address.': 'Chonde lowetsani imelo yanu.',
            'Please enter a valid email address.': 'Chonde lowetsani imelo yovomerezeka.',
            'Please agree to receive updates.': 'Chonde vomerezani kulandira zosintha.',
            'Thank you for subscribing! Welcome to the Merishaw community.': 'Zikomo cholembera! Takulandirani ku gulu la Merishaw.',
            'Subscribing...': 'Tikulemba...',
            'No results found for': 'Palibe zotsatira zopezeka pa'
        }
    };

    // Function to translate text content
    function translateText(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const placeholderKey = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][placeholderKey]) {
                element.setAttribute('placeholder', translations[lang][placeholderKey]);
            }
        });

        // Update form messages (stored in data attributes)
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const messageElements = form.querySelectorAll('[data-message]');
            messageElements.forEach(el => {
                const messageKey = el.getAttribute('data-message');
                if (translations[lang] && translations[lang][messageKey]) {
                    el.setAttribute('data-translated-message', translations[lang][messageKey]);
                }
            });
        });

        // Store current language
        localStorage.setItem('merishaw-language', lang);
    }

    // Get language name for notification
    function getLanguageName(code) {
        const names = {
            'en': 'English',
            'sw': 'Swahili',
            'fr': 'French',
            'am': 'Amharic',
            'ar': 'Arabic',
            'ti': 'Tigrinya',
            'rw': 'Kinyarwanda',
            'rn': 'Kirundi',
            'so': 'Somali',
            'lg': 'Luganda',
            'ny': 'Chichewa'
        };
        return names[code] || code.toUpperCase();
    }

    languageSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        translateText(selectedLang);

        // Show language change message
        const messageEl = document.createElement('div');
        messageEl.textContent = `Language changed to ${getLanguageName(selectedLang)}`;
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
    });

    // Load saved language on page load
    const savedLang = localStorage.getItem('merishaw-language') || 'en';
    if (savedLang !== 'en') {
        languageSelect.value = savedLang;
        translateText(savedLang);
    }
});

