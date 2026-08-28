//singleton

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Utkarsh",
    age: "19",
    course: "B.Tech",
    mySym : "mykey1"
}

//console.log(JsUser["age"])

//const mySym = Symbol("key1")

//console.log(JsUser[mySym]);

JsUser.age=20;
//console.log(JsUser.age);

//Object.freeze(JsUser);

JsUser.age = 21;

//console.log(JsUser);

JsUser.greetings = function(){
    console.log(`Hello JsUser ${JsUser.name}`);
}

console.log(JsUser.greetings);