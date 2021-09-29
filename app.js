const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const returnAmount = cashGiven.value - billAmount.value;
            calculateChange(returnAmount);
        }
        else {
            showMessage("Cash given can't be less than the bill amount")
        }
    }
    else {
        showMessage("Invalid bill amount");
    }
});

function calculateChange(returnAmount) {
    for(let i=0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc( returnAmount / availableNotes[i] );
        returnAmount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}