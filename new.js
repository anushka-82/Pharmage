document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const checkoutButton = document.getElementById('checkout');
    const totalSpan = document.getElementById('total');

    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentNode;
            const productId = product.getAttribute('data-id');
            const price = parseFloat(product.querySelector('strong').innerText.substring(1));

            cartTotal += price;
            totalSpan.innerText = '$' + cartTotal.toFixed(2);
        });
    });

    checkoutButton.addEventListener('click', function() {
        alert('Thank you for your purchase! Total amount: $' + cartTotal.toFixed(2));
        cartTotal = 0;
        totalSpan.innerText = '$0.00';
    });
});