document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
    });

    // Initialize Swiper Carousel
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Populate Projects
    const projects = [
        {
            title: 'AI Website Builder',
            description: 'Custom website generation using artificial intelligence',
            image: 'project1.jpg',
            link: '#'
        },
        {
            title: 'Business Process Automation',
            description: 'Streamlined workflow automation solutions',
            image: 'project2.jpg',
            link: '#'
        },
        {
            title: 'Smart Data Analysis',
            description: 'AI-powered business intelligence tools',
            image: 'project3.jpg',
            link: '#'
        }
    ];

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    projects.forEach(project => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="project-card">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <a href="${project.link}" class="text-blue-600 hover:underline">Learn More →</a>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });

    // FAQ Accordion
    const faqs = [
        {
            question: 'What services do you offer?',
            answer: 'We specialize in AI-powered website development and business process automation solutions.'
        },
        {
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on complexity, but most projects are completed within 2-4 weeks.'
        },
        {
            question: 'Do you offer ongoing support?',
            answer: 'Yes, we provide continuous support and maintenance for all our solutions.'
        },
        {
            question: 'What makes your automation solutions different?',
            answer: 'Our solutions leverage cutting-edge AI technology while maintaining user-friendly interfaces.'
        }
    ];

    const faqContainer = document.getElementById('faq-accordion');
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question" data-faq="${index}">
                <span class="font-semibold">${faq.question}</span>
                <svg class="w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            <div class="faq-answer">
                <p class="text-gray-600">${faq.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
    });

    // FAQ Click Handlers
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('svg');
            
            // Toggle answer visibility
            answer.classList.toggle('active');
            
            // Rotate icon
            icon.style.transform = answer.classList.contains('active') 
                ? 'rotate(180deg)' 
                : 'rotate(0)';
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            }
        });
    });
});
