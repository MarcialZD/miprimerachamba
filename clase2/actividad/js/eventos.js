const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");

setTimeout(function () {
    subtitle.textContent = "Platos de Comida Peruana";
    setTimeout(function () {
        subtitle2.textContent = "Y su delicioso (o no tan delicioso) sabor";
    }, 1000);
}, 1000);

const platosPeruanos = [
    { "nombre": "Ceviche", "rico": true },
    { "nombre": "Lomo Saltado", "rico": true },
    { "nombre": "Ají de Gallina", "rico": true },
    { "nombre": "Causa Limeña", "rico": true },
    { "nombre": "Anticuchos", "rico": true },
    { "nombre": "Papa a la Huancaína", "rico": true },
    { "nombre": "Rocoto Relleno", "rico": true },
    { "nombre": "Pollo a la Brasa", "rico": true },
    { "nombre": "Chicharrón", "rico": true },
    { "nombre": "Tacu Tacu", "rico": true },
    { "nombre": "Caldo de Pata", "rico": false },
    { "nombre": "Cuy al Horno", "rico": false },
    { "nombre": "Sopa de Mondongo", "rico": false }
];

const dishElement = document.getElementById("dishes");
let contenido = "";
platosPeruanos.forEach(function (plato) {
    const claseIcon = plato.rico ? "rico" : "no-rico";
    const template = `
        <div class="plato">
            <div class="icon icon-${claseIcon}"></div>
            <div class="data">
                <h4>${plato.nombre}</h4>
                <p>${plato.rico ? "¡Es delicioso!" : "No tan rico..."}</p>
            </div>
        </div>
    `;
    contenido += template;
});

dishElement.innerHTML = contenido;
