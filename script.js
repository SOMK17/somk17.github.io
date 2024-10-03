// Check Password Function
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'TáSeanánGoHíontacht'; // Replace with your password

    if (password === correctPassword) {
        document.getElementById('password-modal').style.display = 'none';
        openCurtain();
    } else {
        alert('Incorrect Password');
    }
}

// Curtain Animation Function
function openCurtain() {
    const leftCurtain = document.getElementById('curtain-left');
    const rightCurtain = document.getElementById('curtain-right');

    leftCurtain.style.transform = 'translateX(-100%)';
    rightCurtain.style.transform = 'translateX(100%)';

    setTimeout(() => {
        document.getElementById('portfolio-content').style.display = 'block';
        document.body.style.overflow = 'auto'; // Allow scrolling after curtains open
        showSlides(); // Show the first slide when curtains open
    }, 2000); // Delay to match curtain animation duration
}

// Gallery function
let slideIndex = 0; // Current slide index

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Ensure slideIndex is within bounds
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide if at the end
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to the last slide if at the beginning
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";  

    // Update the title below the image
    const title = document.getElementById('slide-title');
    title.textContent = slides[slideIndex].querySelector('p').textContent; // Get the title from the current slide
}

// Navigation functionality for the buttons
document.querySelector(".next").addEventListener("click", function() {
    slideIndex++; // Increment index for next
    showSlides(); // Show the updated slide
});

document.querySelector(".prev").addEventListener("click", function() {
    slideIndex--; // Decrement index for previous
    showSlides(); // Show the updated slide
});

// Set the initial slide to display when the page loads
window.onload = function() {
    document.getElementById('portfolio-content').style.display = 'none'; // Keep content hidden until password is entered
};
