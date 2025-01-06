async function getDownloadLink() {
    const url = document.getElementById("tiktokUrl").value;
    if (url === "") {
        alert("Please enter a TikTok video URL.");
        return;
    }

    try {
        // Request to the backend API to get the watermark-free download link
        const response = await fetch(`http://localhost:3000/download?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        if (data.success) {
            // Display the watermark-free download link
            document.getElementById("downloadResult").innerHTML = `
                <a href="${data.downloadUrl}" target="_blank" download>
                    Click here to download the video (No Watermark)
                </a>
            `;
        } else {
            alert("Failed to fetch video. Please try again later.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while fetching the download link.");
    }
}