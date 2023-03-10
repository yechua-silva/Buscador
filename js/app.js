//VARIABLES
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
//contenedor para los resultados
const resultado = document.querySelector('#resultado');
//año en el que estamos
const max = new Date().getFullYear() ;
//año minimo de busqueda
const min = 2010;
//generar un objetos con los filtros de busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


//FUNCIONES
//mostar autos en el html
const mostrarAutos = autos => {
    //limpiar HTML
    limpiar()
    //recorer db por cada auto
    autos.forEach(auto => {
        //distructuring
        const {marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTMl = document.createElement('P')
        //crear contenido 
        autoHTMl.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color} 
        `;
        //insertar en el HTML
        resultado.appendChild(autoHTMl);
    })
}
//generar años del select
const llenarSelect = () => {
    //recorrer los años desde el el 2020 al 2010
    for (let i = max; i >= min; i--) {
        //crar elemento HTML
        const opcion = document.createElement('OPTION')
        opcion.value = i;
        opcion.textContent = i;
        //agregar al HTML, los años al select
        year.appendChild(opcion);
    }
}
//filtra en base a la busqueda
const filtrarAuto = () => {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    //verificar si hay resultado para la busqueda
    if (resultado.length) {
        mostrarAutos(resultado)
    }else {
        noResultado()
    }
}
//funciones de filtrado
const filtrarMarca = auto => {
    const {marca} = datosBusqueda;
    //verificar si existe, lo que filtramos del select
    if (marca) {
        return auto.marca === marca;
    }
    //si no seleciono nada, retorna el auto completo
    return auto
}
const filtrarYear = auto => {
    const {year} = datosBusqueda;
    if (year ){
        return auto.year === year;
    }
    return auto
}
const filtrarMinimo = auto => {
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto
}
const filtrarMaximo = auto => {
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto
}
const filtrarPuertas = auto => {
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas == puertas
    }
    return auto
}
const filtrarTransmision = auto => {
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision == transmision
    }
    return auto
}
const filtrarColor = auto => {
    const {color} = datosBusqueda;
    if (color) {
        return auto.color == color
    }
    return auto
}
//limpiar HTML
const limpiar = () => {
    //si es que tiene un elemento, lo borra
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}
//Cuando no hay resultado para la busqueda
const noResultado = () => {
    limpiar()

    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No Hay Resultado, Intenta con otros términos de Búsqueda'
    resultado.appendChild(noResultado)
}


//EVENT0S
document.addEventListener("DOMContentLoaded", () => {
    //Muestra los autos al cargar
    mostrarAutos(autos);
    //LLena las opciones de años
    llenarSelect()
});
//eventos para los select de busqueda
marca.addEventListener("change", e => {
    datosBusqueda.marca = e.target.value
    filtrarAuto();
})
year.addEventListener("change", e => {
    //parseInt, ya que viene como strings
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto(); 
})
minimo.addEventListener("change", e => {
    datosBusqueda.minimo = e.target.value
    filtrarAuto(); 
})
maximo.addEventListener("change", e => {
    datosBusqueda.maximo = e.target.value
    filtrarAuto(); 
})
puertas.addEventListener("change", e => {
    datosBusqueda.puertas = e.target.value
    filtrarAuto(); 
})
transmision.addEventListener("change", e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto(); 
})
color.addEventListener("change", e => {
    datosBusqueda.color = e.target.value
    filtrarAuto(); 
})