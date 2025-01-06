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

    // Mock API call - In reality, this would be a call to a backend API or a third-party service
    fetch(`https://api.tiktokdownloader.com/?url=${encodeURIComponent(videoLink)}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Assuming the API returns the download URL for the video
                const videoUrl = data.video_url;
                videoPlayer.src = videoUrl;
                videoContainer.style.display = "block";
            } else {
                errorElement.textContent = "Failed to download the video. Try again later.";
            }
        })
        .catch(error => {
            errorElement.textContent = "An error occurred. Please try again.";
            console.error("Error downloading video:", error);
        });
});