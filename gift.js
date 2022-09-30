import {footer} from "./components/footer.js"
import {inner,navbar} from "./components/navbar.js"
document.querySelector("#footer").innerHTML = footer();


document.querySelector("#inner").innerHTML = inner();
document.querySelector("#nav").innerHTML = navbar();

//total count
// let totalS=0;
let totalS = JSON.parse(localStorage.getItem("cart"))||[];
document.getElementById("items_count").innerText = totalS.length;