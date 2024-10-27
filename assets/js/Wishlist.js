document.getElementById("search-icon").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input");
    searchInput.style.display = searchInput.style.display === "none" ? "inline-block" : "none";
    if (searchInput.style.display === "inline-block") {
        searchInput.focus();
    }
});
