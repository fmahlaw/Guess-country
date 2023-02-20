// Create an array of country names
const countries: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City (Holy See)",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// Define a constant for the number of points awarded for each correct letter guessed
const CORRECT_LETTER_POINTS: number = 10;

// Define a constant for the number of points deducted for each incorrect guess
const INCORRECT_GUESS_POINTS: number = 5;

// Define a constant for the bonus awarded for guessing the country name correctly with fewer guesses
const GUESS_BONUS: number = 100;

// Define a variable to keep track of the number of guesses made
let numGuesses: number = 0;

// Define a variable to keep track of the number of correct letters guessed
let numCorrectLetters: number = 0;
let lowercaseCountryName: string = "";
// Pick a random country from the array
const randomCountry: string =
  countries[Math.floor(Math.random() * countries.length)];

// Create an array to hold guessed letters
const guessedLetters: string[] = [];

// Create a variable to hold the number of guesses remaining
let guessesRemaining: number = 10;

// Create a function to check if a letter has already been guessed
function isLetterGuessed(letter: string): boolean {
  return guessedLetters.includes(letter);
}

// Create a function to check if a guess is correct
function isGuessCorrect(guess: string): boolean {
  return randomCountry.toLowerCase().includes(guess.toLowerCase());
}

// Create a function to display the country name with correctly guessed letters revealed
function displayCountry(): string {
  let displayedName: string = "";
  for (let i = 0; i < randomCountry.length; i++) {
    const letter: string = randomCountry[i];
    if (letter === " ") {
      displayedName += " ";
    } else if (isLetterGuessed(letter)) {
      displayedName += letter;
    } else {
      displayedName += "_";
    }
  }
  return displayedName;
}

// Create a function to handle a player's guess
function handleGuess(guess: string): void {
  if (isLetterGuessed(guess)) {
    console.log("You already guessed ${guess}!");
  } else {
    guessedLetters.push(guess);
    if (isGuessCorrect(guess)) {
      console.log("Correct! ${guess} is in the country name");
    } else {
      guessesRemaining--;
      console.log(
        "Incorrect. ${guess} is not in the country name. You have ${guessesRemaining} guesses remaining."
      );
    }
  }
}

// Define a variable to keep track of the current score
let score: number = 0;

// Prompt the user to enter a country name
const countryName = prompt("Enter a country name:");

if (countryName !== null) lowercaseCountryName = countryName.toLowerCase();

// Convert the country name to lowercase for case-insensitive matching

// Define a function to update the score
function updateScore(): void {
  score =
    numCorrectLetters * CORRECT_LETTER_POINTS -
    numGuesses * INCORRECT_GUESS_POINTS;
  if (numGuesses < 10 && numCorrectLetters === lowercaseCountryName?.length) {
    score += GUESS_BONUS;
  }
}

// Prompt the user to guess a letter
const letter = prompt("Guess a letter:");

if (letter !== null) {
  // Check if the letter is in the country name
  if (lowercaseCountryName?.includes(letter.toLowerCase())) {
    console.log("Correct!");
    numCorrectLetters++;
    updateScore();
    console.log(`Score: ${score}`);
  } else {
    console.log("Incorrect!");
    numGuesses++;
    updateScore();
    console.log(`Score: ${score}`);
  }
}

// Repeat until the user has guessed all the letters or 10 incorrect guesses have been made
while (numGuesses < 10 && numCorrectLetters < lowercaseCountryName.length) {
  // Prompt the user to guess a letter
  const letter = prompt("Guess a letter:");

  if (letter !== null) {
    // Check if the letter is in the country name
    if (lowercaseCountryName?.includes(letter.toLowerCase())) {
      console.log("Correct!");
      numCorrectLetters++;
      updateScore();
      console.log(`Score: ${score}`);
    } else {
      console.log("Incorrect!");
      numGuesses++;
      updateScore();
      console.log(`Score: ${score}`);
    }
  }
}

// Check if the user has won or lost
if (numCorrectLetters === lowercaseCountryName?.length) {
  console.log(
    `Congratulations, you guessed the country name (${countryName}) with a score of ${score}!`
  );
} else {
  console.log(
    `Sorry, you didn't guess the country name (${countryName}) within 10 guesses. Your final score is ${score}.`
  );
}

// Print the initial game state
console.log("Guess the name of a country ${randomCountry.length} letters");
console.log(displayCountry());
console.log("You have ${guessesRemaining} guesses");

// Listen for player input and handle guesses
process.stdin.on("data", (input: Buffer) => {
  const guess: string = input.toString().trim();
  if (guess.length === 1) {
    handleGuess(guess);
  } else if (guess === randomCountry) {
    console.log("Correct! The country was ${randomCountry}");
    process.exit();
  } else {
    console.log(
      "Incorrect. ${guess} is not the country name. You have ${guessesRemaining} guesses remaining."
    );
    guessesRemaining--;
  }
  if (guessesRemaining === 0) {
    console.log("You have no more guesses. The country was ${randomCountry}.");
    process.exit();
  }
  console.log(displayCountry());
  console.log("You have ${guessesRemaining} guesses.");
});
