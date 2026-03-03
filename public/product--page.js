async function ProductPageID() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const API_URL_ID = `/api/product/${productId}`;

    const response = await fetch(API_URL_ID);
    const product = await response.json();

    const main = document.querySelector('main');
    let imgHTML = document.createElement("img");
    imgHTML.src = "image/" + product.imag;
    imgHTML.classList.add("card--img");

    main.appendChild(imgHTML);
}

ProductPageID();