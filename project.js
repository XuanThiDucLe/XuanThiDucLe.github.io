if (window.matchMedia("(min-width:915px)").matches) {
  window.onload = () => {
   
    window.onscroll = function () { scrollFunction() };
    
    //navbar scroll 
    function scrollFunction() {
      if (document.body.scrollTop > 545 || document.documentElement.scrollTop > 545) {
       // document.getElementsByClassName("fixed-top")[0].style.padding = "-30px";
       document.getElementById("navbarNav").style.marginTop =  "0px";
       document.getElementById("navbarNav2").style.marginTop =  "0px";
       document.getElementById("logo").style.marginTop =  "-15px";
       document.getElementById("logo").style.fontSize =  "26px";
       document.getElementById("navbarCol").style.backgroundColor=  "#0F1217";
       document.getElementById("navbarCol").style.boxShadow= "0px 5px 20px black";
      
       //unten
      } else {
      //  document.getElementsByClassName("fixed-top")[0].style.padding = "300px";
        document.getElementById("navbarNav").style.marginTop =  "0px";
        document.getElementById("navbarNav2").style.marginTop =  "-150px";
        document.getElementById("logo").style.marginTop =  "0px";
        document.getElementById("logo").style.fontSize =  "40px";
        document.getElementById("navbarCol").style.backgroundColor=  "transparent";
        document.getElementById("navbarCol").style.boxShadow=  "none";
    
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