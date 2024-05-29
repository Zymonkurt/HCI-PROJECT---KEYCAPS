
function togglePaymentType() {
    const paymentTypes = document.querySelectorAll('.payment-type .type');
    
    paymentTypes.forEach(type => {
        type.addEventListener('click', function() {
            paymentTypes.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}


function validateForm() {
    const billingInputs = document.querySelectorAll('.billing input');
    const shippingInputs = document.querySelectorAll('.shipping input');
    let isValid = true;

    
    billingInputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    // Check if any shipping input is empty
    shippingInputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}


function initializePayment() {
    const proceedButton = document.querySelector('.button-primary');

    proceedButton.addEventListener('click', function() {
        if (validateForm()) {
            
            console.log('Payment process initiated.');
        } else {
            console.log('Please fill out all required fields.');
        }
    });
}


function handleFormSubmit() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Submit the form
            form.submit();
        } else {
            console.log('Please fill out all required fields.');
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    togglePaymentType();
    initializePayment();
    handleFormSubmit();
});
