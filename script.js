// Dark/Light Mode Toggle
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

// Search Filter Functionality
document.getElementById("searchInput").addEventListener("input", function () {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".animal-card");

    cards.forEach(card => {
        let animalName = card.getAttribute("data-name").toLowerCase();
        if (animalName.includes(filter)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});
