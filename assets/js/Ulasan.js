$("#search-icon").click(function() {
    const $searchInput = $("#search-input");
    $searchInput.toggle();
    if ($searchInput.is(":visible")) {
        $searchInput.focus();
    }
});

$(document).click(function(event) {
    const $searchInput = $("#search-input");
    if (!$(event.target).closest("#search-icon, #search-input").length) {
        $searchInput.hide();
    }
});
