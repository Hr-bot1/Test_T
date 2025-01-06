document.getElementById("downloadBtn").addEventListener("click", function() {
    const videoLink = document.getElementById("videoLink").value;
    const errorElement = document.getElementById("error");
    const videoPlayer = document.getElementById("videoPlayer");
    const videoContainer = document.getElementById("videoContainer");

    // Validate the TikTok link
    if (!videoLink || !videoLink.includes("tiktok.com")) {
        errorElement.textContent = "Please enter a valid TikTok video URL.";
        return;
    }

    errorElement.textContent = ""; // Clear previous error message

    // Make the API call to the TokDownload API
    fetch(`https://www.tokdownload.com/api?url=${encodeURIComponent(videoLink)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success" && data.video_url) {
                // If successful, get the video URL from the response
                const videoUrl = data.video_url;
                videoPlayer.src = videoUrl;
                videoContainer.style.display = "block"; // Show the video player
            } else {
                errorElement.textContent = "Failed to download the video. Try again later.";
            }
        })
        .catch(error => {
            errorElement.textContent = "An error occurred. Please try again.";
            console.error("Error downloading video:", error);
        });
});
