function toggleMenu() {
      let menu = document.getElementById("menu");
      if (menu.style.left === "0px") {
        menu.style.left = "-100%"; // Close menu
      } else {
        menu.style.left = "0px";
        
        // Open menu
      }
    }
    
     function scrollLeft() {
       document.querySelector(".navbar").scrollBy({ left: -200, behavior: "smooth" });
     }
     
     function scrollRight() {
       document.querySelector(".navbar").scrollBy({ left: 100, behavior: "smooth" });
     }
     function LearnEnglish(){
       window.location.href ="view.html";
     }
     function LearnHtml(){
       window.location.href ="html_sillyabus.html";
     }
     function LearnCss() {
  window.location.href = "https://www.tpointtech.com/css-tutorial";
}

function LearnJs() {
  window.location.href = "https://javascript.info/intro";
}

function LearnPython() {
  window.location.href = "https://www.tpointtech.com/python-tutorial";
}

function LearnJava() {
  window.location.href = "https://www.w3schools.com/java/default.asp";
}
function GoToHome(){
  window.location.href ="index.html";
}
function Next(){
  window.location.href ="Basic_Html_Tags.html";
}
function introduction_to_html(){
  window.location.href ="Introduction_to_HTML.html";
}

