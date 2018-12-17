"use strict";


function getDataResults(){
    fetch("http://tabithabjorkman.com/bifrost_t/json/students.php")
    .then(res => res.json())
    //.then(showCategories);
    .then(showPersonsIcons);
  
}

let searchResult = document.querySelector("#searchResults");
let SearchResultTemplate = document.querySelector("#SearchResultTemplate").content;

 function showPersonsIcons(persData){
    //console.log(persData);
    persData.forEach(function (thePers) {  
        //console.log(thePers.student_id.length);
        const clone = SearchResultTemplate.cloneNode(true);
        //console.log('hi clone');
        clone.querySelector(".persIconImg").textContent = thePers.student_id;
        //console.log('this is a loop');
        searchResult.appendChild(clone);
       
   });
}

getDataResults();