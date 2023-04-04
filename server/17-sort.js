const months = ["March", "Jan", "Feb", "Dec"];
months.sort()
console.log(months)

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b)=>a - b)
console.log(numbers)
// Para ponerlo al inverso se utiliza b-a
numbers.sort((a,b)=>b- a)
console.log(numbers)
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort()
console.log(words)

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b)=>b.total-a.total)
console.log(orders)

const ordersF = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date:2022-05-12,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date:2023-01-01,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date:2022-03-15,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date:2022-12-31,
    },
];

ordersF.sort((a,b)=> b.date - a.date)
console.log(ordersF)