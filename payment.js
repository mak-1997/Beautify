import { footer } from "./components/footer.js";
import { inner, navbar } from "./components/navbar.js";
document.querySelector("#footer").innerHTML = footer();

document.querySelector("#inner").innerHTML = inner();
document.querySelector("#nav").innerHTML = navbar();
let cart_total = JSON.parse(localStorage.getItem("cart_total"));
document.querySelector("#items_count").innerText = cart_total;
document.querySelector("#submit").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Your order is accepted");
  
  let coupon_applied = false;
  localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
  cart_total = 0;
  document.querySelector("#items_count").innerText = cart_total;
  localStorage.setItem("cart_total", JSON.stringify(cart_total));
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.length = 0;
  localStorage.setItem("cart", JSON.stringify(cart));

  setTimeout(function () {
    alert("Thank you for shopping with us. Your order is being Packed and will be delivered shortly.");
    window.location = "index.html";
  }, 3000);
});



//-----------------Navbar Username Display ------------------

let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

if(isLoggedIn == true){
    let loginDb = JSON.parse(localStorage.getItem("loginData"));
  console.log(loginDb);
  
 
  
  document.querySelector("#username").innerText = "Hello, " + loginDb.name;
  document.querySelector("#username1").addEventListener("click",()=>{
    isLoggedIn = false;
    let cart_items = JSON.parse(localStorage.getItem("cart_total"));
        cart_items = 0;
        localStorage.setItem("cart_total",JSON.stringify(cart_items));
    let coupon_applied = JSON.parse(localStorage.getItem("coupon_applied"));
    coupon_applied = false;
    localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
    localStorage.setItem("isLoggedIn",JSON.stringify(isLoggedIn));
    document.location.reload();
  })
}
else{
    document.querySelector("#username").addEventListener("click",()=>{
        
        window.location = "signup.html";
    })
}