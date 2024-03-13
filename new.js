document.addEventListener('DOMContentLoaded', function() {
    const medicineContainer = document.getElementById('medicine-container');
    const totalSpan = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');

    let cart = [];

    // Sample medicine data (replace with your data)
    const medicines = [
        { id: 1, name: 'Medicine 1', description: 'Description of Medicine 1.', price: 19.00 },
        { id: 2, name: 'Medicine 2', description: 'Description of Medicine 2.', price: 24.00 },
        // Add more medicines as needed
    ];

    // Render medicines
    medicines.forEach(medicine => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.setAttribute('data-id', medicine.id);

        productDiv.innerHTML = `
            <img src="https://mydr.com.au/wp-content/uploads/2020/10/AdobeStock_118425925-scaled.jpg" alt="${medicine.name}">
            <div>
                <h2>${medicine.name}</h2>
                <p>${medicine.description}</p>
                <p><strong>₹${medicine.price.toFixed(2)}</strong></p>
            </div>
            <button class="add-to-cart" data-id="${medicine.id}">Add to Cart</button>
            <button class="remove-from-cart" data-id="${medicine.id}">Remove from Cart</button>
        `;

        medicineContainer.appendChild(productDiv);
    });

    // Event listeners for add to cart and remove from cart
    medicineContainer.addEventListener('click', function(event) {
        const targetButton = event.target;
        if (targetButton.classList.contains('add-to-cart')) {
            const medicineId = parseInt(targetButton.getAttribute('data-id'));
            const selectedMedicine = medicines.find(medicine => medicine.id === medicineId);

            if (selectedMedicine) {
                cart.push(selectedMedicine);
                updateCartTotal();
            }
        } else if (targetButton.classList.contains('remove-from-cart')) {
            const medicineId = parseInt(targetButton.getAttribute('data-id'));
            cart = cart.filter(item => item.id !== medicineId);
            updateCartTotal();
        }
    });

    // Checkout button
    checkoutButton.addEventListener('click', function() {
        if (cart.length > 0) {
            const totalAmount = cart.reduce((total, item) => total + item.price, 0);
            alert(`Thank you for your purchase! Total amount: ₹${totalAmount.toFixed(2)}`);

            // Clear the cart after checkout
            cart = [];
            updateCartTotal();
        } else {
            alert('Your cart is empty. Add items before checking out.');
        }
    });

    // Update the cart total amount
    function updateCartTotal() {
        const totalAmount = cart.reduce((total, item) => total + item.price, 0);
        totalSpan.innerText = '₹' + totalAmount.toFixed(2);
    }
});
