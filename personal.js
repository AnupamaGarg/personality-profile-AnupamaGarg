const databaseString = localStorage.getItem("personalInfo")
const data = JSON.parse(databaseString)

var mainInformation = document.querySelector(".showProfile")
// let PersonalInfo = data.GeneralProfile
// console.log(PersonalInfo);
// console.log(data);

// let addPersonalInfo = function (PersonalInfo) {

//     let myInfo = document.querySelector(".personalInfo").innerHTML =

//         `<h5 class = "name"><b>Name:    ${PersonalInfo.Name}</b></h5>`
//             `<h5  class = "job" ><b>Job:    ${PersonalInfo.Job}</b></h5>`
//             `<h4 ><b> Agree With</b> </h4> <ul class = "AgreeWithList"></ul>`
//     for (let i = 0; i< PersonalInfo.Agreewith.length; i++) {
//         const currentValue = PersonalInfo.Agreewith[i];
//         document.querySelector(".AgreeWithList").innerHTML += `<li> <b>${currentValue}</b></li>`
//     }
//     `<h4 ><b> Not Agree With</b> </h4> <ul class = " NotAgreeWithList"></ul>`
//     for (let y = 0; y < PersonalInfo.NotAgreewith.length; y++) {
//         const current2Value = PersonalInfo.NotAgreewith[y];
//         document.querySelector(".AgreeWithList").innerHTML += `<li> <b>${current2Value}</b></li>`

//     }
// }
// addPersonalInfo(PersonalInfo);
// -------------------------------------------------------------
// let AlikePeople = data. PeopleLikeMe ;
// let addAlikePeople = function (AlikePeople) {

//     let myAlike = document.querySelector(".alikePeople").innerHTML =
//         `<h4 ><b> People like Me</b> </h4> <ul class = "alikeList"></ul>`
//     for (let i = 0; i < AlikePeople.PeopleLikeMe.length; i++) {
//         const currentPerson = AlikePeople.PeopleLikeMe[i];
//         document.querySelector(".alikePeople").innerHTML += `<li> <b>${currentPerson}</b></li>`

//     }
// }
// addAlikePeople(AlikePeople);

// --------------------------------------------------------------
let ComunicatePreference = data.Comunication ;
let addComunication = function () {

    let comPreference = document.querySelector(".comunicateHTML").innerHTML =
        `<h4 ><b> Comunication</b> </h4> <ul class = "comList"></ul>`
    for (let i = 0; i < ComunicatePreference.Comunication.length; i++) {
        const currentCom = ComunicatePreference.Comunication[i];
        document.querySelector(".comList").innerHTML += `<li> <b>${currentCom}</b></li>`
    }
}
addComunication(ComunicatePreference)

