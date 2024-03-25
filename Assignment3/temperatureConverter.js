document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('tempForm')
    let resultText=document.getElementById('result')

    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const tempInput = form.elements['temperature'];
        const tempValue = parseFloat(tempInput.value);
        if (isNaN(tempValue)) {
            resultText.textContent = "Please enter a valid number.";
          } else if (tempValue < -250 || tempValue > 250) {
            resultText.textContent = "Please enter a valid number between -250 and 250";
          } else {
            let celsius = (tempValue - 32) * (5/9);
            resultText.textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
          }

    })

})