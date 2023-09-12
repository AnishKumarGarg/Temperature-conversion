
// Function to perform temperature conversion
function convertTemperature() {
    // Get the input and select elements
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    const fromUnit = document.getElementById('units-from').value;
    const toUnit = document.getElementById('units-to').value;

    // Ensure that the input is a valid number
    if (isNaN(fromInput.value)) {
        toInput.value = 'Invalid Input';  
        return;
    }

    // Convert the temperature based on selected units
    let result;
    if (fromUnit === 'Degree Celsius' && toUnit === 'Fahrenheit') {
        result = (parseFloat(fromInput.value) * 9 / 5) + 32;
    } else if (fromUnit === 'Degree Celsius' && toUnit === 'Kelvin') {
        result = parseFloat(fromInput.value) + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Degree Celsius') {
        result = (parseFloat(fromInput.value) - 32) * 5 / 9;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        result = ((parseFloat(fromInput.value) - 32) * 5 / 9) + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Degree Celsius') {
        result = parseFloat(fromInput.value) - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        result = ((parseFloat(fromInput.value) - 273.15) * 9 / 5) + 32;
    } else {
        result = parseFloat(fromInput.value);
    }

    // Display the converted temperature in the 'to' input field
    toInput.value = result.toFixed(2);
}

// Add event listeners to trigger conversion when inputs or unit selects change
document.getElementById('from').addEventListener('input', convertTemperature);
document.getElementById('units-from').addEventListener('change', convertTemperature);
document.getElementById('units-to').addEventListener('change', convertTemperature);

// Initial conversion
convertTemperature();
