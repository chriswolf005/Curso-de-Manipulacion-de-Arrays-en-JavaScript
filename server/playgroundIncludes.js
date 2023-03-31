let array=["ana", "santi", "nico", "anastasia"]
function filterByTerm(array, term) {
    // Tu código aquí 👈
    let rta=array.filter(item=>item.includes(term))
    console.log(rta)
  }
  filterByTerm(array,'ana')