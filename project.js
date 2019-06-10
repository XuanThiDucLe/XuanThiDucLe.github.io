if (window.matchMedia("(min-width:915px)").matches) {
  window.onload = () => {

    window.onscroll = function () { scrollFunction() };
    
    //navbar scroll 
    function scrollFunction() {
      if (document.body.scrollTop > 545 || document.documentElement.scrollTop > 545) {
       // document.getElementsByClassName("fixed-top")[0].style.padding = "-30px";
       document.getElementById("navbarNav").style.marginTop =  "-30px";
       document.getElementById("logo").style.marginTop =  "-30px";

        //unten
      } else {
      //  document.getElementsByClassName("fixed-top")[0].style.padding = "300px";
        document.getElementById("navbarNav").style.marginTop =  "0px";
        document.getElementById("logo").style.marginTop =  "0px";
    
        //oben 
      }
    }

  }
}else{
  window.onload = () => {
    document.getElementsByClassName("navbar")[0].classList.remove("fixed-top");


  }


}