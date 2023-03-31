let pets=['cat','dog','bat'];
let includeInArray=false;
for(let pet of pets){
    if(pet==='horse'){
        includeInArray=true;
        break;
    }
}
console.log('for',includeInArray);

let rta=pets.includes('dog')
console.log('includes',rta)

