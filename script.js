function volume_sphere() {
    let inputvalue = parseFloat(document.getElementById('radius').value);
    let volumn = document.getElementById('volume');
    
    if (inputvalue < 0 || isNaN(inputvalue)) {
        volumn.value = 'NaN';
    } else {
        let calculate = (4 / 3) * Math.PI * Math.pow(inputvalue, 3);
        volumn.value = calculate.toFixed(4); // Rounding to 4 decimal places
    }
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission
        volume_sphere();
    };
};
