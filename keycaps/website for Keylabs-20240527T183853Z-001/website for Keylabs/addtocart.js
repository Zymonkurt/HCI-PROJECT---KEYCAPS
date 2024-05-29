document.addEventListener('DOMContentLoaded', (event) => {
    const updateTotals = () => {
        let totalItems = 0;
        let totalPrice = 0;

        document.querySelectorAll('.main').forEach((item) => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.querySelector('.price').dataset.price);
            totalItems += quantity;
            totalPrice += price * quantity;
        });

        document.querySelector('.title .text-muted').textContent = `${totalItems} items`;
        document.querySelector('.summary .col.text-right').textContent = `€ ${totalPrice.toFixed(2)}`;
        const shipping = 5.00; // Assuming flat rate shipping
        document.querySelector('.summary .total-price').textContent = `€ ${(totalPrice + shipping).toFixed(2)}`;
    };

    document.querySelectorAll('.plus').forEach((button) => {
        button.addEventListener('click', () => {
            const quantityElem = button.previousElementSibling;
            let quantity = parseInt(quantityElem.textContent);
            quantityElem.textContent = quantity + 1;
            updateTotals();
        });
    });

    document.querySelectorAll('.minus').forEach((button) => {
        button.addEventListener('click', () => {
            const quantityElem = button.nextElementSibling;
            let quantity = parseInt(quantityElem.textContent);
            if (quantity > 1) {
                quantityElem.textContent = quantity - 1;
                updateTotals();
            }
        });
    });

    document.querySelectorAll('.close').forEach((closeButton) => {
        closeButton.addEventListener('click', (e) => {
            const itemRow = e.target.closest('.main');
            itemRow.remove();
            updateTotals();
        });
    });

    updateTotals(); // Initial total calculation
});
