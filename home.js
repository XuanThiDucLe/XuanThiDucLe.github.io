console.log("hello world");

console.log(window);

var texte = [{ titel: "Projekt1", text: "Text zu Projekt 1" }, { titel: "Projekt2", text: "Text zu Projekt 2" }, { titel: "Projekt3", text: "Text zu Projekt 3" }]

if (window.matchMedia("(min-width:700px)").matches) {
    window.onload = () => {
        
        for (let i = 0; i < texte.length; i++) {
            let ele = "projekt" + (i + 1);
            let pic = "url('bild" + (i + 2) + ".jpg')";
            let proj = document.getElementById(ele);
            let homeText = document.getElementById("homeText");
            let notActive = "white";
            let active = { border: "yellow", background: "yellow" };
            let oldhomeText = homeText.cloneNode(true);
            console.log(ele);
            console.log(texte[i].titel);
            

            var oldColor = document.body.style.background;

            proj.addEventListener("mouseover", () => {
                proj.style.borderColor = active.border;
                proj.style.background = active.background;
                proj.style.color = "#242e37";
                console.log(pic)
                document.body.style.backgroundImage = pic;
                homeText.children[0].textContent = texte[i].titel;
                homeText.children[1].textContent = texte[i].text;

            });

            proj.addEventListener("mouseout", () => {
                homeText.children[0].textContent = oldhomeText.children[0].textContent;
                homeText.children[1].textContent = oldhomeText.children[1].textContent;

                proj.style.background = oldColor;
                proj.style.borderColor = notActive;
                proj.style.color = notActive;

                document.body.style.background = oldColor;
                //console.log(oldhomeText.children[0].textContent);


            });
        }

    }

}




