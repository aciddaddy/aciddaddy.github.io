// Function to open the lightbox with the clicked image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightbox.style.display = 'block'; // Show lightbox
    lightboxImage.src = imageSrc; // Set the source of the lightbox image
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide lightbox
}

