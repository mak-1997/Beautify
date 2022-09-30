export let show_alert = () => {
    console.log("yes")
    let email = document.querySelector("#email_input").value;

    if(email.includes("@") && email.includes(".com") ){
        alert("Thanks for subscribing");
    }
    else{
        alert("Please enter a valid email !!")
    }
}