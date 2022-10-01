let loginAccounts=JSON.parse(localStorage.getItem("loginAccounts")) || [];

document.getElementById("backToHome").addEventListener("click",function(){
    window.location = "index.html";
})
document.getElementById("backToSign").addEventListener("click",function(){
    let main=document.getElementById("main");
    let login=document.getElementById("login");
    main.style.display="block";
    login.style.display="none";
})
document.getElementById("goToLoginPage").addEventListener("click",function(){
    let main=document.getElementById("main");
    let login=document.getElementById("login");
    main.style.display="none";
    login.style.display="block";
})
document.getElementById("googleLogin").addEventListener("click",function(){
    window.location.href="https://accounts.google.com/v3/signin/identifier?dsh=S1124100449%3A1664607867601574&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWo9cXIjUm8tQTvumoGCpMMtwFmM457oZOX0hmdpvJcdkQoDLX_nATiFo318c7MyOJGozfT5cw";
})

function checkLoginDetails(phone){
    let count=0;
    let loginData=JSON.parse(localStorage.getItem("loginData")) || {};
    loginAccounts.forEach(function(e,i){
        if(e.phone==phone){
            alert(`Congratulations ${e.name} Login Successfull`);
            loginData=e;
            localStorage.setItem("loginData",JSON.stringify(loginData));
            count++;
            window.location.href="index.html";
        }
    });
    if(count==0){
        let detailsEnter=document.getElementById("detailsEnter");
        let login=document.getElementById("login");
        detailsEnter.style.display="block";
        login.style.display="none";
        document.getElementById("submitName").addEventListener("click",function(){
            let name=document.getElementById("name");
            let emailid=document.getElementById("EmailId");
            if(name.value=="" || emailid.value==""){
                alert("Please Enter Details!!");
            }else{
                loginData["name"]=name.value;
                loginData["email"]=emailid.value;
                loginData["phone"]=phone;
                loginAccounts.push(loginData);
                localStorage.setItem("loginAccounts",JSON.stringify(loginAccounts));
                localStorage.setItem("loginData",JSON.stringify(loginData));
                window.location.href="index.html";
            }
        })
    }
}
document.getElementById("submitLogin").addEventListener("click",function(){
    let phone=document.getElementById("loginId");
    let otp=document.getElementById("loginOtp");
    if(phone.value=="" || otp.value=="" ){
        alert("Fill all the Inputs!!");
    }else if(otp.value=="1234"){
        checkLoginDetails(phone.value);
    }else{
        alert("Please Enter correct OTP!!");
    }
})