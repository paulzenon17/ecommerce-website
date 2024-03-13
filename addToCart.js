function addToCart() {
    // Create a new tab for the cart
    const cartWindow = window.open('', '_blank');
    cartWindow.document.write('<html><head><title>Your Cart Items</title>');
    cartWindow.document.write('<link rel="stylesheet" type="text/css" href="style.css">');
    cartWindow.document.write('<style>body, p { color: white; }</style>'); 
    cartWindow.document.write('</head><body>');

    // Get product details
    const productName = 'ASUS ROG Zephyrus Duo 16';
    const productPrice = '₹170000.00/-';

    // Display product in the cart tab
    cartWindow.document.write('<h2>Paul Matrix cart items</h2>');
    cartWindow.document.write('<div id="cart-item">');
    cartWindow.document.write(`<img src="laptop.jpg" alt="${productName}" style="max-width: 200px;">`);
    cartWindow.document.write(`<p>${productName}</p>`);
    cartWindow.document.write(`<p>${productPrice}</p>`);
    cartWindow.document.write('<button class="remove-btn" onclick="removeFromCart(this)">Remove</button>');
    cartWindow.document.write('<button class="purchase-btn" onclick="purchase()">Purchase</button>');
    cartWindow.document.write('<div id="message-container"></div>');
    cartWindow.document.write('</div>');

    // Add closing body and html tags
    cartWindow.document.write('<script src="addToCart.js"></script></body></html>');

    // Display the cart tab
    cartWindow.document.close();
    cartWindow.focus();
}
function removeFromCart(btn) {
    // Remove the item from the cart tab
    const cartItem = btn.parentNode;
    cartItem.parentNode.removeChild(cartItem);

    // Display a message in the cart tab
    const messageContainer = window.document.getElementById('message-container');
    messageContainer.innerHTML = 'The selected item is removed from your cart.';
}

function purchase() {
    window.open('payment.html', '_blank');
}
