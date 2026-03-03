export class Product{
    id;
    title;
    price;
    img_url;
    constructor(element){
        this.id = element.id;
        this.title = element.title;
        this.price = element.price;
        this.img_url = element.imag;
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

        card.addEventListener("click", () => {
            window.location.href = `product.html?id=${this.id}`;
        })
        return card;


    }
}