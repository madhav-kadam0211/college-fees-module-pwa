// Fee details for each academic year
const fees = {
  1: 50000, // Fee for 1st Year
  2: 55000, // Fee for 2nd Year
  3: 60000, // Fee for 3rd Year
  4: 65000, // Fee for 4th Year
};

let totalFee = 0;
let feesPaid = 0;
let remainingFee = 0;

function displayFee() {
  const studentId = document.getElementById("studentId").value;
  const academicYear = document.getElementById("academicYear").value;

  if (!studentId) {
    alert("Please enter your Student ID.");
    return;
  }

  const feeDisplay = document.getElementById("feeAmount");
  if (academicYear >= 1 && academicYear <= 4) {
    totalFee = fees[academicYear];
    remainingFee = totalFee - feesPaid;
    feeDisplay.textContent = `Student ID: ${studentId} - Total Fee for ${academicYear} Year: ₹${totalFee}`;
  } else {
    feeDisplay.textContent = "Please select a valid academic year.";
  }
}

function proceedToGateway() {
  const amount = document.getElementById("amount").value;

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  // Update the payment details
  feesPaid += parseFloat(amount);
  remainingFee = totalFee - feesPaid;

  // Store payment details in localStorage for the gateway page
  localStorage.setItem("totalFee", totalFee);
  localStorage.setItem("feesPaid", feesPaid);
  localStorage.setItem("remainingFee", remainingFee);

  // Redirect to payment gateway
  window.location.href = "gateway.html";
}
