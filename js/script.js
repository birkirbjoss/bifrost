"use strict"

//this is for student profile page

function getDataStudents(){
  fetch("http://tabithabjorkman.com/bifrost_t/json/students.php")
  .then(res => res.json())
  .then(showStudent);
}

const profileDetail = document.querySelector("#profileInfo");
const profileTemplate = document.querySelector("#profileTemplate").content;
const imagePathBase = "images/student_images/";


function showStudent(studData){
  //console.log(studData);
  studData.forEach(function (theStud) {  
      //console.log('this is working');
      const clone = profileTemplate.cloneNode(true);
      //console.log('hi clone');
      clone.querySelector(".profileImg").src = imagePathBase + theStud.image_file_name;
      clone.querySelector(".education ").textContent = theStud.education + ' ' + theStud.semester;
      clone.querySelector(".name ").textContent = theStud.name;     
      clone.querySelector(".phone ").textContent = theStud.phone;     
      clone.querySelector(".soMeLinks").href = theStud.linked_in_url; 
      clone.querySelector(".portfolio").href = theStud.portfolio_link; 
      clone.querySelector(".school").textContent = theStud.school;       

      //console.log('this is a loop');
      profileDetail.appendChild(clone);
     
 }); 
}

getDataStudents();

/************************** TIMELINE ****************************/
/* 	projects_id 	projects_name 	projects_url 	projects_verify 	projects_grade 	projects_start_date 	projects_end_date 	projects_date_created  
hex_pair">
                                <a class="projectLink" href="">
                                    <div class="hex"><!-- ADD EVEN TO THE HEX CLASS -->
                                        <div class="left"></div>
                                        <div class="middle">
                                            <div class="hex-text">
                                                <h6 class="timeline_text">testing1</h6>
                                                <h6 class="date_finished">20-12-2018</h6>
                                            </div>
                                        </div>
                                        <div class="right
*/

function getProjectsData(){
  fetch("http://tabithabjorkman.com/bifrost_t/json/projects.php")
  .then(res => res.json())
  .then(showProject);
}

const timelineRow = document.querySelector("#hex-text");
const timelineTemplateHex = document.querySelector("#timelineTemplateHex").content;

function showProject(projectData){
  console.log(projectData);
   projectData.forEach(function (theProject) {  
      //console.log('this is working');
      const clone = timelineTemplateHex.cloneNode(true);
      //const pair = document.querySelector(".hex_pair");
      //console.log('hi clone');
      clone.querySelector(".projectLink").href = theProject.projects_url;
      //clone.querySelector(".hex");
      //clone.querySelector(".left ");     
      //clone.querySelector(".middle ");     
      clone.querySelector(".timeline_text").textContent = theProject.projects_name; 
      clone.querySelector(".date_finished").textContent = theProject.projects_end_date; 
      //clone.querySelector(".right");       
      
      //console.log('this is a loop');
      timelineRow.appendChild(clone); 
 });  
}

getProjectsData();

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

let UserName = document.forms["loginForm"]["userN"].value;
let Pword = document.forms["loginForm"]["PassW"].value;

function getUsers(){
    fetch("http://tabithabjorkman.com/bifrost_t/json/login_list.php")
    .then(res => res.json())
    .then(fetchUser);
  } 

function fetchUser(loginData){
  console.log(loginData);
  loginData.forEach(function (userlogin) {
      //console.log(userlogin);
      
        if (UserName == userlogin.user_email)
        {
            if(Pword == userlogin.password)
            {
              //alert("login successful!");
              loginMe = window.location.href = "http://www.w3schools.com"; //just a test url
            }
            else
            {
              //alert("Incorrect Username or Password");
            }
        }
        else
        {
          //alert("Incorrect Username or Password");
        }
      
  });
}
getUsers(); 

// When the user clicks on <spanClose> (x), close the modal
spanClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

