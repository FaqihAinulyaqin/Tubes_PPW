function displayProductData(data) {
    // Main image and thumbnails
    document.getElementById('main-image').src = data.images[0].file;
    document.getElementById('main-image').alt = data.images[0].alt;

    const thumbnailContainer = document.getElementById('thumbnail-container');
    thumbnailContainer.innerHTML = ''; // Clear any previous thumbnails
    data.images.slice(1, 5).forEach(img => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img.file;
        thumbnail.alt = img.alt;
        thumbnail.classList.add('thumbnail');
        thumbnailContainer.appendChild(thumbnail);
    });

    // Profile information
    document.getElementById('profile-image').src = data.images[5].file;
    document.getElementById('profile-image').alt = data.images[5].alt;
    document.getElementById('profile-name').innerText = data.profile.name;

    // Product title
    document.getElementById('product-title').innerText = data.productTitle;

    // Rating
    const starRating = document.getElementById('star-rating');
    starRating.innerHTML = '';
    for (let i = 0; i < data.rating.stars; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        starRating.appendChild(star);
    }
    document.getElementById('review-count').innerText = `(${data.rating.reviews} Reviews)`;

    // Price
    document.getElementById('price').innerText = data.price;

    // Details
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = '';
    data.details.forEach(detail => {
        const p = document.createElement('p');
        p.innerText = detail;
        detailsContent.appendChild(p);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('HalProdukData.json')
        .then(response => {
            console.log('Fetch response:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data);
            displayProductData(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});

const wishlistButton = document.querySelector('.wishlist-button');


wishlistButton.addEventListener('click', function() {
    wishlistButton.classList.toggle('active');
});