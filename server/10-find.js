const numbers=[1,30,49,29,10,13];
let rta=undefined;
for(number of numbers){
    if(number===230){
    rta=number
    break;
    }

}

console.log('for',rta)

let rta2=numbers.find(item=>item===302)
console.log('find',rta2)

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  let rta3=products.find(item=>item.id==='🍔')
console.log('find',rta3)

let rta4=products.findIndex(item=>item.id==='🍔')
console.log('findIndex',rta4)