let productsTees = document.querySelector("#products-tees");

class TrickoItem {
    constructor (meno, color, price) {
        this.meno = meno;
        this.color = color;
        this.price = price;
        this.createSctn();
    }

    createSctn () {
        let sctn = document.createElement("section");
        sctn.classList.add("tee");

        let divTPic = document.createElement("div");
        divTPic.classList.add("tee-info");
        sctn.style.backgroundImage = `url("tees/${this.meno}/${this.color}.png")`;
        sctn.appendChild(divTPic);

        let divICon = document.createElement("div");
        divICon.classList.add("info-container");
        divTPic.appendChild(divICon);

        let clss = ["tee-name", "tee-color", "tee-price"]
        let xd = [];

        for (let i = 0; i < 3; i++) {
            xd.push(document.createElement("p"));
            xd[i].classList.add(clss[i]);
            if (i == 0) {
                xd[i].textContent = this.meno;
            } else if (i == 1) {
                xd[i].textContent = this.color;
            } else {
                xd[i].textContent = this.price + "€";
            }
            divICon.appendChild(xd[i]);
        }

        productsTees.appendChild(sctn);
    }
}

let t1 = new TrickoItem("CDG", "Play Heart Logo", "43");
let t2 = new TrickoItem("Supreme", "Bad", "60");
let t3 = new TrickoItem("Supreme", "Splash Logo", "55");
let t4 = new TrickoItem("Golf Wang", "3D Print Logo", "40");
let t5 = new TrickoItem("Supreme", "Old English Glow", "90");
