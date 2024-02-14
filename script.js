// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('verificationForm');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const checkedValues = Array.from(checkedBoxes).map(checkbox => checkbox.value);

        // Check if at least 3 checkboxes are checked
        if (checkedValues.length === 3) {
            // Proceed with verification
            verifyImages(checkedValues);
        } else {
            alert('Please select exactly 3 images.');
        }
    });

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Count the number of checked checkboxes
            const checkedCount = form.querySelectorAll('input[type="checkbox"]:checked').length;

            // Disable unchecked checkboxes if more than 3 are checked
            checkboxes.forEach(function(cb) {
                if (cb !== checkbox && checkedCount >= 3) {
                    cb.disabled = true;
                } else {
                    cb.disabled = false;
                }
            });
        });
    });

    function verifyImages(checkedValues) {
        // Verify the selected images
        const correctImages = ['1', '5', '7']; // Correct image values
        const correctCount = correctImages.filter(image => checkedValues.includes(image)).length;

        if (correctCount >= 3) {
            // Display the congratulatory message
            alert('Good job champion 🥇');

            // Proceed to the final page
            window.location.href = 'tic-tac-toe.html'; // Change 'final-page.html' to the URL of your final page
        } else {
            alert('Please select at least 3 correct images.');
        }
    }
});
