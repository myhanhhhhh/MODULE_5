let getInfo = ({ firstName = "Quân", degree = "NA" }) => {
    console.log(`First Name: ${firstName}`);
    console.log(`Degree: ${degree}`);
};

const student1 = {
    firstName: 'John',
    degree: 'Bachelor',
    gender: 'male',
    english: "English"
};

const student2 = {
    name: 'John',
    gender: 'male',
    english: "English"
};
getInfo(student1);
getInfo(student2);
