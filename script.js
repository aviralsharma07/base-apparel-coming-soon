const submitBtn = document.querySelector(".btn");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    errorMessage.textContent = "Email address cannot be empty";
    errorMessage.style.display = "block";
  } else if (!emailPattern.test(emailValue)) {
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

function hideErrorMessage() {
  errorMessage.style.display = "none";
}
emailInput.addEventListener("input", hideErrorMessage);
