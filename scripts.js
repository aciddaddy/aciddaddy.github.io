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
