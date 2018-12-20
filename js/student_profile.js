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
let urlParams = new URLSearchParams(window.location.search);
let user_id = urlParams.get("student_id");
//console.log('profileTemplate');

function showStudent(studData){
    //console.log(studData);
  studData.forEach(function (theStud) {  
      //console.log(theStud);
      if(theStud.student_id == user_id)
      {
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
      }
      
     
 }); 
}

getDataStudents();

/************************** TIMELINE ****************************/
/* 	projects_id 	projects_name 	projects_url 	projects_verify 	projects_grade 	projects_start_date 	projects_end_date 	projects_date_created */

function getProjectsData(){
  fetch("http://tabithabjorkman.com/bifrost_t/json/projects.php")
  .then(res => res.json())
  .then(showProject);
}

const timelineRow = document.querySelector("#hex-text");
const timelineTemplateHex = document.querySelector("#timelineTemplateHex").content;



function showProject(projectData){
  console.log(projectData);
   projectData.forEach(function (theProject, index) {  
      console.log(index);
      const clone = timelineTemplateHex.cloneNode(true);
      let stud_id = theProject.student_id;
      //console.log(stud_id);
      //console.log('hi clone');
      clone.querySelector(".projectLink").href = theProject.projects_url;   
      clone.querySelector(".timeline_text").textContent = theProject.projects_name; 
      clone.querySelector(".date_finished").textContent = theProject.projects_end_date; 

      if(index % 2 == 0)
        {
          //console.log(stud_id);
          //document.querySelector('#hexagon' + index)

        }
      //console.log('this is a loop');
      timelineRow.appendChild(clone); 
 });  
}

getProjectsData();