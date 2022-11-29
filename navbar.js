// called on click of the hamburger icon
function toggleHamMenu() {
    let x = document.getElementById("mobileNavLinks");

    // toggle the display property
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
