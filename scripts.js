document.addEventListener("DOMContentLoaded", function () {
    const trackButton = document.querySelector(".track-btn");
    const bookingInput = document.querySelector("#booking-id");
    const statusElement = document.querySelector("#status");
    const departureDateElement = document.querySelector("#departure-date");
    const locationElement = document.querySelector("#location");

    trackButton.addEventListener("click", function () {
        const bookingId = bookingInput.value.trim();

        if (bookingId === "") {
            alert("Please enter a Booking ID.");
            return;
        }

        // Simulating API Response (Mock Data)
        const mockData = {
            "ABC123": { status: "Confirmed", departure: "2025-02-20", location: "Bangalore" },
            "XYZ789": { status: "Pending", departure: "2025-03-05", location: "Mumbai" },
            "LMN456": { status: "Completed", departure: "2025-01-10", location: "Delhi" }
        };

        if (mockData[bookingId]) {
            statusElement.textContent = mockData[bookingId].status;
            departureDateElement.textContent = mockData[bookingId].departure;
            locationElement.textContent = mockData[bookingId].location;
        } else {
            statusElement.textContent = "Not Found";
            departureDateElement.textContent = "N/A";
            locationElement.textContent = "N/A";
        }
    });
});

/* Booking Js */

document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector("#booking-form");
    const confirmationMessage = document.querySelector("#confirmation-message");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const destination = document.querySelector("#destination").value;
        const date = document.querySelector("#date").value;
        const guests = document.querySelector("#guests").value;

        if (name === "" || email === "" || destination === "" || date === "" || guests === "") {
            alert("Please fill in all the details correctly.");
            return;
        }

        // Simulating booking confirmation
        confirmationMessage.innerHTML = `
            <h3>Booking Confirmed!</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p>Thank you for booking with us!</p>
        `;
        confirmationMessage.style.display = "block";
        bookingForm.reset();
    });
});