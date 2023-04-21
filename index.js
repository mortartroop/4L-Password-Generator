const generatePasswordBtn = document.getElementById('generate-password-btn');
const generateSecurePasswordBtn = document.getElementById('generate-secure-password-btn');
const passwordDisplay = document.getElementById('password-display');
const copyPasswordButton = document.getElementById("copy-password");

const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
const capital = consonants.split('');
const consonant = consonants.toLowerCase().split('');
const vowel = 'aeiou'.split('');
const number = '123456798'.split('');

function generate4LogicPassword() {
  let pw = capital[Math.floor(Math.random() * capital.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += consonant[Math.floor(Math.random() * consonant.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += consonant[Math.floor(Math.random() * consonant.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += Array.from({ length: 2 }, () => number[Math.floor(Math.random() * number.length)]).join('');
  pw += '!';

  pw = pw.replace(/\s/g, '');

  return pw;
}

function generate4LogicSecurePassword() {
  let pw = capital[Math.floor(Math.random() * capital.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += consonant[Math.floor(Math.random() * consonant.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += consonant[Math.floor(Math.random() * consonant.length)];
  pw += vowel[Math.floor(Math.random() * vowel.length)];
  pw += '@';
  pw += Array.from({ length: 4 }, () => number[Math.floor(Math.random() * number.length)]).join('');
  pw += '!';

  pw = pw.replace(/\s/g, '');

  return pw;
}

document.getElementById("copy-password").addEventListener("click", function() {
  const password = passwordDisplay.innerText;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password)
    .then(() => {
      console.log('Password copied to clipboard');
    })
    .catch(err => {
      console.error('Error copying password: ', err);
    });
});

function copyPasswordToClipboard() {
  const password = passwordDisplay.innerText;
  navigator.clipboard.writeText(password).then(function() {
    const notification = document.getElementById("notification");
    notification.classList.remove("hidden");
    setTimeout(function() {
      notification.classList.add("hidden");
    }, 2000);
  });
}

generatePasswordBtn.addEventListener('click', () => {
  const password = generate4LogicPassword();
  passwordDisplay.innerText = password;
});

generateSecurePasswordBtn.addEventListener('click', () => {
  const password = generate4LogicSecurePassword();
  passwordDisplay.innerText = password;
});

copyPasswordButton.addEventListener("click", copyPasswordToClipboard);
