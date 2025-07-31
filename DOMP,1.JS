const calculateBtn = document.querySelector('#calculate_bmi');
const bmiResults = document.querySelector('#bmi_results');
const form = document.querySelector('form');

calculateBtn.addEventListener('click', (event) => {
    const weight = parseFloat(document.querySelector('#weightField').value);
    const height = parseFloat(document.querySelector('#heightField').value);

    if (!weight || !height) {
        bmiResults.innerHTML = '<p class="text-danger">Please enter valid weight and height.</p>';
        return;
    }

    const result = (weight / (height * height)).toFixed(2);

    let bmiMsg = '';
    let bmiColor = 'text-danger';

    if (result < 18.5) {
        bmiMsg = 'Thinness';
        bmiColor = 'text-danger';
    } else if (result >= 18.5 && result <= 25) {
        bmiMsg = 'Normal';
        bmiColor = 'text-success';
    } else if (result > 25 && result <= 30) {
        bmiMsg = 'Overweight';
        bmiColor = 'text-warning';
    } else if (result > 30) {
        bmiMsg = 'Obese';
        bmiColor = 'text-danger';
    }

    bmiResults.innerHTML = `<p id="bmi_result">BMI = <b>${result}</b> (<span class="${bmiColor}"><b>${bmiMsg}</b></span>)</p>`;
});

form.addEventListener('submit', e => {
    e.preventDefault();
});