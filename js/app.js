//VARIABLES
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

//año en el que estamos
const max = new Date().getFullYear() ;
const min = 2010;



//FUNCIONES
//mostar autos en el html
const mostrarAutos = () => {
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


//EVENT0S
document.addEventListener("DOMContentLoaded", () => {
    //Muestra los autos al cargar
    mostrarAutos();
    //LLena las opciones de años
    llenarSelect()
});