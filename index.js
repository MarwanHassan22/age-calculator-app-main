// Get the input elements
const dayOfBirthInput = document.getElementById("day");
const monthOfBirthInput = document.getElementById("month");
const yearOfBirthInput = document.getElementById("year");

// Get the error message elements
const dayOfBirthError = document.getElementById("day-error");
const monthOfBirthError = document.getElementById("month-error");
const yearOfBirthError = document.getElementById("year-error");

// Add a blur event listener to each input element
dayOfBirthInput.addEventListener("blur", validateDayOfBirth);
monthOfBirthInput.addEventListener("blur", validateMonthOfBirth);
yearOfBirthInput.addEventListener("blur", validateYearOfBirth);

// Define the callback function to validate the day of birth
function validateDayOfBirth() {
    const dayOfBirth = dayOfBirthInput.value;
    const dayLabelError = document.getElementById("day-label");
    if (dayOfBirth.length === 0) {
        dayLabelError.style.color = "red";
        dayOfBirthError.textContent = "This feild is required";
    } else if (dayOfBirth < 1 || dayOfBirth > 31) {
        dayLabelError.style.color = "red";
        dayOfBirthError.textContent = "Must be a valid day";
    } else {
        dayLabelError.style.color = "";
        dayOfBirthError.textContent = "";
    }
}

// Define the callback function to validate the month of birth
function validateMonthOfBirth() {
    const monthOfBirth = monthOfBirthInput.value;
    const monthLabelError = document.getElementById("month-label");
    if (monthOfBirth.length === 0) {
        monthLabelError.style.color = "red";
        monthOfBirthError.textContent = "This feild is required";
    } else if (monthOfBirth < 1 || monthOfBirth > 12) {
        monthLabelError.style.color = "red";
        monthOfBirthError.textContent = "Must be a valid month";
    } else {
        monthLabelError.style.color = "";
        monthOfBirthError.textContent = "";
    }
}

// Define the callback function to validate the year of birth
function validateYearOfBirth() {
    const yearOfBirth = yearOfBirthInput.value;
    const yearLabelError = document.getElementById("year-label");
    if (yearOfBirth.length === 0) {
        yearLabelError.style.color = "red";
        yearOfBirthError.textContent = "This feild is required";
    }
    else if (yearOfBirth < 1900 || yearOfBirth > new Date().getFullYear()) {
        yearLabelError.style.color = "red";
        yearOfBirthError.textContent = "Must be in the past";
    } else {
        yearLabelError.style.color = "";
        yearOfBirthError.textContent = "";
    }
}

// Get the button element
const calculateAgeBtn = document.getElementById("btn");

// Add a click event listener to the button
calculateAgeBtn.addEventListener("click", calculateAge);

// Define the callback function to calculate the age
function calculateAge() {
    // Validate the input fields
    validateDayOfBirth();
    validateMonthOfBirth();
    validateYearOfBirth();

    // Check if there are any errors
    if (
        dayOfBirthError.textContent ||
        monthOfBirthError.textContent ||
        yearOfBirthError.textContent
    ) {
        return;
    }

    // Get the user's birthdate from the input fields
    const dayOfBirth = dayOfBirthInput.value;
    const monthOfBirth = monthOfBirthInput.value;
    const yearOfBirth = yearOfBirthInput.value;

    // Create a Date object from the user's birthdate
    const birthdate = new Date(`${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`);

    // Calculate the age in milliseconds
    const ageInMs = Date.now() - birthdate.getTime();

    // Convert the age from milliseconds to years, months, and days
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    const ageInMonths = ageInYears * 12;
    const ageInDays = ageInMs / (1000 * 60 * 60 * 24);

    // Round the age to the nearest 
    const years = Math.floor(ageInYears);
    const months = Math.floor(ageInMonths % 12);
    const specificDays = days = Math.floor(ageInDays % 365.25);

    if (days >= 30){
        days = Math.floor(((specificDays / 30) - months) * 30);
    }

    // Display the age in the result section
    document.getElementById("year-result").textContent = years;
    document.getElementById("month-result").textContent = months;
    document.getElementById("day-result").textContent = days;
}
