// get item from session storage
var product = JSON.parse(sessionStorage.getItem("product"));

// set item to html
document.getElementById("displayItem").innerHTML = `
<div class="card">
    <img
        src="${product[4]}"
        alt="${product[2]}"
    />
    <h3>${product[0]}</h3>
    <p class="color">${product[1]}</p>
    <p class="price">${product[3]}</p>
    <p>${product[2]}</p>
</div>
`;
