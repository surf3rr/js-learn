const tinderuser = {};
tinderuser.id ="123"
tinderuser.age = 19
tinderuser.name = "garvit"

//console.log(tinderuser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Utkarsh",
            lastname: "Singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2};

//const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2}

//console.log(obj3)

//console.log(tinderuser);
//console.log(Object.values(tinderuser))
//console.log(Object.entries(tinderuser))

//console.log(tinderuser.hasOwnProperty('age'));

const course = {
    name: "js in hindi",
    price: "999",
    courseLearner: "Utkarsh",

}

const {courseLearner} = course;

const {courseLearner : inst} = course;

console.log(inst);

/*{
    "name": "Utkarsh",
    "age": "19",
}
*/