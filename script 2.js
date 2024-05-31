function handleFormSubmission(event) {
    event.preventDefault(); 
    var firstName = document.getElementById('firstName').value.trim();
    var matricNumber = document.getElementById('matricNumber').value.trim();


    if (!firstName || !matricNumber) {
        alert('Please fill out the Name and Matric Number fields.');
        return;
    }

    console.log('Submitted Form Data:');
    console.log('First Name:', firstName);
    console.log('Matric Number:', matricNumber);
}

function navigateBack() {
    window.history.back();
}
document.addEventListener('DOMContentLoaded', function() {
    var registerForm = document.getElementById('registerForm');
    var backButton = document.querySelector('button[onclick="window.history.back()"]');

    if (registerForm) {
        registerForm.addEventListener('submit', handleFormSubmission);
    }

    if (backButton) {
        backButton.addEventListener('click', navigateBack);
    }
});
