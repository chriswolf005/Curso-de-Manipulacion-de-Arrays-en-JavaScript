const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const newArray= [...numbers1];
for(num of numbers2){
    newArray.push(num)
}

const rta=numbers1.concat(numbers2)
const rta2=[...numbers1,...numbers2]
console.log('...',rta2)
console.log('concat',rta)

console.log('for',newArray)