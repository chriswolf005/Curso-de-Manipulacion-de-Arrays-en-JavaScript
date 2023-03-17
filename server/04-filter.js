const words=['spray','limit','elite','exuberant'];

const newArray=[];

for(word of words){
    if(word.length >=6){
        newArray.push(word)
    }
    
}
console.log('Original', words)
console.log('new array', newArray)

const rta=words.filter(item=>item.length>=6);
console.log('Original', words)
console.log('rta', rta)

const orders=[
    {
        costumerName: 'nicolas',
        total: 60,
        deivered:true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName:'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
    {
        customerName: 'nicole',
        total: 2420,
        delivered: false,
    },
];


/*
const entregadas=orders.filter(item=>item.delivered&&item.total>=100  )
console.log('entregadas',entregadas);
*/
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search())