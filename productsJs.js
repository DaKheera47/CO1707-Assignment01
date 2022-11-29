// make html of products with different text if item is in cart, and variables changed
function productCardHtml(product, productString, productInCart = false) {
    return `
        <div class="card">
            <div class="cardDetails">
                <img
                    src="${product[4]}"
                    alt="${product[2]}"
                />
                <h3>${product[0]}</h3>
                <p class="color">${product[1]}</p>
                <p class="price">${product[3]}</p>
                <p>${product[2]}</p>

                <a class="viewMore" onclick='saveItemToSessionStorage(${productString})'>
                    View More About This Product
                </a>
            </div>
            <a class="productCardBtn" style='${
                productInCart ? "background-color: var(--primary-green);" : ""
            }' onclick='addToCart(${productString})'>
                ${productInCart ? "Added to cart! Add More!" : "Add To Cart!"}
            </a>
        </div>
    `;
}

// make product list
function makeProductLists() {
    // where to place all hoodies
    let hoodieList = document.getElementById("hoodieList");
    // clear the list before adding new items
    hoodieList.innerHTML = "";

    // for every hoodie, check if it is in cart, and make a card
    checkInCart(hoodies);

    for (let i = 0; i < hoodies.length; i++) {
        let product = hoodies[i];
        // creating a div element to hold the card
        let productItem = document.createElement("div");
        // convert product to string to pass to function
        let productString = JSON.stringify(product);

        // if item is in cart, it will display different text
        // product[5] is true if item is in cart
        productItem.innerHTML = productCardHtml(
            product,
            productString,
            product[5]
        );

        // adding the card to the hoodie list
        hoodieList.appendChild(productItem);
    }

    // where to add all jumper cards
    let jumperList = document.getElementById("jumperList");
    // clear the list before adding new items
    jumperList.innerHTML = "";

    // for every jumper, check if it is in cart, and make a card
    listWithCartItems = checkInCart(jumpers);

    for (let i = 0; i < jumpers.length; i++) {
        let product = jumpers[i];
        // creating the div to add the card into
        let productItem = document.createElement("div");
        // so that the product can be added to cart
        let productString = JSON.stringify(product);

        // if item is in cart, it will display different text
        productItem.innerHTML = productCardHtml(
            product,
            productString,
            product[5]
        );

        // add the card to the created div
        jumperList.appendChild(productItem);
    }

    // where to add all tshirt cards
    let tShirtList = document.getElementById("tShirtList");
    // clear the list before adding new items
    tShirtList.innerHTML = "";
    // for every tshirt, check if it is in cart, and make a card
    checkInCart(tshirts);

    for (let i = 0; i < tshirts.length; i++) {
        let product = tshirts[i];
        // creating the div to add the card into
        let productItem = document.createElement("div");
        // so that the product can be added to cart
        let productString = JSON.stringify(product);

        // if item is in cart, it will display different text
        productItem.innerHTML = productCardHtml(
            product,
            productString,
            product[5]
        );

        // add the card to the created div
        tShirtList.appendChild(productItem);
    }
}

// saves the item to session storage
function saveItemToSessionStorage(item) {
    // set the item to session storage
    item = JSON.stringify(item);
    sessionStorage.setItem("product", item);
    // redirect to item page
    window.location.href = "item.html";
}

// append true to the end of the array if item is in cart, updates the product list
function checkInCart(productCategory) {
    // https://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference

    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    // append true to every product that is in cart and in product list
    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];

        for (let j = 0; j < productCategory.length; j++) {
            let productItem = productCategory[j];

            // check item image urls (which are always unique) to make sure they are the same
            if (product[4] === productItem[4]) {
                // true means that the product is in the cart
                productItem[5] = true;
            }
        }
    }
}

// add an item to cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    // if cart is empty, create a new cart
    if (cart == null) {
        cart = [];
    }

    // add item to cart
    cart.push(item);

    // save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // regenerate product lists to update added to cart text
    makeProductLists();
}

// scroll to top
let goToTopBtn = document.getElementById("goToTop");

// logic to show and hide the scroll to top button
window.onscroll = function () {
    // When the user scrolls down 20px from the top of the document, show the button
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0;
}

// make product lists on page load
makeProductLists();
