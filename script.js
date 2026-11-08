function validateForm(event) {
  event.preventDefault();
  var name = document.getElementById("fullname").value.trim();
  var email = document.getElementById("email").value.trim();
  var country = document.getElementById("country").value;
  var comments = document.getElementById("comments").value.trim();
  var box = document.getElementById("success");
  box.classList.remove("show");

  if (name === "" || email === "" || country === "" || comments === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }
  if (email.indexOf("@") < 1 || email.indexOf(".", email.indexOf("@")) < 0) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Form submitted successfully! Thank you for contacting me.");
  box.classList.add("show");
  document.getElementById("contactForm").reset();
  return false;
}
