console.log("hello world");

console.log(window);
if (window.matchMedia("(min-width:700px)").matches) {
    window.onload = () => {
        var proj1 = document.getElementById("projekt1");
        var homeText =  document.getElementById("homeText");

        var oldbackColor = document.body.style.background;

        proj1.addEventListener("mouseover", () => { 
            proj1.style.color = "#242e37";
            proj1.style.background = "yellow";
            
            console.log(homeText.children);
            homeText.children[0].textContent="Projekt 1";
            homeText.children[1].textContent="Stuff zum Projekt";
           // proj1.innerText="holla"
            document.body.style.backgroundImage = "url('bild2.jpg')"; });
        proj1.addEventListener("mouseout", () => { 
            proj1.style.background = oldbackColor;
            document.body.style.background = oldColor; });
    }
}




