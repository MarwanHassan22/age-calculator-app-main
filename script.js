// let dayInputEl = document.querySelector('#day');
// let monthInputEl = document.querySelector('#month');
// let yearInputEl = document.querySelector('#year');
// let yearResEl = document.querySelector('#year-result');
// let dayResEl = document.querySelector('#day-result');
// let monthResEl = document.querySelector('#month-result');
// let btnEl = document.querySelector('#btn');
// let today = new Date();

// btnEl.addEventListener('click', (monthRes, yearRes , dayRes) => {
//     yearRes =yearResEl.innerHTML = today.getFullYear() - yearInputEl.value - 1;
//     monthRes = monthResEl.innerHTML = today.getMonth() + (12 - monthInputEl.value + 1);
//     if (monthRes >= 12) {
//         monthResEl.innerHTML = monthRes - 12;
//         yearResEl.innerHTML = yearRes + 1;
//     }
//     // dayRes = dayResEl.innerHTML = today.getDay() - dayInputEl.value;
//     // if (dayRes > 0) {
//     //     dayResEl.innerHTML = -1 *dayRes ;
//     // }

//     dayResEl.innerHTML = Math.abs(today.getDay() - dayInputEl.value)
// })

// Get the button element
const calculateAgeBtn = document.getElementById('calculate-btn');

// Add a click event listener to the button
calculateAgeBtn.addEventListener('click', calculateAge);

// Define the callback function to calculate the age
function calculateAge(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user's birthdate from the input fields
    const dayOfBirth = document.getElementById('day').value;
    const monthOfBirth = document.getElementById('month').value;
    const yearOfBirth = document.getElementById('year').value;

    // Create a Date object from the user's birthdate
    const birthdate = new Date(`${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`);

    // Calculate the age in milliseconds
    const ageInMs = Date.now() - birthdate.getTime();

    // Convert the age from milliseconds to years, months, and days
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    const ageInMonths = ageInYears * 12;
    const ageInDays = ageInMs / (1000 * 60 * 60 * 24);

    // Round the age to the nearest integer
    const years = Math.floor(ageInYears);
    const months = Math.floor(ageInMonths % 12);
    const days = Math.floor(ageInDays % 365.25);

    // Display the age in the result section
    document.getElementById('year-result').textContent = years;
    document.getElementById('month-result').textContent = months;
    document.getElementById('day-result').textContent = days;
}


