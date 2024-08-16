const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to the top when the user clicks the button
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
