const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const results = document.querySelector('#results');

    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

        let bmiCategory = '';
        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
            results.innerHTML += `<div class="bmi-category underweight">${bmiCategory}</div>`;
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiCategory = 'Normal weight';
            results.innerHTML += `<div class="bmi-category normal-weight">${bmiCategory}</div>`;
        } else if (bmi >= 25 && bmi < 30) {
            bmiCategory = 'Overweight';
            results.innerHTML += `<div class="bmi-category overweight">${bmiCategory}</div>`;
        } else {
            bmiCategory = 'Obese';
            results.innerHTML += `<div class="bmi-category obese">${bmiCategory}</div>`;
        }
    }
});
