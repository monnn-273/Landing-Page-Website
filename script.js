function handleGetFormData() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const cityInput = document.getElementById("city");
  const zipCodeInput = document.getElementById("zip-code");
  const statusInput = document.getElementById("status");

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    city: cityInput.value,
    zipCode: zipCodeInput.value,
    status: statusInput.checked,
  };

  return formData;
}

function isNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i]))) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  const formData = handleGetFormData();
  return formData.status;
}

function validateFormData(formData) {
  const { name, city, email, zipCode } = formData || {};

  return name && city && email && isNumber(zipCode) && checkboxIsChecked();
}

function submit(event) {
  event.preventDefault();
  const formData = handleGetFormData();

  if (validateFormData(formData)) {
    document.getElementById("warning").innerHTML = "SUKSES!";
    // Lakukan pengiriman data ke server di sini
  } else {
    document.getElementById("warning").innerHTML = "Periksa form anda sekali lagi";
  }
}