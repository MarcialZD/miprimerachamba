const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");

setTimeout(function () {
    subtitle.textContent = "Platos de Comida Peruana";
    setTimeout(function () {
        subtitle2.textContent = "Y su delicioso (o no tan delicioso) sabor";
    }, 1000);
}, 1000);

const platosPeruanos = [
    { "nombre": "Adobo", "favorito": false },
    { "nombre": "Chaufa de Mariscos", "favorito": true },
    { "nombre": "Parihuela", "favorito": true },
    { "nombre": "Humitas", "favorito": true },
    { "nombre": "Mazamorra Morada", "favorito": true },
    { "nombre": "Sopa Criolla", "favorito": false },
    { "nombre": "Tiradito", "favorito": true },
    { "nombre": "Aji de Langostinos", "favorito": true },
    { "nombre": "Tacacho con Cecina", "favorito": true },
    { "nombre": "Carapulcra", "favorito": true },
    { "nombre": "Picante de Cuy", "favorito": true },
    { "nombre": "Mondongo a la Italiana", "favorito": false },
    { "nombre": "Pachamanca", "favorito": true },
    { "nombre": "Sopa de Choros", "favorito": false },
    { "nombre": "Pollo a la Brasa", "favorito": true },
    { "nombre": "Chicharrón", "favorito": true },
    { "nombre": "Tacu Tacu", "favorito": true },
    { "nombre": "Caldo de Pata", "favorito": false },
    { "nombre": "Cuy al Horno", "favorito": false },
    { "nombre": "Sopa de Mondongo", "favorito": false },
    { "nombre": "Higado encebollado", "favorito": false },
    { "nombre": "Chanfainita", "favorito": false },
    { "nombre": "Sancochado", "favorito": false },
    { "nombre": "Cau Cau", "favorito": false },
    { "nombre": "Patasca", "favorito": false },
    { "nombre": "Arroz con Pato", "favorito": true },
    { "nombre": "Seco a la Norteña", "favorito": true }
];

const dishElement = document.getElementById("dishes");
let contenido = "";
platosPeruanos.forEach(function (plato) {
    const claseIcon = plato.favorito ? "favorito" : "no-favorito";
    const template = `
        <div class="plato">
            <div class="icon icon-${claseIcon}"></div>
            <div class="data">
                <h4>${plato.nombre}</h4>
                <p>${plato.favorito ? "Es mi favorito" : "No es mi favorito"}</p>
            </div>
        </div>
    `;
    contenido += template;
});

dishElement.innerHTML = contenido;

const boton = document.getElementById("sendPlato");
boton.addEventListener("click", function () {
    const nombre = document.getElementById("nombrePlato").value;
    const isFavorito = document.getElementById("isFavorito").value;
    alert("¡Nuevo plato agregado!");

    platosPeruanos.push({ "nombre": nombre, "favorito": isFavorito === "SI" });

    updateDishList();
});

function updateDishList() {
    let newContenido = "";
    platosPeruanos.forEach(function (plato) {
        const claseIcon = plato.favorito ? "favorito" : "no-favorito";
        const template = `
            <div class="plato">
                <div class="icon icon-${claseIcon}"></div>
                <div class="data">
                    <h4>${plato.nombre}</h4>
                    <p>${plato.favorito ? "Es mi favorito" : "No es mi favorito"}</p>
                </div>
            </div>
        `;
        newContenido += template;
    });

    dishElement.innerHTML = newContenido;
}
