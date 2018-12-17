
/******************** Fetching Skills & Cloning it to tabs *********************/

"use strict"
function getDataSoft(){
    //fetch("http://tabithabjorkman.com/bifrost_t/json/categories.php")
    fetch("http://tabithabjorkman.com/bifrost_t/json/skills.php")
    .then(res => res.json())
    //.then(showCategories);
    .then(showSkillsSoft);
}
function getDataTech(){
    //fetch("http://tabithabjorkman.com/bifrost_t/json/categories.php")
    fetch("http://tabithabjorkman.com/bifrost_t/json/skills.php")
    .then(res => res.json())
    //.then(showCategories);
    .then(showSkillsTech);
}
function getDataCT(){
    //fetch("http://tabithabjorkman.com/bifrost_t/json/categories.php")
    fetch("http://tabithabjorkman.com/bifrost_t/json/skills.php")
    .then(res => res.json())
    //.then(showCategories);
    .then(showSkillsCT);
}

let SSList = document.querySelector("#SoftSkills");
let TSList = document.querySelector("#TechSkills");
let CTSList = document.querySelector("#CTSkills");
let SSTemplate = document.querySelector("#SSTemplate").content;
let TSTemplate = document.querySelector("#TSTemplate").content;
let CTTemplate = document.querySelector("#CTTemplate").content;
//const catTemp = document.querySelector (".categoryTemplate").content; 

function showSkillsSoft(data){
    //console.log(data);
    data.forEach(function (theSkill) {    
             //console.log('hi there');
             //console.log(theSkill.categories_category_id);

        const clone = SSTemplate.cloneNode(true);

        let cat_id_skill = theSkill.categories_category_id;

        if(cat_id_skill == 1)
        {
          clone.querySelector(".ItemSoftSkill").textContent = theSkill.skills;
        }
        SSList.appendChild(clone);
    });
}
function showSkillsTech(dataTech){
  //console.log(dataTech);
  dataTech.forEach(function (theSkillT) {    
           //console.log('hi there');
           //console.log(theSkill.categories_category_id);

        const clone = TSTemplate.cloneNode(true);

        let cat_id_skill = theSkillT.categories_category_id;

        if(cat_id_skill == 2)
        {
          clone.querySelector(".ItemTechSkill").textContent = theSkillT.skills;
        }
        TSList.appendChild(clone);
  });
}
function showSkillsCT(dataCT){
  //console.log(dataTech);
  dataCT.forEach(function (theSkillCT) {    
           //console.log('hi there');
           //console.log(theSkill.categories_category_id);

        const clone = CTTemplate.cloneNode(true);

        let cat_id_skill = theSkillCT.categories_category_id;

        if(cat_id_skill == 3)
        {
          clone.querySelector(".ItemCTSkill").textContent = theSkillCT.skills;
        }
        CTSList.appendChild(clone);
  });
}
getDataCT();
getDataTech();
getDataSoft(); 
/********************** Tabs on search page ********************/


//THIS IS FOR THE TABS ON THE PAGES WITH LOTS OF TEXT

function openTab(evt, tabInfo) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabInfo).style.display = "block";
  evt.currentTarget.className += " active";
}
if(document.getElementById("defaultOpen")){
  document.getElementById("defaultOpen").click();
}

/************************* Clicking to get skill list items to search window *************************/
document.addEventListener("q", function(event) {
  // The dataTransfer.setData() method sets the data type and the value of the dragged data
  event.dataTransfer.setData("Text", event.target.id);
  
  // Output some text when starting to drag the p element
  //document.getElementById("demo").innerHTML = "Started to drag the p element.";
  
  // Change the opacity of the draggable element
  event.target.style.opacity = "0.5";
});

// While dragging the p element, change the color of the output text
document.addEventListener("drag", function(event) {
  document.getElementById("demo").style.color = "#f83d08";
});

// Output some text when finished dragging the p element and reset the opacity
document.addEventListener("dragend", function(event) {
  document.getElementById("demo").innerHTML = "When you have selected your skills click -";
  event.target.style.opacity = "1";
});
/* Events fired on the drop target */

// When the draggable p element enters the droptarget, change the DIVS's border style
document.addEventListener("dragenter", function(event) {
  if ( event.target.className == "droptarget" ) {
      event.target.style.border = "3px dotted red";
  }
});

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

// When the draggable p element leaves the droptarget, reset the DIVS's border style
document.addEventListener("dragleave", function(event) {
  if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
  }
});

/* On drop - Prevent the browser default handling of the data (default is open as link on drop)
 Reset the color of the output text and DIV's border color
 Get the dragged data with the dataTransfer.getData() method
 The dragged data is the id of the dragged element ("drag1")
 Append the dragged element into the drop element
*/
document.addEventListener("drop", function(event) {
  event.preventDefault();
  if ( event.target.className == "droptarget" ) {
      document.getElementById("demo").style.color = "";
      event.target.style.border = "";
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
  }
});

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
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
    // End if
    if (this.hash !== "#section3") {
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
    } 
  });
});



/******************** Modal *********************/


// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let loginBtn = document.getElementById('loginButton').addEventListener("click", function(){modal.style.display = "block";});

// Get the <span> element that closes the modal
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/* btn.onclick = function() {
  modal.style.display = "block";
} */


function login()
{
  let UserName = document.forms["loginForm"]["userN"].value;
  let Pword = document.forms["loginForm"]["PassW"].value;

  if (UserName == 'CompanyLogin')
  {
      if(Pword == "1234")
      {
        //alert("login successful!");
        window.location.replace("bifrost/company_profile.html");
      }
      else
      {
        alert("Incorrect Username or Password");
      }
  }
  else
  {
    alert("Incorrect Username or Password");
  }
}

/* // When the user clicks on <spanClose> (x), close the modal
spanClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */

