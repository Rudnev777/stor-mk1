function createElementBody(){
    const body = document.querySelector("body");
    let header = document.createElement("header");
    let main = document.createElement("main");
    body.append( header, main);
    const head = document.querySelector("head");
    let css = document.createElement("link");

    css.rel = "stylesheet";
    css.href = "style.css";

    head.append(css);
}

function createHeader(){
    const header = document.querySelector("header");

    let header_title = document.createElement("h1");
    header_title.classList.add("header--title");
    header_title.textContent = "StoreAuto";

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
    header.append(header_title, header_content_controller, header_search);


    const head = document.querySelector("head");
    let css = document.createElement("link");

    css.rel = "stylesheet";
    css.href = "style--header.css";

    head.append(css);
}
createElementBody();
createHeader();






class Product{
     id;
     title;
     price;
     img_url;
    constructor(element){
        this.id = element.id;
        this.title = element.title;
        this.price = element.price;
        this.img_url = element.image;
    }
    createCard(){
        const head = document.querySelector("head");
        let css = document.createElement("link");

        css.rel = "stylesheet";
        css.href = "style--card.css";

        head.append(css);


        let card = document.createElement("div");
        card.classList.add("card");
        let titleHTML = document.createElement("h1");
        titleHTML.textContent = this.title;
        titleHTML.classList.add("card--title");
        let priceHTML = document.createElement("span");
        priceHTML.textContent = this.price;
        priceHTML.classList.add("card--price");
        let imgHTML = document.createElement("img");
        imgHTML.src = "image/" + this.img_url;
        imgHTML.classList.add("card--img");
        let btn_buy = document.createElement("button");
        btn_buy.textContent = "Купить";
        btn_buy.classList.add("card--button--buy");
        card.append(titleHTML, priceHTML, imgHTML, btn_buy);
        return card;
    }
}
async function loadData() {
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





loadData();