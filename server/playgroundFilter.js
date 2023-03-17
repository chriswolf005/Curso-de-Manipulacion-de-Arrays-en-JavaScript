const array=['amor', 'sol', 'piedra', 'día'];
function filterByLength(array) {
    // Tu código aquí 👈
const rta=array.filter(item=>item.length>=4);
return rta;
}

console.log (filterByLength(array))