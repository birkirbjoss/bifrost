
/******************** Fetching *********************/

//  "use strict"

// function getData(){
//     fetch("http://tabithabjorkman.com/bifrost_t/json/categories.php")
//     fetch("http://tabithabjorkman.com/bifrost_t/json/skills.php")
//     .then(res => res.json())
//     //.then(showCategories);
//     .then(showSkills);
   
// }

// let SSList = document.querySelector("#SoftSkills");
// let SSTemplate = document.querySelector("#SSTemplate").content;
// //const catTemp = document.querySelector (".categoryTemplate").content; 

// function showSkills(data){
//     console.log(data);
//     data.forEach(function (theSkill) {    
//              //console.log('hi there');
//              console.log(theSkill.categories_category_id);
//         const clone = SSTemplate.cloneNode(true);
//         let cat_id_skill = 
//         //console.log('hi clone');
//         const name = clone.querySelector(".ItemSoftSkill");
//         clone.querySelector(".ItemSoftSkill").textContent = theSkill.categories_category_id[1];

//         //console.log('this is a loop');
      
//         SSList.appendChild(clone);
        
//     });
// }

// getData(); 
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
    console.log(data);
    data.forEach(function (theSkill) {    
             //console.log('hi there');
             //console.log(theSkill.categories_category_id);

        const clone = SSTemplate.cloneNode(true);
        //const clone = TSTemplate.cloneNode(true);

        let cat_id_skill = theSkill.categories_category_id;

        if(cat_id_skill == 1)
        {
          clone.querySelector(".ItemSoftSkill").textContent = theSkill.skills;
          
        }
        SSList.appendChild(clone);
    });
}
function showSkillsTech(dataTech){
  console.log(dataTech);
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

