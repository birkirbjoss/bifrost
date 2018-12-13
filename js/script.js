
/******************** Fetching *********************/

"use strict"

function getData(){
    fetch("http://tabithabjorkman.com/bifrost_t/json/categories.php")
    //fetch("http://tabithabjorkman.com/bifrost_t/json/skills.php")
    .then(res => res.json())
    .then(showCategories);
    //.then(showSkills);
   
}

let list = document.querySelector("#list");
//const catTemp = document.querySelector (".categoryTemplate").content; 
function showCategories(data){
    // console.log(data);

    data.forEach(function (theCat) {    
             console.log('hi there');
        const clone = catTemp.cloneNode(true);
        console.log('hi clone');
        const name = clone.querySelector(".name");
        clone.querySelector(".name").textContent = theCat.category_name;
        console.log('this is a loop');
      
        list.appendChild(clone);
        
    });
}

getData();









/******************** Scrolling to About page *********************/


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "#section2") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



/******************** Modal *********************/


// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("loginButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

