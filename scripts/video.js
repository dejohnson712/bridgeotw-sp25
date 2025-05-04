// Video script

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("aboutVideo");
    video.addEventListener("ended", () => {
        video.style.display = "none"; // hides the video
    });
});