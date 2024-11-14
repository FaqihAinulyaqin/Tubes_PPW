$(document).ready(function() {
    $("#search-icon").click(function() {
        const $searchInput = $("#search-input");
        $searchInput.toggle();
        if ($searchInput.is(":visible")) {
            $searchInput.focus();
        }
    });

    $("#review-form").submit(function(event) {
        event.preventDefault(); 
        alert("Ulasan anda berhasil diupload!");
    });

    $(".rating-star label").click(function() {
        const selectedRating = $(this).attr("for").replace("rating", "");
        $(".rating-star label").removeClass("selected");
        for (let i = 1; i <= selectedRating; i++) {
            $("#rating" + i + "+ label").addClass("selected");
        }
    });    
});
