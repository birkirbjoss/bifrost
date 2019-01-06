"use strict";


function getDataResults(){
    fetch("http://tabithabjorkman.com/bifrost_t/json/students.php")
    .then(res => res.json())
    //.then(showCategories);
    .then(showPersonsIcons);
  
}

let searchResult = document.querySelector("#searchResults");
let SearchResultTemplate = document.querySelector("#SearchResultTemplate").content;
let aLink = document.querySelector(".iconLink");

 function showPersonsIcons(persData){
    console.log(persData);
    persData.forEach(function (thePers) {  
        //console.log(thePers.student_id.length);
        const clone = SearchResultTemplate.cloneNode(true);
        //let iconImg = document.querySelector(".persIconImg");
        clone.querySelector(".iconLink").addEventListener("click",e=>{
            window.location="student_profile_company.html?student_id=" + thePers.student_id
          }) 
        console.log('hi clone');
        clone.querySelector(".iconLink").aLink = thePers.student_id;
        clone.querySelector(".persIconImg").textContent = thePers.student_id;
        
        searchResult.appendChild(clone);
       
   });
}

getDataResults();

/**************************** fetch id for links ***********************/

/* fetch("something").then(res=>res.json()).then(data=>data.forEach(displayStudent))

function displayStudent(student){
  const clone .....
  const.querySe...textContent=student.name
  clone.querySelector(".readmore").addEventListener("click",e=>{
    window.location="subpage.html?student_id="+student.student_id
  })
  somethin.appendChild(clone)
} */

/* //on the subpage
let urlParams = new URLSearchParams(window.location.search);
let userid = urlParams.get("student_id"); */