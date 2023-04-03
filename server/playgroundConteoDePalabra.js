
let array=[  "Beautiful is better than ugly",
"Explicit is better than implicit",
"Simple is better than complex",
"Complex is better than complicated",]

 function countWords(array) {
    // Tu código aquí 👈
    return array.flatMap(line => line.split(' ')).length;
  }
  
  countWords(array)