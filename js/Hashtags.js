"use strict"

/* 
 * Class for hashtags initialization
 * require(e.js)
 */
class Hashtags {
  
  constructor(parent=document) {
    let articles = e(".hashtags_calculate", parent);
    let self = this;
    for (let article of articles) {
      let hashtags_e = e(".hashtags", article)[0];
      let hashtags = hashtags_e.innerHTML.replace(/#/g,'').split(" ");
      hashtags_e.innerHTML = "";
      for (let hashtag of hashtags) {
        let className = "_hashtag_" + hashtag.toLowerCase();
        article.classList.add(className);
        
        let a = e("+a");
        a.innerHTML = "#" + hashtag + " ";
        a.addEventListener("click", function() {
          self.select_tag(className);
        });
        hashtags_e.appendChild(a);
      }
    }
  }
  
  select_tag(className) {
    /* unmask all */
    let elements = e(".unmask_tag");
    while(elements.length > 0){
      elements[0].classList.remove("unmask_tag");
    }
    
    /* mask tag */
    e("#content").classList.add("mask_tags");
    elements = e("." + className);
    for (let elem of elements) {
      elem.classList.add("unmask_tag");
    }
  }
}
