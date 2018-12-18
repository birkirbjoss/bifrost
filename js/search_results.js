/* "use strict";


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
        //console.log('hi clone');
        clone.querySelector(".iconLink").aLink = thePers.student_id;
        clone.querySelector(".persIconImg").textContent = thePers.student_id;
        //console.log('this is a loop');
       /* aLink.addEventListener('click', function ()
        {
            console.log(thePers.student_id);
             menuItem.classList.remove('hidden');
            let itemLink = productLink + menu.id;
            //console.log(itemLink);
            fetch(itemLink).then(function (response)
            {
                return response.json();
            }).then(function (json) {
                return showDetails(json); 
            });*/
        
       /*  searchResult.appendChild(clone);
       
   });
}

getDataResults(); */ 