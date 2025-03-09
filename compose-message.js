// Event listener to handle form submission
document.getElementById('composeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form data
    const recipient = document.getElementById('recipient').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create the message object
    const newMessage = {
        recipient,
        subject,
        message,
        time: new Date().toLocaleString() // Store the current time
    };

    // Save the message to localStorage (you can use AJAX to send it to a server in a real application)
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));

    // Redirect back to the inbox page after sending the message
    window.location.href = 'a-sales-messages-inbox.html';
});
