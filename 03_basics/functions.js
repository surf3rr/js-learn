function addtwonum(val1, val2,...a){
    //c = a;
    console.log(a)

}

//a = (5,10,15);
//b = 5;

///addtwonum(5,10,15);


const user = {
    username : "utkarsh",
    prices : 999,
}

function handleObject(anyObj){
    console.log(`My Username is ${anyObj.username} and price is ${anyObj.price}`);
}

//handleObject(user);

handleObject({
    username : 'surf3r',
    price: 19
});

const newarr = [200, 300, 400, 500]

function returnSecondvalue(getSArr){
    return getSArr[1];
}

console.log(returnSecondvalue(newarr));