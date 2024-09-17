// script.js

// Simulate a function to check streaming status
function checkStreamingStatus() {
    // Replace this with actual streaming status check
    const isStreaming = Math.random() > 0.5; // Simulate live status

    const liveStatusButton = document.getElementById('live-status-button');

    if (isStreaming) {
        liveStatusButton.classList.remove('offline');
        liveStatusButton.classList.add('live');
        liveStatusButton.innerText = '●'; // Dot indicating live
    } else {
        liveStatusButton.classList.remove('live');
        liveStatusButton.classList.add('offline');
        liveStatusButton.innerText = '●'; // Dot indicating offline
    }
}

// Check streaming status on page load
window.addEventListener('load', checkStreamingStatus);

// Optional: Check status every 30 seconds (for example)
setInterval(checkStreamingStatus, 30000);

    document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('greyscale-toggle');
    
    // Check local storage to see if greyscale mode was previously enabled
    if (localStorage.getItem('greyscale') === 'enabled') {
        document.body.classList.add('greyscale');
        toggle.checked = true;
    }

    // Add event listener for toggle
    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('greyscale');
            localStorage.setItem('greyscale', 'enabled');
        } else {
            document.body.classList.remove('greyscale');
            localStorage.setItem('greyscale', 'disabled');
        }
    });
});
