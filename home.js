console.log("hello world");

console.log(window);


if (window.matchMedia("(min-width:700px)").matches) {
    window.onload = () => {

        var proj1 = document.getElementById("projekt1");
        var proj2 = document.getElementById("projekt2");
        var proj3 = document.getElementById("projekt3");
        var homeText = document.getElementById("homeText");
        let notActive = "white";
        var active = {border:"yellow", background:"yellow"};

        var oldhomeText = homeText.cloneNode(true);
        
        


        var oldColor = document.body.style.background;
        proj1.addEventListener("mouseover", () => {
            proj1.style.borderColor = active.border;
            proj1.style.background = active.background;
            proj1.style.color = "#242e37";
           
            document.body.style.backgroundImage = "url('bild2.jpg')";
            homeText.children[0].textContent = "Projekt 1";
            homeText.children[1].textContent = "Stuff zum Projekt";
            
        });
        
        proj1.addEventListener("mouseout", () => {
            homeText.children[0].textContent = oldhomeText.children[0].textContent;
            homeText.children[1].textContent = oldhomeText.children[1].textContent;

            proj1.style.background = oldColor;
            proj1.style.borderColor = notActive;
            proj1.style.color =notActive;

            document.body.style.background = oldColor;
            console.log(oldhomeText.children[0].textContent);
            

        });

        proj2.addEventListener("mouseover", () => {
            proj2.style.borderColor = active.border;
            proj2.style.background = active.background;
            proj2.style.color = "#242e37";
          
            homeText.children[0].textContent = "Projekt 2";
            homeText.children[1].textContent = "Stuff zum Projekt zu stuff 2 ";
            document.body.style.backgroundImage = "url('bild3.jpg')";
        });

        proj2.addEventListener("mouseout", () => {
            proj1.style.borderColor = notActive;
            proj2.style.color = notActive;
            proj2.style.background = oldColor;
            
            document.body.style.background = oldColor;
        });

        proj3.addEventListener("mouseover", () => {
            proj3.style.borderColor = active.border;
            proj3.style.background = active.background;
            proj3.style.color = "#242e37";
            
            homeText.children[0].textContent = "Projekt 3";
            homeText.children[1].textContent = "Stuff zum Projekt zu stuff 3 lalalala ";
            document.body.style.backgroundImage = "url('bild4.jpg')";
        });


        proj3.addEventListener("mouseout", () => {
            proj3.style.background = oldColor;
            proj3.style.color = "white";
            document.body.style.background = oldColor;
        });
    }

}




