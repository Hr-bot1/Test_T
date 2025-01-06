async function getDownloadLink() {
    // Get the TikTok video URL inputted by the user
    const url = document.getElementById("tiktokUrl").value;
    
    // Check if the URL is empty
    if (url === "") {
        alert("Please enter a TikTok video URL.");
        return;
    }

    try {
        // Request to the backend API to get the download link without watermark
        const response = await fetch(`http://localhost:3000/download?url=${encodeURIComponent(url)}`);
        
        // Parse the JSON response from the backend
        const data = await response.json();

        // Check if the API call was successful
        if (data.success) {
            // If successful, display the download link
            document.getElementById("downloadResult").innerHTML = `
                <a href="${data.downloadUrl}" target="_blank" download>
                    Click here to download the video (No Watermark)
                </a>
            `;
        } else {
            // If the API call was unsuccessful, show an error message
            alert("Failed to fetch the video without a watermark. Please try again later.");
        }
    } catch (error) {
        // If an error occurs (e.g., API is down), show an alert
        console.error("Error:", error);
        alert("An error occurred while fetching the download link. Please check the URL and try again.");
    }
}