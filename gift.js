import {footer} from "./components/footer.js"
import {inner,navbar} from "./components/navbar.js"
document.querySelector("#footer").innerHTML = footer();


document.querySelector("#inner").innerHTML = inner();
document.querySelector("#nav").innerHTML = navbar();

//total count
// let totalS=0;
let total = JSON.parse(localStorage.getItem("cart_total")) || 0;
console.log(typeof(total))
document.getElementById("items_count").innerText = total;

let coupon_applied = JSON.parse(localStorage.getItem("coupon_applied"));
document.querySelector("#btn1").addEventListener("click",()=>{
    // let value = document.querySelector("#btn1").getAttribute("data-value");
    // let type = document.querySelector("#btn1").getAttribute("data-type");
    // console.log(type)
    // console.log(2* value);

    
    if(total >= 1500){
        if(coupon_applied == true){ 
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.7);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}  `);

        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1499.")
    }
})

document.querySelector("#btn2").addEventListener("click",()=>{
    
    
    if(total >= 1600){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.6);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1599.")
    }
})

document.querySelector("#btn3").addEventListener("click",()=>{
    
    
    if(total >= 1200){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = total - 300;
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1199.")
    }
})

document.querySelector("#btn4").addEventListener("click",()=>{
    
    
    if(total >= 7000){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.5);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.6999.")
    }
})

document.querySelector("#btn5").addEventListener("click",()=>{
    
    
    if(total >= 900){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = total - 100;
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.900.")
    }
})

document.querySelector("#btn6").addEventListener("click",()=>{
    
    
    if(total >= 1100){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.9);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1099.")
    }
})

document.querySelector("#btn7").addEventListener("click",()=>{
    
    
    if(total >= 2000){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.9);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1999.")
    }
})

document.querySelector("#btn8").addEventListener("click",()=>{
    
    
    if(total >= 10000){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.4);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.9999.")
    }
})

document.querySelector("#btn9").addEventListener("click",()=>{
    
    
    if(total >= 1500){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.7);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1499.")
    }
})

document.querySelector("#btn10").addEventListener("click",()=>{
    
    
    if(total >= 7000){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.45);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.6999.")
    }
})

document.querySelector("#btn11").addEventListener("click",()=>{
    
    
    if(total >= 1500){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.7);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1499.")
    }
})

document.querySelector("#btn12").addEventListener("click",()=>{
    
    if(total >= 1500){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = total * 0.7;
            let coupon_applied = true;
            localStorage.setItem("cart_total",JSON.stringify(total));
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1499.")
    }
})


let open_page = () =>{
    window.location = "payment.html";
    
}
