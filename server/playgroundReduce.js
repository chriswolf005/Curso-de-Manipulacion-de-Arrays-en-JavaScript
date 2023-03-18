const numbers=[1, 1, 1];

 function calcSum(numbers) {
    // Tu código aquí 👈
    let result= numbers.reduce((acc,item)=>acc+item,0)
    return result
  }

  console.log(calcSum(numbers))