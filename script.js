var images = [
    "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg", 
    "https://www.chopstickchronicles.com/wp-content/uploads/2023/02/Niku-Udon-13.jpg", 
    "https://www.foodcraft.hk/cdn/shop/files/ClearspringOrganicGlutenFreeJapanese100_BuckwheatSobaNoodles-200g_4a68e540-a1ea-45a8-9eb7-d54ead41ae56_700x700.jpg?v=1695352762"  
];
var currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("main-image").src = images[currentIndex];
}

setInterval(changeImage, 3000); 
function resizeimage() {
    var img = document.getElementsById('main-image');
    var windowwidth = window.innerWidth;
    var windowheight = window.innerHeight;

    if (windowwidth < windowheight) {
        img.style.width = '100%';
        img.style.height = 'auto';
    } else {
        img.style.width = 'auto';
        img.style.height = '100%';
    }
}

window.addEventListener('resize', resizeimage);
window.addEventListener('load', resizeimage)

