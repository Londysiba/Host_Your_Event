
function searchLocation() {
    var locationInput = document.getElementById("locationInput").value;
            alert("Searching for event service providers around: " + locationInput);
}

function toggleSearch() {
    var searchInput = document.getElementById("searchInput");
    searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'block' : 'none';
}