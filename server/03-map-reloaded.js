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
];
//console.log('Original',orders)
// Asi se transforma un array de objetos a un array de numeros
// ya que solo me interesan los totales de las ordenes
const totales=orders.map(item=>item.total)
orders.map(item =>item.total)
//console.log('totales',totales);

//Este es uno de los usos fuertes de map

/*
En caso de que quiera agergar un nuevo atributo a mi objeto,
pero sin modificar el objeto actual.

Una forma seria:
*/

//const total2=orders.map(item=>{
    //item.tax=0.19;
   // return item;
//});


//console.log('total2',total2);
//console.log('Original',orders)


/*Todos los objetos del array original han sidos modificados,

Como?

pues cuando pasas cada objeto del array, pasas su referencia en menmoria
y con el "item.tax" al retornarlo lo estas modificando.

si no quieres que eso pase te muestro como:👇🏼

*/

const total3=orders.map((item)=>{
    return {
        ...item,
        tax: 0.19
    };
});

/*
Con el spread operator estamos "copiando" cada elemento y 
agregandole el atributo de tax, asi vienene sin la referencia
en memoria
*/

console.log('total3',total3);
console.log('Original',orders)