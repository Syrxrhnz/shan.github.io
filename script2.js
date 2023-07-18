let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

const saveButton = document.getElementById('save-button');
const languageItems = document.querySelectorAll('.language-item');
const currentLanguageElement = document.getElementById('current-language');
const greetingElement = document.getElementById('greeting');

// Function to handle language change
function changeLanguage(language) {
  // Remove 'active' class from all language items
  languageItems.forEach(item => {
    item.classList.remove('active');
  });

  // Add 'active' class to the selected language item
  language.classList.add('active');

  // Update the current language text
  currentLanguageElement.innerText = language.innerText;

  // Update the greeting based on the selected language
  updateGreeting(language.innerText);
}

// Function to handle save button click
function handleSaveButtonClick() {
  let selectedLanguage = '';

  // Find the active language item
  languageItems.forEach(item => {
    if (item.classList.contains('active')) {
      selectedLanguage = item.innerText;
    }
  });

  // Save logic here - you can replace this with your own logic
  console.log(`Saving language: ${selectedLanguage}`);

  // Update UI or perform other actions based on the selected language
  currentLanguageElement.innerText = selectedLanguage;

  // Update the greeting based on the selected language
  updateGreeting(selectedLanguage);

  // Store the selected language in localStorage
  localStorage.setItem('selectedLanguage', selectedLanguage);
}

// Function to update the greeting based on the selected language
function updateGreeting(language) {
  if (language === 'English') {
    greetingElement.innerText = 'Hello!';
  } else if (language === 'Spanish') {
    greetingElement.innerText = '¡Hola!';
  } else if (language === 'French') {
    greetingElement.innerText = 'Bonjour !';
  } else if (language === 'German') {
    greetingElement.innerText = 'Hallo!';
  } else if (language === 'Filipino') {
    greetingElement.innerText = 'Kamusta!';
  } else if (language === 'Korean') {
    greetingElement.innerText = '안녕하세요!';
  }
}

// Event listener for language item click
languageItems.forEach(item => {
  item.addEventListener('click', () => {
    changeLanguage(item);
  });
});

// Event listener for save button click
saveButton.addEventListener('click', handleSaveButtonClick);

// Retrieve selected language from localStorage on page load
const selectedLanguage = localStorage.getItem('selectedLanguage');
if (selectedLanguage) {
  // Find the language item with the selected language and set it as active
  languageItems.forEach(item => {
    if (item.innerText === selectedLanguage) {
      changeLanguage(item);
    }
  });
}



