"use strict"

/* 
 * Class for logo animation initialization
 * require(e.js)
 */
class LogoAnimation {
  
  constructor() {
    let bg_left_e = e("#bg_left");
    let bg_right_e = e("#bg_right");
    let logo_full_e = e("#logo_full");    
    window.addEventListener("mousemove", function(event) {
      let posX = 100-(event.clientX - logo_full_e.offsetLeft)*100/logo_full_e.offsetWidth
      let posY = (event.clientY - logo_full_e.offsetTop)*100/logo_full_e.offsetHeight
      bg_left_e.style.backgroundPosition = posX + "% " + posY + "%"
      bg_right_e.style.backgroundPosition = posX +  "% " + posY + "%"
    });
  }
}
