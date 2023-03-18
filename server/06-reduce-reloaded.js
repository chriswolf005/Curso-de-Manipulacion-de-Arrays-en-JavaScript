const items=[1,3,2,3,4,1,3]

const rta=  items.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=1;
    }else{
        obj[item]=obj[item]+1
    }
    return obj
},{})

console.log(rta)



//Ejemplo 2
const data=[
    {
        name:"Nicolas",
        level:"low"
    },
    {
        name:"Andrea",
        level:"medium"
    },
    {
        name:"Zulema",
        level:"hight"
    },
    {
        name:"Santiago",
        level:"low"
    },
    {
        name:"valentina",
        level:"medium"
    },
    {
        name:"Christopher",
        level:"hight"
    },

];

const levelQuanty= data.map(item=>item.level)
.reduce((obj,item)=>{//Concatenando el reduce
    if(!obj[item]){
        obj[item]=1;
    }else{
        obj[item]=obj[item]+1
    }
    return obj
},{})

console.log(levelQuanty)