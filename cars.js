document.getElementById("scrollBtn").addEventListener("click", function() {
    document.getElementById("target").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("scrollBtnTwo").addEventListener("click", function() {
    document.getElementById("target-two").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollBtnThree").addEventListener("click", function() {
    document.getElementById("target-three").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollBtnFour").addEventListener("click", function() {
    document.getElementById("target-four").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("scrollBtnFive").addEventListener("click", function() {
    document.getElementById("target-five").scrollIntoView({ behavior: "smooth" });
});
















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
