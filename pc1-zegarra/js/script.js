let personasDisponibles = [
    { name: 'Juan', job: 'Programador' },
    { name: 'María', job: 'Diseñador' },
    { name: 'Pedro', job: 'Ingeniero' },
    { name: 'Laura', job: 'Gerente' },
    { name: 'Carlos', job: 'Contador' },
    { name: 'Ana', job: 'Analista' },
    { name: 'Luis', job: 'Vendedor' },
    { name: 'Sofía', job: 'Asistente' },
    { name: 'Diego', job: 'Chef' },
    { name: 'Elena', job: 'Arquitecto' },
    { name: 'Roberto', job: 'Ingeniero de Sistemas' },
    { name: 'Julia', job: 'Desarrollador de Software' },
    { name: 'Andrés', job: 'Ingeniero de Redes' },
    { name: 'Marta', job: 'Analista de Sistemas' },
    { name: 'David', job: 'Consultor de Tecnología' },
    { name: 'Isabel', job: 'Especialista en Seguridad Informática' },
    { name: 'Fernando', job: 'Administrador de Bases de Datos' },
    { name: 'Lucía', job: 'Ingeniera de Software' },
    { name: 'Jorge', job: 'Desarrollador Web' },
    { name: 'Carolina', job: 'Técnico de Soporte de Sistemas' }
];


let personasContratadas = [];

function mostrarPersonasDisponibles() {
    let lista = document.getElementById('listaDisponible');
    let contenido = '<h2>Personas Disponibles</h2>';
    personasDisponibles.forEach((persona, index) => {
        let claseicon = 'no-corrupto';
        let cantidadanios = persona.anios_gobierno === 0 ? "No gobernó ni un año" : persona.anios_gobierno + " años";

        contenido += `
            <div class="persona">
                <p><strong>${persona.name}</strong> - ${persona.job} <button onclick="contratarPersona(${index})">Contratar</button></p>
            </div>
        `;
    });
    lista.innerHTML = contenido;
}

function mostrarPersonasContratadas() {
    let lista = document.getElementById('listaContratada');
    let contenido = '<h2>Personas Contratadas</h2>';
    personasContratadas.forEach((persona) => {
        contenido += `
            <div class="persona">
                <p>${persona.name} - ${persona.job}</p>
            </div>
        `;
    });
    lista.innerHTML = contenido;
}

function contratarPersona(index) {
    let personaContratada = personasDisponibles.splice(index, 1)[0];
    personasContratadas.push(personaContratada);
    mostrarPersonasDisponibles();
    mostrarPersonasContratadas();

    Swal.fire({
        title: '¡Persona contratada!',
        text: `Nombre: ${personaContratada.name}\nOficio: ${personaContratada.job}`,
        icon: 'success'
    });
}

document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombrePersona = document.getElementById('personName').value;
    let oficioPersona = document.getElementById('personJob').value;
    personasDisponibles.push({ name: nombrePersona, job: oficioPersona });
    mostrarPersonasDisponibles();
    document.getElementById('personName').value = '';
    document.getElementById('personJob').value = '';

    Swal.fire({
        title: '¡Persona agregada!',
        text: `Nombre: ${nombrePersona}\nOficio: ${oficioPersona}`,
        icon: 'success'
    });
});

mostrarPersonasDisponibles();
mostrarPersonasContratadas();