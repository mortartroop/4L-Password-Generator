const generatePasswordBtn = document.getElementById("generate-password-btn");
const generateSecurePasswordBtn = document.getElementById(
  "generate-secure-password-btn"
);
const passwordDisplay = document.getElementById("password-display");
const copyPasswordButton = document.getElementById("copy-password");
const numPasswordsInput = document.getElementById("numPasswords");

const consonants = "BCDFGHJKLMNPQRSTVWXYZ";
const capital = consonants.split("");
const consonant = consonants.toLowerCase().split("");
const vowel = "aeiou".split("");
const number = "123456798".split("");

function generate4LogicPassword() {
  let pw = capital[Math.floor(Math.random() * capital.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += consonant[Math.floor(Math.random() * consonant.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += consonant[Math.floor(Math.random() * consonant.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += Array.from(
    { length: 2 },
    () => number[Math.floor(Math.random() * number.length)]
  ).join("");
  pw += "!";

  pw = pw.replace(/\s/g, "");

  return pw;
}

function generate4LogicSecurePassword() {
  let pw = capital[Math.floor(Math.random() * capital.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += consonant[Math.floor(Math.random() * consonant.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += consonant[Math.floor(Math.random() * consonant.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += "@";
  pw += Array.from(
    { length: 4 },
    () => number[Math.floor(Math.random() * number.length)]
  ).join("");
  pw += "!";

  pw = pw.replace(/\s/g, "");

  return pw;
}

function copyPasswordToClipboard() {
  const password = passwordDisplay.innerText;
  navigator.clipboard.writeText(password).then(function () {
    const notification = document.getElementById("notification");
    notification.classList.remove("hidden");
    setTimeout(function () {
      notification.classList.add("hidden");
    }, 2000);
  });
}

generatePasswordBtn.addEventListener("click", () => {
  let numPasswords = numPasswordsInput.value || 1;
  let passwordList = [];

  for (let i = 0; i < numPasswords; i++) {
    const password = generate4LogicPassword();
    passwordList.push(password);
  }

  passwordDisplay.innerText = passwordList.join("\n");
});

generateSecurePasswordBtn.addEventListener("click", () => {
  let numPasswords = numPasswordsInput.value || 1;
  let passwordList = [];

  for (let i = 0; i < numPasswords; i++) {
    const password = generate4LogicSecurePassword();
    passwordList.push(password);
  }

  passwordDisplay.innerText = passwordList.join("\n");
});

copyPasswordButton.addEventListener("click", copyPasswordToClipboard);
