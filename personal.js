const databaseString = localStorage.getItem("personalInfo")
const data = JSON.parse(databaseString)

var mainInformation = document.querySelector(".showProfile")
let PersonalInfo = data.GeneralProfile
  console.log(PersonalInfo);  
  console.log(data);

  let addPersonalInfo = function(PersonalInfo){

    let myInfo = document.querySelector(".personalInfo").innerHTML = `
    
    <h5 class = "name "><b>Name :    ${PersonalInfo.}</b></h5>
    <h5 class = "job"><b>Job:    ${PersonalInfo.}</b></h5>
 
 
  }
  addPersonalInfo(PersonalInfo);