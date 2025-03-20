// /app.js

// // Smooth scrolling for navigation links
// document.querySelectorAll('a.nav-link').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         if (targetElement) {
//             targetElement.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Show the selected tab content
        document.getElementById(targetTab).classList.add('active');
 // Add active class to the clicked button
        button.classList.add('active');
    });
});