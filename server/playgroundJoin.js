function parseToURL(title) {
    // Tu código aquí 👈
    let tituloFinal=title.split(' ').join('-').toLocaleLowerCase()
    console.log(tituloFinal)
  }
  parseToURL("La forma de correr Python")