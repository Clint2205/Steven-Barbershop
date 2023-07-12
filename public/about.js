// Get the modal element
const modal = document.getElementById('myModal');

// Get the image that opens the modal
const image = document.getElementById('myImage');

// Get the <span> element that closes the modal
const closeBtn = document.getElementById('closeBtn');

// Function to show the modal
function showModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listener to open the modal when the image is clicked
image.addEventListener('click', showModal);

// Event listener to close the modal when the close button is clicked
closeBtn.addEventListener('click', closeModal);

// Event listener to close the modal when the user clicks outside the modal
window.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});
// Get the button element
const bookAppointmentBtn = document.querySelector('.book-appointment');

// Get the appointment section element
const appointmentSection = document.getElementById('appoint');

// Function to scroll to the appointment section
function scrollToAppointmentSection(event) {
  event.preventDefault(); // Prevent default link behavior

  // Scroll to the appointment section
  appointmentSection.scrollIntoView({ behavior: 'smooth' });
}

// Add click event listener to the book appointment button
bookAppointmentBtn.addEventListener('click', scrollToAppointmentSection);





function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const messageInput = document.getElementById('message');

    // Validate name (non-empty)
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return false;
    }

    // Validate email (non-empty and valid format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }

    // Validate phone (non-empty and numeric)
    const phoneRegex = /^\d+$/;
    if (phoneInput.value.trim() === '') {
        alert('Please enter your phone number.');
        phoneInput.focus();
        return false;
    } else if (!phoneRegex.test(phoneInput.value.trim())) {
        alert('Please enter a valid phone number.');
        phoneInput.focus();
        return false;
    }

    // Validate date (non-empty and any day of the week)
    const selectedDate = new Date(dateInput.value);
    if (dateInput.value.trim() === '' || isNaN(selectedDate)) {
        alert('Please select a valid date.');
        dateInput.focus();
        return false;
    }

    // Validate time (non-empty and between 9am and 8:30pm)
    const selectedTime = new Date(`2000-01-01T${timeInput.value}`);
    const startTime = new Date(`2000-01-01T09:00`);
    const endTime = new Date(`2000-01-01T20:30`);
    if (timeInput.value.trim() === '' || isNaN(selectedTime) || selectedTime < startTime || selectedTime > endTime) {
        alert('Please select a valid time between 9am and 8:30pm.');
        timeInput.focus();
        return false;
    }

    // Validate message (optional)

    return true;
}

function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    if (!validateForm()) {
        return;
    }

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const messageInput = document.getElementById('message');

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        date: dateInput.value,
        time: timeInput.value,
        message: messageInput.value,
    };

    // Send form data using Fetch API
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
              showFeedbackMessage('Form submitted successfully!', true);
              document.getElementById('appointment-form').reset(); // Clear form inputs
            } else {
              showFeedbackMessage(data.message || 'An error occurred while submitting the form. Please try again later.', false);
            }
          })
          
        .catch(error => {
            console.log('Error:', error);
            showFeedbackMessage('An error occurred while submitting the form. Please try again later.');
            document.getElementById('appointment-form').reset(); 
        });
}

function showFeedbackMessage(message, isSuccess) {
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = message;

    if (isSuccess) {
        feedbackMessage.style.backgroundColor = '#a9e6a2';
        feedbackMessage.style.color = '#006600';
    } else {
        feedbackMessage.style.backgroundColor = '#f8d7da';
        feedbackMessage.style.color = '#721c24';
    }

    feedbackMessage.style.display = 'block';

    setTimeout(function () {
        feedbackMessage.style.display = 'none';
    }, 5000);
}

// Get the form element and attach the submit event listener
const form = document.getElementById('appointment-form');
//form.addEventListener('submit', submitForm);


