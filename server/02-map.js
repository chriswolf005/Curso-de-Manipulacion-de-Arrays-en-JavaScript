const letters=['a','b','c'];

const newArray=  letters.map(item=> item + "++")

/* const newArray=[];
for(letter of letters){
    const element=letter;
    newArray.push(element +"++");
} */

console.log('Original ',letters);
console.log('Nuevo '+newArray);