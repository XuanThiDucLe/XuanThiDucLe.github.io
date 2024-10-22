var texte = [
    { titel: "novo", text: "Ein personalisierter Freizeit-Routenplaner. Dieser Routenplaner integriert Ladestationen in die Route, sofern der E-Bike oder Pedelec Akku nicht ausreicht, um das Ziel zu erreichen." },
    { titel: "blob", text: "Ein interaktiver Spiegel welcher den Betrachter als Luftblasen in eine Unterwasserwelt eintauchen lässt. " },
    { titel: "Prototyping Lab", text: "Wie sieht das perfekte IoT Prototyping Lab aus? Dieser Frage gehen wir mit Hilfe von Design Thinking nach.  " },
    { titel: "Bachelor thesis", text: "Coming soon - Mit der Bachelorarbeit kommt auch ein Redesign des Portofiols" }
]
//test

if (window.matchMedia("(min-width:915px)").matches) {
    window.onload = () => {

        for (let i = 0; i < texte.length; i++) {
            let ele = "projekt" + (i + 1);
            let pic = "url('bild" + (i + 2) + ".jpg')";
            let proj = document.getElementById(ele);
            let homeText = document.getElementById("homeText");
            let notActive = "white";
            let active = { border: "#FFD74A", background: "#FFD74A" };
            let oldhomeText = homeText.cloneNode(true);
            console.log(ele);
            console.log(texte[i].titel);

            projekt1= document.getElementById(projekt1);
            // let oldColor = document.getElementById("background").style.backgroundImage;
            let oldColor = "#0F1217";

            proj.addEventListener("mouseover", () => {
                proj.style.borderColor = active.border;
                proj.style.background = active.background;
                proj.style.color = "#0F1217";
                document.getElementById("background").style.backgroundImage = pic;
                document.getElementById("background").style.opacity = 0.2;
                homeText.children[0].textContent = texte[i].titel;
                homeText.children[1].textContent = texte[i].text;
            });

            proj.addEventListener("mouseout", () => {
                homeText.children[0].textContent = oldhomeText.children[0].textContent;
                homeText.children[1].textContent = oldhomeText.children[1].textContent;

                proj.style.background = oldColor;
                proj.style.borderColor = notActive;
                proj.style.color = notActive;
                document.getElementById("background").style.opacity = 0.0;
                //console.log(oldhomeText.children[0].textContent);
            });
        }


    }

}




