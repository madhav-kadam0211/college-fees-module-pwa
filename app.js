
const totalFees = 100000;
let amountPaid = 0;


document.getElementById("totalFees").textContent = totalFees;
document.getElementById("amountPaid").textContent = amountPaid;
document.getElementById("remainingBalance").textContent = totalFees;

function makePayment() {
  const paymentAmount = parseFloat(document.getElementById("paymentAmount").value);
  const statusMessage = document.getElementById("statusMessage");

  if (!paymentAmount || paymentAmount <= 0) {
    statusMessage.textContent = "Please enter a valid payment amount.";
    return;
  }

  amountPaid += paymentAmount;
  const remainingBalance = totalFees - amountPaid;


  if (amountPaid > totalFees) {
    statusMessage.textContent = "Amount exceeds total fees. Please enter a correct amount.";
    amountPaid -= paymentAmount; // revert to previous state
  } else {
    document.getElementById("amountPaid").textContent = amountPaid;
    document.getElementById("remainingBalance").textContent = remainingBalance;
    statusMessage.textContent = `Payment of ₹${paymentAmount} successful.`;
  }

  document.getElementById("paymentAmount").value = "";
}

function navigateTo(page) {
    window.location.href = page;
  }
  
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js")
        .then(registration => {
          console.log("Service Worker registered:", registration);
        })
        .catch(error => {
          console.error("Service Worker registration failed:", error);
        });
    });
  }
