const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    occupation: "developer",
    nationality: "American",
    city: "New York",
    hobbies: ["reading", "traveling", "photography"],
    languages: ["English", "Spanish"],
    education: {
        degree: "Bachelor",
        major: "computer science",
        university: "Harvard"
    }
};
const {firstName, lastName,education:{degree}, languages: [language]} = person;
let student = {
    firstName,
    lastName,
    degree,
    language
}
console.log(student);