import {footer} from "./components/footer.js"
import {inner,navbar} from "./components/navbar.js"
document.querySelector("#footer").innerHTML = footer();


document.querySelector("#inner").innerHTML = inner();
document.querySelector("#nav").innerHTML = navbar();
let cart_total = JSON.parse(localStorage.getItem("cart_total"))
document.querySelector("#items_count").innerText = cart_total;
document.querySelector("#submit").addEventListener("click",function(event){
    event.preventDefault()
        alert("Your order is accepted");
        setTimeout(function(){
        alert("Thank you for shopping with us. Your order is being Packed and will be delivered shortly");
        },3000);
        
        // setTimeout(function(){
        //     alert("Your order is in transit");
        // },3000);
        
        // setTimeout(function(){
        //     alert("Your order is out for delivery");
        // },9000);
        // setTimeout(function(){
        //     alert("Order delivered");
        //     window.location.href="index.html"
        // },12000);
})


