import {Product} from "./class/product.js";

export function createHeader(){
    const header = document.querySelector("header");
    let header_title_section = document.createElement("div");
    header_title_section.classList.add("header--title--section");
    let header_title = document.createElement("h1");
    header_title.classList.add("header--title");
    header_title.textContent = "StoreAuto";
    header_title_section.append(header_title);
    // {потом посмотреть проверку
    const pathh = window.location.pathname;

    if (pathh !== '/' && pathh !== '/index.html' && !pathh.endsWith('index.html')) {
        let header_back = document.createElement("a");
        header_back.textContent = "←";
        header_back.href = "index.html"; // должен переводить на страницу назад а не неглавную потом переделать
        header_back.classList.add("header--back");
        header_title_section.prepend(header_back);
    }
    // потом посмотреть проверку}
    let header_content_controller = document.createElement("nav")
    header_content_controller.classList.add("header--controller--list")

    let header_basket = document.createElement("a");
    header_basket.classList.add("header--basket", "header--controller");
    header_basket.textContent = "Корзина";

    let header_profile = document.createElement("a");
    header_profile.classList.add("header--profile", "header--controller");
    header_profile.textContent = "Профиль";

    let header_menu = document.createElement("a");
    header_menu.classList.add("header--menu", "header--controller");
    header_menu.textContent = "Меню";

    let header_search = document.createElement("a");
    header_search.classList.add("header--search", "header--controller");
    let header_search_img = document.createElement("img");
    header_search_img.src = "image/search.png";
    header_search_img.alt = "Поиск";
    header_search_img.classList.add("header--search_img");
    header_search.append(header_search_img);

    header_content_controller.append(header_basket, header_profile ,header_menu);
    header.append(header_title_section, header_content_controller, header_search);


    const head = document.querySelector("head");
    let css = document.createElement("link");

    css.rel = "stylesheet";
    css.href = "style--header.css";

    head.append(css);
}


export async function loadData() {
    const API_URL = '/api/users';
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log('Данные загружены:', data);

    const main = document.querySelector('main');
    let cards = document.createElement('div');
    cards.classList.add('cards');
    for(const item of data){
        let card = new Product(item);
        cards.append(card.createCard());
    }
    main.appendChild(cards);

}

export async function ProductPageID() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const API_URL_ID = `/api/product/${productId}`;

    const response = await fetch(API_URL_ID);
    const el = await response.json();
    let product = new Product(el);
    // потом поменять получение элемента или на name или на id
    let img = document.querySelector("#product-img")
    let title = document.querySelector("#product-title")
    let price = document.querySelector("#product-price")

    img.src = "image/" + product.img_url;
    title.textContent = product.title;
    price.textContent = product.price;

    main.appendChild(imgHTML);
}




