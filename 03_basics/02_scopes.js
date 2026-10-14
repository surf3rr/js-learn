// var c = 200;



if (true){
    let a = 10;
    const b = 20;
    var c = 30
}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = 'surf3r';

    function two(){
        const website = 'surf3r.dev';
        console.log(username)
    }
    // console.log(website);
    
    two();
}
one();



//----------------- declaration -----------------------
console.log(addone(5));

function addone(num){
    return num + 1;
}

// console.log(addtwo(6));

const addtwo = function(num){
    return num +2;

}
console.log(addtwo(6));