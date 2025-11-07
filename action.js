// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to game cards when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.game-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add click event listeners to play buttons
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', function() {
        const gameName = this.parentElement.querySelector('h3').textContent;
        alert(`Starting ${gameName}... Get ready to play!`);
    });
});

// Add active state to navigation links
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section, header');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add loading animation for game images
window.addEventListener('load', () => {
    const gameImages = document.querySelectorAll('.game-image');
    gameImages.forEach((image, index) => {
        // Simulate loading different game images with different background colors
        const colors = ['#4a4da7', '#4a7fa7', '#4aa77a'];
        image.style.backgroundColor = colors[index % colors.length];
        
        // Add hover effect
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'transform 0.3s ease';
        });
        
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});