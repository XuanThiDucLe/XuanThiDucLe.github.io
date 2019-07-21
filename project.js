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
      //document.getElementById("navbarCol").style.backgroundColor=  "#0F1217";
     // document.getElementById("navbarCol").style.backgroundColor=  "rgba(15, 18, 23, 0.6)";
      document.getElementById("navbarCol").style.backgroundColor=  "rgba(15, 18, 23, 1)";

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

//scroll spy 

$(document).ready(function(){
    
  var getMax = function(){
      return $(document).height() - $(window).height();
  }
  
  var getValue = function(){
      return $(window).scrollTop();
  }
  
  if('max' in document.createElement('progress')){
      // Browser supports progress element
      var progressBar = $('progress');
      
      // Set the Max attr for the first time
      progressBar.attr({ max: getMax() });

      $(document).on('scroll', function(){
          // On scroll only Value attr needs to be calculated
          progressBar.attr({ value: getValue() });
      });
    
      $(window).resize(function(){
          // On resize, both Max/Value attr needs to be calculated
          progressBar.attr({ max: getMax(), value: getValue() });
      });   
  }
  else {
      var progressBar = $('.progress-bar'), 
          max = getMax(), 
          value, width;
      
      var getWidth = function(){
          // Calculate width in percentage
          value = getValue();            
          width = (value/max) * 100;
          width = width + '%';
          return width;
      }
      
      var setWidth = function(){
          progressBar.css({ width: getWidth() });
      }
      
      $(document).on('scroll', setWidth);
      $(window).on('resize', function(){
          // Need to reset the Max attr
          max = getMax();
          setWidth();
      });
  }
});

