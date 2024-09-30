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

    slides[slideIndex - 1].style.display = "block";  
}

let currentImageIndex = 0;
const images = [
    { src: 'images/image1.jpg', title: 'Image 1' },
    { src: 'images/image2.jpg', title: 'Image 2' },
    { src: 'images/image3.jpg', title: 'Image 3' },
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

