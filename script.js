let count = 1;
let pricePerPerson = 1200;

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    if (count > 1) {
        count--;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("count").innerText = count;
    document.getElementById("totalPrice").innerText = count * pricePerPerson;
}

document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Booking Successful! ✈️ Your trip is confirmed.");
});