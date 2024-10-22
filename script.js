// Add an event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data and convert it to an object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Create the message to send to Telegram
    const message = `
    New Registration:
    First Name: ${data.first_name}
    Last Name: ${data.last_name}
    Email: ${data.email}
    Phone: ${data.phone}
    `;

    // Send the message to the Telegram bot
    fetch(`https://api.telegram.org/bot6801734959:AAGJu6tOUc-Iiai-c1zGCukMbxInu2bEub0/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '578130841',
            text: message,
        }),
    })
        .then(response => response.json())
        .then(data => {
            // Check if the message was sent successfully
            if (data.ok) {
                alert('Registration details sent to Telegram!');
            } else {
                alert('Error sending registration details.');
            }
        })
        .catch((error) => {
            // Handle any errors that occur during the fetch request
            console.error('Error:', error);
            alert('Error sending registration details.');
        });
});

// Animation card

let currentIndex = 0; // Index of the current card
const cards = document.querySelectorAll('.card_customer, .card_customer_main');
const totalCards = cards.length;
const indicators = document.querySelectorAll('.navigation_bar .order .indicator circle');

// Function to display the card by index
function showCard(index) {
    cards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
        indicator.classList.toggle('inactive', i !== index);
    });
}

// Function to go to the next card
function nextFunction() {
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex);
}

// Function to go to the previous card
function backFunction() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showCard(currentIndex);
}

// Initially display the first card
showCard(currentIndex);


// Dropdown list
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});