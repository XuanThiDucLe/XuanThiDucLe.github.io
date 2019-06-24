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
    }
}