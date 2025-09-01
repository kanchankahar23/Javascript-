class createbiscuits {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }
    erase() {
        document.querySelectorAll("h1").forEach( (e)=> {
            if (e.style.color === this.color) {
                e.remove();
            }

        })
    }
    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1);

    }
}

let b1 = new createbiscuits("monago", "parle", 20, "blue");
let b2 = new createbiscuits("parleG", "parle", 20, "red");
console.log(b1);
// initialize 