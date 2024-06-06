// Destructuring is objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//console.log(course.courseInstructor);

// More efficient way to get value from an object
const {courseInstructor: instructor} = course
console.log(instructor)


// Curly braces dikhe toh samjhna ki desctruturing ho rhi hai.

// const navbar = ({company}) => {

// }
// navbar(company = "JS Limited")

