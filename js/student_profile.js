"use strict"

//this is for student profile page
//fetching data from students
function getDataStudents(){
  fetch("http://tabithabjorkman.com/bifrost_t/json/students.php")
  .then(res => res.json())
  .then(showStudent);
}

const profileDetail = document.querySelector("#profileInfo");
const imagePathBase = "images/student_images/";
const S_Skills = document.querySelector("#SoftSkills");
const S_SkillsTemp = document.querySelector("#SSTemplate").content;
const T_Skills = document.querySelector("#TechSkills");
const T_SkillsTemp = document.querySelector("#TSTemplate").content;
const CT_Skills = document.querySelector("#CTSkills");
const CT_Skills_Temp = document.querySelector("#CTTemplate").content;
const LangSkills = document.querySelector("#language");
//links to url params 
//let urlParams = new URLSearchParams(window.location.search);
//let user_id = urlParams.get("student_id");

function showStudent(studData){
    //console.log(studData);
  studData.forEach(function (theStud) {  
        //console.log(theStud);
        //const clone = profileTemplate.cloneNode(true);
        const cloneSSkills = S_SkillsTemp.cloneNode(true);
        const cloneTSkills = T_SkillsTemp.cloneNode(true);
        const cloneCTSkills = CT_Skills_Temp.cloneNode(true);
        let cat_id_skill = theStud.category_id;
        //let stud_id = theStud.student_id;
        
        //clone only on profile, cloned according to how many there are
          //console.log('hi clone');
        profileDetail.querySelector(".profileImg").src = imagePathBase + theStud.image_file_name;
        profileDetail.querySelector(".education ").textContent = theStud.education;
        profileDetail.querySelector(".grad_date ").textContent = theStud.semester;
        profileDetail.querySelector(".name ").textContent = theStud.name;     
        profileDetail.querySelector(".phone ").textContent = theStud.phone;     
        profileDetail.querySelector(".soMeLinks").href = theStud.linked_in_url; 
        profileDetail.querySelector(".portfolio").href = theStud.portfolio_link; 
        profileDetail.querySelector(".school").textContent = theStud.school;
        LangSkills.querySelector(".languages").textContent = 'Language(s): ' + theStud.languages;

        //check if skills belong to certain categories, then clone
        if(cat_id_skill == 1)
        {
          cloneSSkills.querySelector(".ItemSoftSkill").textContent = theStud.skills;
        }
        if(cat_id_skill == 2)
        {
          cloneTSkills.querySelector(".ItemTechSkill").textContent = theStud.skills;
        }
        if(cat_id_skill == 3)
        {
          cloneCTSkills.querySelector(".ItemCTSkill").textContent = theStud.skills;
        }
        
        console.log('this is a loop');
        //multiple clones in one function!
        S_Skills.appendChild(cloneSSkills);
        T_Skills.appendChild(cloneTSkills);
        CT_Skills.appendChild(cloneCTSkills);
       
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
  //console.log(projectData);
   projectData.forEach(function (theProject, index) {  
      //console.log(index);
      const clone = timelineTemplateHex.cloneNode(true);
      let stud_id = theProject.student_id;
      //console.log('hi clone');
      clone.querySelector(".projectLink").href = theProject.projects_url;   
      clone.querySelector(".timeline_text").textContent = theProject.projects_name; 
      clone.querySelector(".date_finished").textContent = theProject.projects_end_date; 

      if(index % 2 == 0)
        {
          console.log(stud_id);
          //document.querySelector(".timeline_text").classList.remove('marginTop');
        }
      //console.log('this is a loop');
      timelineRow.appendChild(clone); 
 });  
}

getProjectsData();


/**************************** gold star **************************/

let addFav = document.querySelector('#addToFavorites');

addFav.addEventListener('click', function () {
  goldStar();
});

function goldStar()
{
  let star = document.getElementById('star');
  console.log('gold star');
  star.classList.add('goldColor');
}
function goldStarRemove()
{
  let star = document.getElementById('star');
  console.log('gold star remove');
  star.classList.remove('goldColor');
}