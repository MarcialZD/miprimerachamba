const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");

setTimeout(function () {
    subtitle.textContent = "Platos de Comida Peruana";
    setTimeout(function () {
        subtitle2.textContent = "Y su delicioso (o no tan delicioso) sabor";
    }, 1000);
}, 1000);

const platosPeruanos = [
    { "nombre": "Adobo", "rico": false },
    { "nombre": "Chaufa de Mariscos", "rico": true },
    { "nombre": "Parihuela", "rico": true },
    { "nombre": "Humitas", "rico": true },
    { "nombre": "Mazamorra Morada", "rico": true },
    { "nombre": "Sopa Criolla", "rico": false },
    { "nombre": "Tiradito", "rico": true },
    { "nombre": "Aji de Langostinos", "rico": true },
    { "nombre": "Tacacho con Cecina", "rico": true },
    { "nombre": "Carapulcra", "rico": true },
    { "nombre": "Picante de Cuy", "rico": true },
    { "nombre": "Mondongo a la Italiana", "rico": false },
    { "nombre": "Pachamanca", "rico": true },
    { "nombre": "Sopa de Choros", "rico": false },
    { "nombre": "Pollo a la Brasa", "rico": true },
    { "nombre": "Chicharrón", "rico": true },
    { "nombre": "Tacu Tacu", "rico": true },
    { "nombre": "Caldo de Pata", "rico": false },
    { "nombre": "Cuy al Horno", "rico": false },
    { "nombre": "Sopa de Mondongo", "rico": false },
    { "nombre": "Higado encebollado", "rico": false },
    { "nombre": "Chanfainita", "rico": false },
    { "nombre": "Sancochado", "rico": false },
    { "nombre": "Cau Cau", "rico": false },
    { "nombre": "Patasca", "rico": false },
    { "nombre": "Arroz con Pato", "rico": true },
    { "nombre": "Seco a la Norteña", "rico": true }

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
