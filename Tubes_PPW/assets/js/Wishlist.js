$(document).ready(function() {
    $.getJSON('assets/JSON/Wishlist.json', function(data) {
        $.each(data, function(index, item) {
            $('#wishlist-container').append(`
                <div class="card" data-index="${index}">
                    <div class="card-top">
                        <img src="${item.image}" alt="${item.name}" class="photo">
                        <button class="heart">
                            <img src="assets/img/loved.png" alt="Love" class="icon">
                        </button>
                    </div>
                    <div class="card-bottom">
                        <p><strong>${item.name}</strong></p>
                        <p>${item.price}</p>
                        <p>${item.description}</p>
                    </div>
                </div>
            `);
        });
    });

    $(document).on('click', '.heart', function() {
        $(this).closest('.card').remove();
    });
});


$('#search-icon').click(function(){
    const $searchInput = $('#search-input');
    $searchInput.toggle();
    if($searchInput.is(':visible')){
        $searchInput.focus();
    }
});


