document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.style.opacity = '0';

            setTimeout(() => {
                mainImage.src = this.src;
                mainImage.alt = this.alt;

                mainImage.style.opacity = '1';
            }, 300);
        });
    });
});