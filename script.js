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
        showSlides(); // Start the slideshow after curtain opens
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

    slideIndex++; // Move to the next slide
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide if at the end
    }
    
    // Show the current slide
    slides[slideIndex].style.display = "block";  

    // Update the title below the image
    const title = slides[slideIndex].querySelector('p');
    document.getElementById('slide-title').textContent = title.textContent; // Use title text
}

// Set the initial slide to display
showSlides();

// Function to navigate to the next slide
function plusSlides(n) {
    slideIndex += n; // Update slideIndex based on input
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset to the first slide if at the end
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Loop to the last slide if at the beginning
    }
    showSlides();
}

// Ensure to bind the functions to the buttons in the HTML
