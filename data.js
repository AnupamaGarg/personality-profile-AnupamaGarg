const personalityProfile = {
    GeneralProfile: {
        Name: "Anupama Garg",
        Job: "NSS Student",
        Agreewith: [
            " I believe in realistic and practical approch ",
            " I believe in respecting others ideas and beliefs",
            " I believe in Spending time coming up with detail plan"
        ],
        NotAgreewith: [
            "Not Agree that Todo list is not most important, I believe todo list is most important because it helps to organise your actions. ",
            "Not totaly agree that only success broadens learning spectrum instead I believe its failure that causes you to learn from all aspects and hence broadens your learning spectrum",
            ]



    },
    PeopleLikeMe: ["Seema Sharma(friend)",
        "Sulbha Bansal(sister)",
        "Kiran Saini (colleague)",
        "A.L Garg (myFather)"],




    Comunication: [
        "1. I would like to communicate with my little sib the way he/she feels comfortable, like one to one, on slack, through email etc",
        "2. I would like to have efficient , positive and professional communication with instructors whether it is one to one , through group discussion, or via email,slack. etc",
        "3. I would like to communicate with my teammates by listening to them respecting their feelings and have efficient positive communication."

    ]
}










const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(personalityProfile, "personalInfo");

// const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    // const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    // return JSON.parse(databaseString)

// console.log(loadDatabase("personalInfo"));



