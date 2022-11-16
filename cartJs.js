// get and show cart from session storage
var cart = JSON.parse(localStorage.getItem("cart"));

console.log(cart);

// for every item in cart, create a card
for (var i = 0; i < cart.length; i++) {
    var product = cart[i];
    var productString = JSON.stringify(product);

    document.getElementById("cartItemsList").innerHTML += `
    <div class="cartItem">
        <div class="image-box">
            <img
                src="${cart[i][4]}"
                alt="${cart[i][2]}"
            />
        </div>
        <div class="about">
            <h1 class="title">${cart[i][0]}</h1>
            <h3 class="subtitle">${cart[i][1]}</h3>
        </div>
        <div class="prices">
            <div class="amount">${cart[i][3]}</div>
            <div class="remove" onclick='removeItem(${productString})'>
                Remove
            </div>
        </div>
    </div>
    `;
}

// if cart is empty, show empty cart message
if (cart.length == 0) {
    document.getElementById("cartItemsList").innerHTML = `
    <div class="empty-cart">
        <h1 class="title">Your cart is empty</h1>
        <h3 class="subtitle">Add some items to your cart</h3>
    </div>
    `;
}

// remove all items from cart
function removeAllItems() {
    localStorage.setItem("cart", "[]");
    location.reload();
}

// removes item from cart
function removeItem(item) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var index = cart.indexOf(item);
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// saves the item to session storage
function saveItem(item) {
    item = JSON.stringify(item);
    console.log(item);
    sessionStorage.setItem("product", item);
    window.location.href = "item.html";
}

// calculates the total price of the cart
function calculateTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        // https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
        var price = cart[i][3].replace(/[^0-9.-]+/g, "");
        total += parseFloat(price);
    }

    // round to 2 decimals
    total = total.toFixed(2);
    return total;
}

// adds the total price to the cart
document.getElementById("totalPrice").innerHTML = `£${calculateTotal()}`;
// set the total number of items in the cart
document.getElementById("numItems").innerHTML = `${cart.length} items`;
