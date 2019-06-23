if (window.matchMedia("(min-width:915px)").matches) {
  window.onload = () => {
    console.log("stuff");

    let mail = document.getElementById("mail");
    let mfont = document.getElementById("mailfont");
    let notActive = "white";
    let active = { border: "#FFD74A", background: "#FFD74A" };
    let oldColor = "#0F1217";

    mail.addEventListener("mouseover", () => {
        mail.style.borderColor = active.border;
        mail.style.background = active.background;
        mfont.style.color = oldColor;
    });
    mail.addEventListener("mouseout", () => {
        mail.style.background = oldColor;
        mail.style.borderColor = notActive;
        mfont.style.color = notActive;
    });

    window.onscroll = function () { scrollFunction() };
    
    //navbar scroll 
    function scrollFunction() {
      if (document.body.scrollTop > 545 || document.documentElement.scrollTop > 545) {
       // document.getElementsByClassName("fixed-top")[0].style.padding = "-30px";
       document.getElementById("navbarNav").style.marginTop =  "0px";
       document.getElementById("navbarNav2").style.marginTop =  "0px";
       document.getElementById("logo").style.marginTop =  "-15px";
       document.getElementById("logo").style.fontSize =  "26px";
       document.getElementById("navbarCol").style.backgroundColor=  "#242E37";
      
       //unten
      } else {
      //  document.getElementsByClassName("fixed-top")[0].style.padding = "300px";
        document.getElementById("navbarNav").style.marginTop =  "0px";
        document.getElementById("navbarNav2").style.marginTop =  "-150px";
        document.getElementById("logo").style.marginTop =  "0px";
        document.getElementById("logo").style.fontSize =  "40px";
        document.getElementById("navbarCol").style.backgroundColor=  "transparent";
    
        //oben 
      }
    }

    

  }
}else{
  window.onload = () => {
    document.getElementsByClassName("navbar")[0].classList.remove("fixed-top");


  }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}











}