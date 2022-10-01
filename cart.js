import {footer} from "./components/footer.js"
import {inner,navbar} from "./components/navbar.js"
import {show_alert} from "./scripts/alert.js"
document.querySelector("#footer").innerHTML = footer();


document.querySelector("#inner").innerHTML = inner();
document.querySelector("#nav").innerHTML = navbar();

document.querySelector("#btn_apply").addEventListener("click",()=>{
  window.location = "gift.html"
})

// document.getElementById("items_count").innerText = totalS.length;

const carts = JSON.parse(localStorage.getItem("cart"))
let coupon_applied = JSON.parse(localStorage.getItem("coupon_applied"));
if(coupon_applied == true){
  let btn_coupon = document.querySelector("#btn_apply")
  btn_coupon.disabled = true;
  console.log("button disabled")
}

let total = carts.reduce(function (acc, el, i) {
    return acc + Number(el.price);
  }, 0);

document.getElementById("cost").innerText = `₹ ${total}`;
localStorage.setItem("cart_total",JSON.stringify(total));

document.getElementById("items").innerText = carts.length;
const cartappend = (carts) => {
    const details = document.getElementById("cart");
    details.innerHTML = null;
    carts.forEach((el, i) => {
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div.id = "list"
            let img = document.createElement("img")
            img.src=el.url;
            let title = document.createElement('p');
            title.innerHTML = el.title;
            let ratings = document.createElement('p');
            ratings.innerHTML = `Ratings-${el.ratings}`;
            let price = document.createElement('p');
            price.innerHTML = `Price- ₹ ${el.price}`;
            let btn2 = document.createElement("button")
            btn2.innerHTML = 'Remove'
            btn2.addEventListener("click", function(event){
                event.target.parentNode.remove();
                carts.splice(i, 1);
                localStorage.setItem("cart",JSON.stringify(carts))
                
                total = carts.reduce(function (acc, el) {
                    return acc + Number(el.price);
                  }, 0);
                localStorage.setItem("cart_total",JSON.stringify(total));
                document.getElementById("cost").innerText = `₹ ${total}`;
                document.getElementById("items").innerText = carts.length;
                
                cartappend(carts)
                 
            });
            let totalS = JSON.parse(localStorage.getItem("cart"))
            document.getElementById("items_count").innerText = totalS.length;
            div1.append(img)
            div2.append(title,ratings,price,btn2)
            div.append(div1,div2)
            details.append(div)
    });
}
cartappend(carts)

// -----------------Footer Email Input------------------------

document.querySelector("#alert_btn").addEventListener("click", () => {
  show_alert();
})