// Function to load the cart from localStorage and display it
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cartItemsList');
    const totalAmount = document.getElementById('totalAmount');

    cartItemsList.innerHTML = ''; // Clear cart items list
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    totalAmount.textContent = total.toFixed(2);
}

// Function to handle adding an item to the cart
function addToCart(event) {
    const productId = event.target.parentElement.dataset.id;
    const productName = event.target.parentElement.dataset.name;
    const productPrice = parseFloat(event.target.parentElement.dataset.price);

    // Create the product object
    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    // Get the existing cart or initialize an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the product to the cart
    cart.push(product);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Reload the cart display
    loadCart();
}

// Function to toggle the visibility of the cart modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = (cartModal.style.display === 'none' || cartModal.style.display === '') ? 'flex' : 'none';
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Initially load the cart
loadCart();