// Portfolio Smooth Scroll & Animation
console.log("Portfolio website loaded");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    // Smooth scroll to About page on "Explore More" click
    const exploreMore = document.getElementById('exploreMore');
    
    if (exploreMore) {
        exploreMore.addEventListener('click', function() {
            // Add scroll-down animation to current page
            const mainContent = document.querySelector('.main-content');
            const header = document.querySelector('.header');
            const container = document.querySelector('.container');
            
            // Apply slide-up animation (simulating scroll down)
            container.style.animation = 'slideOutUp 0.8s ease-in-out forwards';
            
            // Navigate to About page after animation
            setTimeout(() => {
                window.location.href = 'html/about.html';
            }, 700);
        });
    }
});