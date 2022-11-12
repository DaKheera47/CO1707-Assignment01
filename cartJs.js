// get and show cart from session storage
var cart = JSON.parse(localStorage.getItem("cart"));

console.log(cart);

// for every item in cart, create a card
for (var i = 0; i < cart.length; i++) {
    var product = cart[i];
    var productString = JSON.stringify(product);

    document.getElementById("displayCart").innerHTML += `
    <div class="card">
        <div class="cardDetails">
            <img
                src="${cart[i][4]}"
                alt="${cart[i][2]}"
            />
            <h3>${cart[i][0]}</h3>
            <p class="color">${cart[i][1]}</p>
            <p class="price">${cart[i][3]}</p>
            <p>${cart[i][2]}</p>

            <a class="viewMore" onclick='saveItem(${productString})'>
                View More About This Product
            </a>
        </div>
    </div>
    `;
}

// saves the item to session storage
function saveItem(item) {
    item = JSON.stringify(item);
    console.log(item);
    sessionStorage.setItem("product", item);
    window.location.href = "item.html";
}
