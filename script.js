// Interactive Elements
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-btn');
    
    // Smooth scrolling simulation or alert
    ctaButton.addEventListener('click', () => {
        alert('Welcome to my portfolio! Let\'s build something great together.');
    });

    // Navigation hover effect logs
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            console.log(`Hovering over: ${link.textContent}`);
        });
    });
});
