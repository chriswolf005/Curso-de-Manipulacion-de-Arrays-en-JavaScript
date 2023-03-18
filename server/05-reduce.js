const totals=[1,2,3,4];

let sum=0;

for(number of totals){
    sum=sum+number
}
console.log(sum);

const rta=totals.reduce((sum,item)=>sum + item,0)
console.log('rta', rta)

