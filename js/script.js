// JavaScript functionality (if any needed)
document.addEventListener("DOMContentLoaded", () => {
    console.log("BoostWave Studios Landing Page Loaded");
});
// Open the Modal
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block"; // Show the modal
    modalImg.src = imgElement.src; // Set the src of the modal image to the clicked image
    captionText.innerHTML = imgElement.alt; // Set the caption to the image's alt text
}

// Close the Modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}
window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    var modalContent = document.getElementById("modalImage");
    // If the user clicks anywhere outside the modal image, close the modal
    if (event.target == modal) {
        closeModal();
    }
};
// Function to mute all video iframes by default
const videoIframes = document.querySelectorAll('iframe');

videoIframes.forEach(iframe => {
    const src = iframe.src;
    if (src.includes('youtube.com')) {
        // Mute YouTube videos by adding the mute parameter
        iframe.src = src.includes('?') ? `${src}&mute=1` : `${src}?mute=1`;
    } else if (src.includes('vimeo.com')) {
        // Mute Vimeo videos by adding the muted parameter
        iframe.src = src.includes('?') ? `${src}&muted=1` : `${src}?muted=1`;
    }
});
// Initialize EmailJS (replace 'your_user_id' with your actual EmailJS User ID)
emailjs.init("sNq1CIiOcgITDIsEh");

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        user_name: name,
        user_email: email,
        subject: subject,
        message: message
    };

    emailjs.send('service_asul0l6', 'template_saqvhoe', templateParams)
        .then(function(response) {
            // Show success message
            document.getElementById('responseMessage').innerText = "Your message has been sent successfully!";
            document.getElementById('responseMessage').classList.remove('error');
            document.getElementById('responseMessage').classList.add('success');
        }, function(error) {
            // Show error message
            document.getElementById('responseMessage').innerText = "Sorry, something went wrong. Please try again!";
            document.getElementById('responseMessage').classList.remove('success');
            document.getElementById('responseMessage').classList.add('error');
        });
});
