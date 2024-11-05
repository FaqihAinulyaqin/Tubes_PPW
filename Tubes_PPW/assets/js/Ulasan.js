$("#search-icon").click(function() {
    const $searchInput = $("#search-input");
    $searchInput.toggle();
    if ($searchInput.is(":visible")) {
        $searchInput.focus();
    }
});

$(document).ready(function() {
    $("#review-form").submit(function(event) {
        event.preventDefault(); 
        alert("Ulasan anda berhasil diupload!");
    });
});