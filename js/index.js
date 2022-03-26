const calculator = () => {
    const calculator = document.querySelector('.calculator');

    const total_price = calculator.querySelector('.total-price');
    const checkboxes = calculator.querySelectorAll('input[type=checkbox]');
    const selectInputs = calculator.querySelectorAll('select');
    const hidden = calculator.querySelector('.hidden');

    const calculate = () => {
        let total = 0;
        
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                total += parseInt(checkbox.getAttribute('data-price'));
            }
        }

        for (const select of selectInputs){
            total += parseInt(select.options[select.selectedIndex].value);

            if (select.options[select.selectedIndex].value == "50000"){
                hidden.classList.remove('hidden');
                total += parseInt(hidden.querySelector('input').value * 5000)
            } else{
                hidden.classList.add('hidden');
            }
        }

        total_price.textContent = numberWithSpaces(total);
    }

    for (const select of selectInputs) {
        select.addEventListener('click', calculate);
    }

    for (const checkbox of checkboxes) {
        checkbox.addEventListener('click', calculate);
    }

    hidden.addEventListener('change', calculate);

    function numberWithSpaces(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

}

const init = () => {
    calculator();
}

document.addEventListener('DOMContentLoaded', init);