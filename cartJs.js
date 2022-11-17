function generateCartItems() {
    // empty the list to add updated items everytime
    let cart = JSON.parse(localStorage.getItem("cart"));

    // if cart is empty, show empty cart message
    if (cart.length == 0) {
        // disable checkout button
        document.getElementById("checkoutButton").disabled = true;

        // remove the remove all button
        document.getElementsByClassName("header")[0].style.display = "none";

        // show empty cart message
        document.getElementById("cartItemsList").innerHTML = `
        <div class="empty-cart">
            <h1 class="title">Your cart is empty</h1>
            <h3 class="subtitle">Add some items to your cart</h3>
        </div>
`;

        // end execution of function
        return;
    }

    document.getElementById("cartItemsList").innerHTML = "";

    // for every item in cart, create a card
    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        let productString = JSON.stringify(product);

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
}

// generate cart items on page load
generateCartItems();

// remove all items from cart
function removeAllItems() {
    localStorage.setItem("cart", "[]");
    generateCartItems();
}

// removes item from cart
function removeItem(item) {
    // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    let cart = JSON.parse(localStorage.getItem("cart"));

    // check if item is in cart and remove it
    // loop through cart
    for (let i = 0; i < cart.length; i++) {
        // if item is in cart, image urls are the same
        if (cart[i][4] == item[4]) {
            // remove item from cart
            cart.splice(i, 1);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    generateCartItems();
    calculateTotal();
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
    let cart = JSON.parse(localStorage.getItem("cart"));
    let total = 0;

    // if cart is empty, show empty cart message
    if (cart.length == 0) {
        document.getElementById("total").innerHTML = `
        <div class="total"></div>
`;

        for (let i = 0; i < cart.length; i++) {
            // https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
            let price = cart[i][3].replace(/[^0-9.-]+/g, "");
            total += parseFloat(price);
        }

        // round to 2 decimals
        total = total.toFixed(2);

        // show total price
        // adds the total price to the cart
        document.getElementById("totalPrice").innerHTML = `£${total}`;
        // set the total number of items in the cart
        document.getElementById("numItems").innerHTML = `${cart.length} items`;
    }
}
