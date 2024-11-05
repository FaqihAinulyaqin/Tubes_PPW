$(document).ready(function() {
    $.getJSON('assets/json/product.json', function(data) {
        let rows = '';
        let rowCount = 0;

        $.each(data, function(index, item) {
            if (rowCount === 0) {
                rows += '<tr>';
            }

            rows += '<td>' +
                '<div class="product-item">' +
                '<i class="far fa-heart favorite" onclick="toggleFavorite(this)"></i>' +
                '<a href="HalamanProduk/HalamanProduk.html">' +
                '<div class="product-image">'+
                '<img alt="Product Image" height="200" src="'+ item.image +'" width="150" />' +
                '</div>' +
                '<div class="info">' +
                '<div class="name">'+ item.name +'</div>' +
                '<div class="price">'+ item.price +'</div>' +
                '<div class="description">'+ item.description +'</div>' +          
                '</div>' +
                '</a>' +
                '</div>' +
                '</td>';

            rowCount++;

            if (rowCount === 4) {
                rows += '</tr>';
                rowCount = 0;
            }
        });

        if (rowCount > 0) {
            rows += '</tr>';
        }

        $('#data-table').append(rows);
    });
});

function toggleFavorite(icon) {
    $(icon).toggleClass('fas far');
}