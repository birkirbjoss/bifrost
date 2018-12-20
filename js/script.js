"use strict"

//this is for student profile page

function getDataStudents(){
  fetch("http://tabithabjorkman.com/bifrost_t/json/students.php")
  .then(res => res.json())
  .then(showStudent);
}

const profileDetail = document.querySelector("#profileInfo");
//const profileTemplate = document.querySelector("#profileTemplate").content; 
const imagePathBase = "images/student_images/";
let urlParams = new URLSearchParams(window.location.search);
let user_id = urlParams.get("student_id");
//console.log('profileTemplate');

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

//getDataStudents();

/************************** TIMELINE ****************************/
/* 	projects_id 	projects_name 	projects_url 	projects_verify 	projects_grade 	projects_start_date 	projects_end_date 	projects_date_created */

function getProjectsData(){
  fetch("http://tabithabjorkman.com/bifrost_t/json/projects.php")
  .then(res => res.json())
  .then(showProject);
}

const timelineRow = document.querySelector("#hex-text");
//const timelineTemplateHex = document.querySelector("#timelineTemplateHex").content;

function showProject(projectData){
  console.log(projectData);
   projectData.forEach(function (theProject) {  
      //console.log('this is working');
      const clone = timelineTemplateHex.cloneNode(true);
      let stud_id = theProject.student_id;
      //console.log(stud_id);
      //console.log('hi clone');
      clone.querySelector(".projectLink").href = theProject.projects_url;   
      clone.querySelector(".timeline_text").textContent = theProject.projects_name; 
      clone.querySelector(".date_finished").textContent = theProject.projects_end_date;       
      if(stud_id == 2)
        {
          console.log(stud_id);
          timelineRow.appendChild(clone); 
        }
      //console.log('this is a loop');
      
 });  
}

//getProjectsData();

/**************************** fetch id for links ***********************/

/* fetch("something").then(res=>res.json()).then(data=>data.forEach(displayStudent))

function displayStudent(student){
  const clone .....
  const.querySe...textContent=student.name
  clone.querySelector(".readmore").addEventListener("click",e=>{
    window.location="subpage.html?student_id="+student.student_id
  })
  somethin.appendChild(clone)
}

//on the subpage
let urlParams = new URLSearchParams(window.location.search);
let userid = urlParams.get("student_id");
 */
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
let loginBtn = document.getElementById('loginButton');

// Get the <span> element that closes the modal
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
  modal.style.display = "block";
  loginBtn.getUsers();
} 

let UserName = document.forms["loginForm"]["userN"].value;
let Pword = document.forms["loginForm"]["PassW"].value;
let user_id = userlogin.login_id;

function getUsers(){
    fetch("http://tabithabjorkman.com/bifrost_t/json/login_list.php")
    .then(res => res.json())
    .then(fetchUser);
  } 


function fetchUser(loginData){
  console.log(loginData);
  loginData.forEach(function (userlogin) {
      console.log(userlogin);
      let studentProfilePage = "http://127.0.0.1:5500/bifrost/student_profile.html";
      let CompanyProfilePage = "http://127.0.0.1:5500/bifrost/company_profile.html";
      
      //let Submit = document.getElementsByName('submit');
      let CompanyUser = userlogin.user_role_id;
      let StudentUser = userlogin.user_role_id;
      //console.log(CompanyUser, StudentUser);
      
      if(CompanyUser)
      {
        //window.location.href = CompanyProfilePage ;
        console.log('logged in');
      }
      else if(StudentUser)
      {
        //window.location.href = studentProfilePage;
        console.log('bugs');
      }
  });
}
document.getElementsByName("submit").addEventListener("click", getUsers()); 



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



var email_action = "https://ox.hosteurope.de/ajax/login?action=formlogin&authId=";
var email_onsubmit = "this.action += uuid();";
var email_user = "login";
var email_password = "password";

function elearning() {
  document.getElementById("sidebar_login").action = elearning_action;
  document.getElementById("user").name = elearning_user;
  document.getElementById("password").name = elearning_password;
  document.getElementById("sidebar_login").setAttribute('onsubmit', '');
  document.forms['sidebar_login'].submit();
}
function sus() {
  document.getElementById("sidebar_login").action =sus_action;
  document.getElementById("user").name = sus_user;
  document.getElementById("password").name = sus_password;
  document.getElementById("sidebar_login").setAttribute('onsubmit', '');
  document.forms['sidebar_login'].submit();
}
function email() {
  document.getElementById("sidebar_login").action = email_action;
  document.getElementById("sidebar_login").setAttribute('onsubmit', email_onsubmit);
  document.getElementById("user").name = email_user;
  document.getElementById("password").name = email_password;
  document.forms['sidebar_login'].submit();
}