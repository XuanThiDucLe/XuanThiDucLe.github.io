console.log("hello world")

var proj1=document.getElementById("projekt1");

var oldColor=document.body.style.background;
proj1.addEventListener("mouseover", ()=>{document.body.style.backgroundImage = "url('bild2.jpg')";});
proj1.addEventListener("mouseout", ()=>{document.body.style.background = oldColor;});