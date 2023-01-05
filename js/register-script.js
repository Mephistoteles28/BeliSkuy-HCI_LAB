function validateData() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confPassword = document.getElementById("password-confirm");
  var date = document.getElementById("date");
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var checkbox = document.getElementById("term-n-condition");

  console.log(date.value);

  if (username.value.length < 5) {
    alert("Username must be at least 5 characters");
  } else if (!email.value.endsWith("@gmail.com")) {
    alert("Email must be ends with @gmail.com");
  } else if (!isAlphaNumeric(password.value)) {
    alert("Password must be alphanumberic");
  } else if (conf_password.value != password.value) {
    alert("Confirm password must be same as password");
  } else if (!male.checked && !female.checked) {
    alert("Gender must be selected!");
  } else if (!checkbox.checked) {
    alert("You must agree on the terms and condition");
  } else {
    alert("Success submit the data");
  }
}

function isAlphaNumeric(password) {
  var isAlpha = false;
  var isNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      isAlpha = true;
    } else {
      isNumber = true;
      if (isNumber && isAlpha) {
        return true;
      }
    }
  }
  return false;
}
