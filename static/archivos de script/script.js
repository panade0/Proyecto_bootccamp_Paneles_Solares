document.getElementById('btncoments').addEventListener('click', addcoment);
//permite añadir comentarios con la tecla enter
document.getElementById('coments').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addcoment();
    }
});

//funcion para agregar un comentario

function addcoment() {
    const taskinput = document.getElementById('coments'); //obtiene el campo de entrada
    const tasktext = taskinput.value.trim(); //recoge el texto y elimina espacios en blanco al principio y final


    //verifica que el texto no este vacio

    if (tasktext !== ''){
        const li = document.createElement('li'); //crea un nuevo elemento de lista para los comentarios (li)

    //crea un nodo de texto con el contenido de la tarea
    const textNode = document.createTextNode(tasktext);
    li.appendChild(textNode); //agrega el texto al elemento li

    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = "🗑️"; //icono del boton, tambien se puede cambiar por texto
    deleteBtn.classList.add('delete'); //añade la clase de estilo
    deleteBtn.addEventListener('click', function() {  //accion de eliminar tarea
        li.remove(); //elimina la tarea

    });

    li.appendChild(deleteBtn)//agrega boton de eliminar

    //añade el comentario a la lista

    document.getElementById('addcoment').appendChild(li)

    //limpia el campo de entrada despues de enviar el comentario
    taskinput.value = '';

    }else {
        alert('por favor, escriba una tarea.'); // muestra un mensaje si el campo esta vacio
        
    }

}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});