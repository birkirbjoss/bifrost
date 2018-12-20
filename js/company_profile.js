"use strict"
// this is for company profile page
function getDataCompanies(){
  fetch("http://tabithabjorkman.com/bifrost_t/json/company_profile.php")
  .then(result => result.json())
  .then(showCompany)
}

const companyDetail = document.querySelector("#companyProfile");
const companyTemplate = document.querySelector("#CompanyTemplate").content;
let urlParams = new URLSearchParams(window.location.search);
let user_id = urlParams.get("company_id");

function showCompany(compData){
  console.log(compData);
  compData.forEach(function (theCompany) {  
    if(theCompany.company_id == user_id)
    {
      console.log('this is working');
      const clone = companyTemplate.cloneNode(true);
      //console.log('hi clone');
      clone.querySelector(".comp_name").textContent = theCompany.company_name;
      clone.querySelector(".contactPerson ").textContent = theCompany.contact_person_name;
      clone.querySelector(".contactJobTitle ").textContent = theCompany.contact_job_title;     
      clone.querySelector(".contactPersonEmail ").textContent = theCompany.contact_email;     
      clone.querySelector(".contactPersonPhone").textContent = theCompany.contact_phone; 
      clone.querySelector(".industry").textContent = theCompany.industry; 
      clone.querySelector(".number_of_employees").textContent = theCompany.number_of_employees;       
      clone.querySelector(".cvr_number").textContent = theCompany.cvr;       
      clone.querySelector(".st_address").textContent = theCompany.street_address;       
      clone.querySelector(".post_code").textContent = theCompany.post_code;       
      clone.querySelector(".city").textContent = theCompany.city;     
      clone.querySelector(".sub_type").textContent = theCompany.subscription_type;      

    
      companyDetail.appendChild(clone);
      //console.log('this is a loop');
    }
      
 }); 
}
getDataCompanies();
