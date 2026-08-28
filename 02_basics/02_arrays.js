const marvel = new Array("thor","hulk","ironman");
const dc = new Array("superman","flash","batman");
//marvel.push(dc)
//console.log(marvel);

//const all_heros = dc.concat(marvel)
//console.log(all_heros);


//const all_heros = [...marvel,...dc];
//console.log(all_heros)


const another = [1,3,[4,5,[5,4]]];
const real = another.flat(Infinity)

console.log(real)

console.log(Array.from("Utkarsh"));
console.log(Array.of("100","200","300"));