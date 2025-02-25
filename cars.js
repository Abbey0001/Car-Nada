// Get the button
let topBtn = document.getElementById("topBtn");

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to top when clicking the button
topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
