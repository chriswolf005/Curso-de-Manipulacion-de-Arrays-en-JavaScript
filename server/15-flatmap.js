const user=[
    {userId:1,username:"tom",attributes:["Nice","Cute"]},
    {userId:2, username: 'Mike',attributes:["lovely"]},
    {userId:3, username: 'Nico',attributes:["nice","Cool"]},
];

 const rta= user.map(user=>user.attributes)
const rta2=user.flatMap(user=> user.attributes)
console.log('map-flat',rta2)
 console.log(rta);

