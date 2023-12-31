let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
// Task 1
const rating = courses.filter(rate => rate.rating >= 4);

// Task 2
const rating1 = courses.filter(rate => rate.rating < 4)
    .map(rate => `<${rate.id}> - <${rate.title}> - <${rate.rating}>`);
console.log(rating);
console.log(rating1);

// Task 3
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];

const result = [...courses, ...addedCourses];
console.log(result);