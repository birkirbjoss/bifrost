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
    //console.log(persData);
    persData.forEach(function (thePers) {  
        //console.log(thePers.student_id.length);
        const clone = SearchResultTemplate.cloneNode(true);
        let iconImg = document.querySelector(".persIconImg");

        //console.log('hi clone');
        clone.querySelector(".iconLink").aLink = thePers.student_id;
        clone.querySelector(".persIconImg").textContent = thePers.student_id;
        
        searchResult.appendChild(clone);

        if(aLink == 'selected') // SHOWS THAT ITEM HAS BEEN SELECTED
        {
            iconImg.classList.add('active');
        }
       
   });
}

getDataResults();
