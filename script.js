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
    }, 2000); // Delay to match curtain animation duration
}


// Gallery function
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  


    // Update the title below the image
    const title = document.querySelector('.portfolio-img-container p');
    title.textContent = slides[slideIndex - 1].querySelector('img').alt; // Use alt attribute for the title
}


let currentImageIndex = 0;
const images = [
    { src: 'images/image1.jpg', title: 'Healer' },
    { src: 'images/image2.jpg', title: 'Market River' },
    { src: 'images/image3.jpg', title: 'Street Traffic' },
    { src: 'images/image4.jpg', title: 'Deer at Night' },
    { src: 'images/image5.jpg', title: 'Clan Galloping' },
    { src: 'images/image6.jpg', title: 'Selling Fish' },
    { src: 'images/image7.jpg', title: 'Swan Chasing Bull' },
    { src: 'images/image8.jpg', title: 'Burnings of Clonmacnoise' },
    { src: 'images/image9.jpg', title: 'Fisherman' },
    { src: 'images/image10.jpg', title: 'Tobacco Farmers' },
    // Add more images as needed
];

function updateImage() {
    const img = document.querySelector('.portfolio-img');
    const title = document.querySelector('.portfolio-img-container p');
    img.src = images[currentImageIndex].src;
    title.textContent = images[currentImageIndex].title;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

let slideIndex = 0; // Starting index for slides

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let titles = document.getElementsByClassName("slide-title"); // Get all titles

    // Hide all slides and titles
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        titles[i].style.display = "none"; // Hide all titles
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset index if it exceeds

    // Show the current slide and its title
    slides[slideIndex - 1].style.display = "block"; 
    titles[slideIndex - 1].style.display = "block"; // Show title for current slide
}
