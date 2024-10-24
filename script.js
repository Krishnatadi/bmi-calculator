function toggleUnits() {
    const units = document.getElementById('units').value;
    const weightLabel = document.querySelector('label[for="weight"]');
    const heightLabel = document.querySelector('label[for="height"]');

    if (units === 'imperial') {
        weightLabel.textContent = 'Weight (lbs):';
        heightLabel.textContent = 'Height (in):';
    } else {
        weightLabel.textContent = 'Weight (kg):';
        heightLabel.textContent = 'Height (cm):';
    }
}

function interpretBMI(bmi) {
    if (bmi < 18.5) return "Underweight: Consider eating more nutritious meals and consult a healthcare provider.";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal weight: Keep up the good work and maintain a balanced diet and regular exercise.";
    if (bmi >= 25 && bmi < 29.9) return "Overweight: Consider a balanced diet and regular physical activity. Consult a healthcare provider for personalized advice.";
    return "Obesity: It's important to consult with a healthcare provider for personalized advice and consider lifestyle changes.";
}

function calculateBMI() {
    const units = document.getElementById('units').value;
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (units === 'imperial') {
        weight = weight * 0.453592; // convert lbs to kg
        height = height * 2.54 / 100; // convert in to meters
    } else {
        height = height / 100; // convert cm to meters
    }

    if (!isNaN(weight) && weight > 0 && !isNaN(height) && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        const interpretation = interpretBMI(bmi);
        alertify.alert('BMI Result', `Your BMI is <b>${bmi}</b> <b>(${interpretation})</b>`);
    } else {
        alertify.error('Please enter valid numbers for both weight and height');
    }
}