const user=[
    {userId:1,username:"tom",attributes:["Nice","Cute"]},
    {userId:2, username: 'Mike',attributes:["lovely"]},
    {userId:3, username: 'Nico',attributes:["nice","Cool"]},
];

 const rta= user.map(user=>user.attributes)
const rta2=user.flatMap(user=> user.attributes)
console.log('map-flat',rta2)
 console.log('Map', rta);

 const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const rta3=Object.values(calendars).flatMap(item=>{
    return item.map(date=>date.startDate)
  });
  console.log(rta3)