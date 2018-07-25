const personalityProfile = {
    GeneralProfile: {
        Name: "Anupama Garg",
        Job: "NSS Student",
        Agreewith: [
            "1. extravertive", "2. Absorbent", "3. Assertive"
        ],
        NotAgreewith: [


        ]



    },
    PeopleLikeMe: {
        Name : "Seema",
        Relation: "Friend",
}

    ,
    Comunication: [
        "1.I would like to communicate with my little sib the way he/she feels comfortable like one to one, slack, email etc",
        "2.I like to communicate with instructor one to one , through group discussion, or via email,slack. etc",
        "3.I like to communicate with instructor one to one , through group discussion, or via email,slack. etc"

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
saveDatabase (personalityProfile, "personalInfo");

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
console.log(loadDatabase("personalInfo"));



