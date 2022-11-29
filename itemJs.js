// get item from session storage
var product = JSON.parse(sessionStorage.getItem("product"));

if (product != null) {
    // set item to html
    document.getElementById("displayItem").innerHTML = `
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
        </div>
    </div>
`;
} else {
    // if no item is found, show error message
    document.getElementById("displayItem").innerHTML = `
    <div class="error">
        <h1 class="title">Error</h1>
        <h3 class="subtitle">
            No item found. Please go through the Product page to view an item.
        </h3>
    </div>
    `;
}
