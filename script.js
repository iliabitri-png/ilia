const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

bookingForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;

  message.innerHTML =
    `Thank you ${name}! Your appointment request has been sent.`;

  bookingForm.reset();
});