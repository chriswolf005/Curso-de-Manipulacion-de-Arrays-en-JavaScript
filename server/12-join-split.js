const elements=["Fire","Air","Water"];
let rtaFinal='';
const separator='--'

for(element of elements){
    rtaFinal=rtaFinal+element+separator;
}

console.log('for',rtaFinal)

const rta =elements.join('--');
console.log('join',rta);

const tittle='curso de manipulacion de arrays';
const tittleFinal=tittle.split(' ').join('/').toLocaleLowerCase()
console.log(tittleFinal )