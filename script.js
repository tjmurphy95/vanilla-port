let fields = {};

document.addEventListener("DOMContentLoaded", function () {
  fields.fullName = document.getElementById("fullName");
  fields.email = document.getElementById("email");
  fields.phone = document.getElementById("phone");
  fields.message = document.getElementById("message");
});

function isNotEmpty(val) {
  if (val === null || typeof val == "undefined") return false;
  return val.length > 0;
}

function isNumber(num) {
  return num.length > 0 && !isNaN(num);
}
function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}

function isValid() {
  let valid = true;

  valid &= fieldValidation(fields.fullName, isNotEmpty);
  valid &= fieldValidation(fields.phone, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.message, isNotEmpty);

  return valid;
}

class Contact {
  constructor(fullName, email, phone, message) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.message = message;
  }
}

async function sendContact() {
  if (isValid()) {
    let contact = new Contact(
      fullName.value,
      email.value,
      phone.value,
      message.value
    );
    try {
      const docRef = await addDoc(collection(db, "users"), {
        fullName: contact.fullName,
        email: contact.email,
        phone: contact.phone,
        message: contact.message,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert(`${contact.fullName} thanks for getting in contact!`);
  } else alert(`there was an error`);
}

function saveMessage(fullName, email, phone, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    fullName: fullName,
    email: email,
    phone: phone,
    message: message,
  });
}
