const alertText=document.querySelector(".alert-info");
document.querySelector(".contactform").addEventListener("click",(e)=>{
    alertText.textContent="I'm currently reworking my portfolio, if you really need to contact me, use any of the social media linked. Sorry!";
    alertText.style.backgroundColor="#f4cdcd";
    alertText.style.borderColor="#edb8b8";
},true);