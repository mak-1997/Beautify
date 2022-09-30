import {footer} from "./components/footer.js"
import {inner,navbar} from "./components/navbar.js"
document.querySelector("#footer").innerHTML = footer();


document.querySelector("#inner").innerHTML = inner();
document.querySelector("#nav").innerHTML = navbar();

document.querySelector("#submit").addEventListener("click",function(event){
    event.preventDefault()
        alert("Your order is accepted");
    setTimeout(function(){
        alert("Your order is being Packed");
        },3000);
        
        setTimeout(function(){
            alert("Your order is in transit");
        },6000);
        
        setTimeout(function(){
            alert("Your order is out for delivery");
        },9000);
        setTimeout(function(){
            alert("Order delivered");
            window.location.href="index.html"
        },12000);
})


