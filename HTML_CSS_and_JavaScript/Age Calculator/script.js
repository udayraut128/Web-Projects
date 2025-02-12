// Get the required elements from the DOM
const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');
const paragraph = document.getElementById('paragraph');
const paragraph1 = document.getElementById('paragraph1');
// Add click event listener to the calculate age button
calculateButton.addEventListener('click', calculateAge);

// Function to calculate your age
function calculateAge() {
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();

  // Calculate the age
  const ageInMilliseconds = today - birthdate;
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  
  // Display the result
  if(ageInYears >= 0) {
      resultElement.textContent = `Now, Your are ${ageInYears} years old!`;
    }else{
        resultElement.textContent = 'Not valid input';
    }
}