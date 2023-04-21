const generatePasswordBtn = document.getElementById('generate-password-btn');
const generateSecurePasswordBtn = document.getElementById('generate-secure-password-btn');
const passwordDisplay = document.getElementById('password-display');

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

generatePasswordBtn.addEventListener('click', () => {
  const password = generate4LogicPassword();
  passwordDisplay.innerText = password;
});

generateSecurePasswordBtn.addEventListener('click', () => {
  const password = generate4LogicSecurePassword();
  passwordDisplay.innerText = password;
});
