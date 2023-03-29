const numbers=[1,30,39,29,10,13]

let rta=true;
for(num of numbers){
    if(num>=40){
        rta=false
    }
}

console.log('for',rta);

 let rta2= numbers.every(item=> item <=40)
 console.log(rta2)

 const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  let rta3=team.every(item=>item.age>15)
  console.log(rta3)