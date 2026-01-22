let balance = 1000;

const balanceText = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("depo");
const withdrawBtn = document.getElementById("with");

depositBtn.addEventListener("click", () => {
    let amount = Number(amountInput.value);
    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }
    balance += amount;
    balanceText.innerText = `Balance: $${balance}`;
    amountInput.value = "";
});

withdrawBtn.addEventListener("click", () => {
    let amount = Number(amountInput.value);
    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }
    if (amount > balance) {
        alert("Insufficient balance");
        return;
    }
    balance -= amount;
    balanceText.innerText = `Balance: $${balance}`;
    amountInput.value = "";
});
