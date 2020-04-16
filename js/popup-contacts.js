    var link = document.querySelector(".callback");
    var mobilelink = document.querySelector(".callback-mobile");  
    var linkQuestion = document.querySelector(".contacts-btn");
    var question = document.querySelector(".question-popup");    
    var popup = document.querySelector(".modal-content");
    var popupQuestion = document.querySelector(".modal-question");
    var close = popup.querySelector(".modal-close");
    var closeQuestion = popupQuestion.querySelector(".question-close");
    var overlay = document.querySelector(".modal-overlay");
    var form = popup.querySelector("form");


       
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        overlay.classList.add("modal-overlay-show");

      });

      mobilelink.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        overlay.classList.add("modal-overlay-show");

      });    

      linkQuestion.addEventListener("click", function(event) {
        event.preventDefault();
        popupQuestion.classList.add("modal-question-show");
        overlay.classList.add("modal-overlay-show");

      });         



      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error");
      });



      closeQuestion.addEventListener("click", function(event) {
        event.preventDefault();
        popupQuestion.classList.remove("modal-question-show");
        overlay.classList.remove("modal-overlay-show");
        popupQuestion.classList.remove("modal-error");
      });      



      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          popup.classList.remove("modal-content-show");
          overlay.classList.remove("modal-overlay-show");
          popup.classList.remove("modal-error");
        }
        
      });


      overlay.addEventListener("click", function() {
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-content-show");
        popupQuestion.classList.remove("modal-question-show");
      });

  
      



