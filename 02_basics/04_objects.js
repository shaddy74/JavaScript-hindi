const tinderUser = new Object() // Singleton Object
// const tinderUser = {}    // Non-Singleton Object

tinderUser.id = "abc123"
tinderUser.name = "shaddy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)



const regularUser = {
    email: "sadab@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sadab",
            lastname: "Alam"
        }

    }
}

//console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1: "a",2: "b",}
const obj2 = {3: "c", 4: "d",}

//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "sgay@gmail.com",
    },
    {
        id: 1,
        email: "sgay@gmail.com",
    },
    {
        id: 1,
        email: "sgay@gmail.com",
    }
]
//console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   // Important
// console.log(Object.values(tinderUser));   // Important
// console.log(Object.entries(tinderUser));   // Important


//console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructure: "sadab"
}
// console.log(course.courseInstructure);

const {courseInstructure: instructure} = course

//console.log(courseInstructure);
console.log(instructure)


// {
//     name: "shadab",
//     course: "free",
//     coursename: "js in hindi"
// }




