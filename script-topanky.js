class TopankyItem {
    constructor(name, cw, price, sizes) {
        this.name = name;
        this.cw = cw;
        this.price = price;
        this.sizes = sizes;
        this.createSctn();
    }

    createSctn () {
        let sect = document.createElement("section");
        sect.classList.add("product-container");
        sect.classList.add("scrollbar");

        let divPInfo = document.createElement("div");
        divPInfo.classList.add("product-info");
        divPInfo.classList.add("product-info-abs");
        sect.appendChild(divPInfo);

        let divPName = document.createElement("div");
        divPName.classList.add("product-name");
        divPInfo.appendChild(divPName);

        let pSName = document.createElement("p");
        pSName.classList.add("shoes-name");
        pSName.textContent = this.name;
        divPName.appendChild(pSName);

        let pCw = document.createElement("p");
        pCw.classList.add("colorway");
        pCw.textContent = this.cw;
        divPName.appendChild(pCw);

        let divPMisc = document.createElement("div");
        divPMisc.classList.add("product-misc");
        divPInfo.appendChild(divPMisc);

        let pPrice = document.createElement("p");
        pPrice.classList.add("product-price");
        pPrice.textContent = this.price + "€";
        divPMisc.appendChild(pPrice);

        let pSizes = document.createElement("p");
        pSizes.classList.add("product-sizes");
        pSizes.textContent = this.sizes + "EU";
        divPMisc.appendChild(pSizes);

        let obrazky = [];

        for (let i = 0; i < 3; i++) {
            obrazky.push(document.createElement("div"));
            obrazky[i].classList.add("product-pics");
            obrazky[i].style.backgroundImage = `url("shoes/${this.name}/${this.cw}/${i}.png")`;   
            if (i != 0) {
                obrazky[i].style.position = "absolute";
                obrazky[i].style.top = "0px";
                obrazky[i].style.left = `${i}00%`;
            }
            sect.appendChild(obrazky[i]);
        }

        let productsdiv = document.querySelector("#products");
        productsdiv.appendChild(sect);
    }
}

let top1 = new TopankyItem("Nike Air Force 1 Low","Barley Paisley","200","42");
let top2 = new TopankyItem("Nike Air Jordan 1 Mid","USA","300","42");
let top3 = new TopankyItem("Nike Air Force 1 Low","Year Of The Tiger","340","44");
let top4 = new TopankyItem("Nike Air Jordan 1 High","Rebellionaire","300","43");

let prodContainer = document.querySelectorAll(".product-container");

prodContainer.forEach((cont) => {
    cont.onmouseleave = () => {
        cont.scrollTo(0, 0);
    }
})