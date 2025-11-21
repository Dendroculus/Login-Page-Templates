const topBox = document.querySelector('.top');

const images = [
    './assets/bg-image.png',
    './assets/bg-image1.png',
    './assets/bg-image2.png',
    './assets/bg-image3.png'
];

let index = 0;

function changeBackground() {
    const nextImage = document.createElement('div');
    nextImage.style.position = 'absolute';
    nextImage.style.top = '0';
    nextImage.style.left = '0';
    nextImage.style.width = '100%';
    nextImage.style.height = '100%';
    nextImage.style.borderRadius = '10px 10px 0 0';
    nextImage.style.opacity = '0';
    nextImage.style.transition = 'opacity 1.2s ease-in-out';
    
    index = (index + 1) % images.length;
    nextImage.style.backgroundImage = `url(${images[index]})`;
    nextImage.style.backgroundSize = 'cover';
    
    topBox.appendChild(nextImage);
    
    setTimeout(() => {
        nextImage.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        topBox.style.backgroundImage = `url(${images[index]})`;
        if (topBox.children.length > 0) {
            topBox.removeChild(nextImage);
        }
    }, 1200);
}

setInterval(changeBackground, 2000);