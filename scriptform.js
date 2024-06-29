//** FORM RESERVAS **//

    //VALIDACION
function validarReserva(event){
    event.preventDefault();
    const nombre= document.getElementById("fnom");
    const apellido= document.getElementById("fap");
    const email= document.getElementById("femail");
    const telefono= document.getElementById("ftel");
    const cantper= document.getElementById("fcantp");
    const fecha= document.getElementById("ffecha");
    const fdias= document.getElementById("ffechadias");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Expresion regular que controla el mail
    valido= true;

    if (nombre.value == "") {
        nombre.classList.add("is-invalid");
        valido= false;
    } else {
        nombre.classList.remove("is-invalid");
    }
    if (apellido.value == "") {
        apellido.classList.add("is-invalid");
        valido= false;
    } else {
        apellido.classList.remove("is-invalid");
    }
    if (!emailRegex.test(email.value)) {
        email.classList.add("is-invalid");
        valido= false;
    } else {
        email.classList.remove("is-invalid");
    }
    if (telefono.value<"1000000000") {
        telefono.classList.add("is-invalid");
        valido= false;
    } else {
        telefono.classList.remove("is-invalid");
    }
    if (cantper.value === "") {
        cantper.classList.add("is-invalid");
        valido = false;
    } else {
        cantper.classList.remove("is-invalid");
    }
    if (fecha.value === "") {
        fecha.classList.add("is-invalid");
        valido = false;
    } else {
        fecha.classList.remove("is-invalid");
    }
    if (fdias.value==0) {
        fdias.classList.add("is-invalid");
        valido= false;
    } else {
        fdias.classList.remove("is-invalid");
    }

    if (valido==false) {
        alert("Por favor revise los datos ingresados");
    } else {
        alert("DATOS ENVIADOS CORRECTAMENTE\nPronto se comunicarán con usted!");
        document.getElementById("formularioReserva").reset();
        window.location.href = "index.html";
    }
}

// SUMAR DIAS FORMULARIO
function sumarDias() {
    var fechaInput = document.getElementById("ffecha").value;
    var dias = parseInt (document.getElementById("ffechadias").value);
    var fecha = new Date(fechaInput);

    // Sumar los días
    fecha.setDate(fecha.getDate() + dias + 1);

    // Mostrar
    var dia = ("0" + fecha.getDate()).slice(-2);
    var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    var año = fecha.getFullYear();

    var nuevaFecha = dia + "-" + mes + "-" + año;

    // Mostrar la nueva fecha
    if (document.getElementById("ffecha").value!="" &&  document.getElementById("ffechadias").value!="" ) {
        document.getElementById("passwordHelpInline").innerHTML = "Reserva hasta el día  " + nuevaFecha;
    }
    
}


//** FORM RESEÑAS **//
    //validación
function validarResenia(){ //event
    // event.preventDefault();
    const nombre= document.getElementById("rsnNombreApe");
    const contacto= document.getElementById("rsnContacto");
    valido= true;

    if (nombre.value == "") {
        nombre.classList.add("is-invalid");
        valido= false;
    } else {
        nombre.classList.remove("is-invalid");
    }
    if (contacto.value<"1000000000") {
        contacto.classList.add("is-invalid");
        valido= false;
    } else {
        contacto.classList.remove("is-invalid");
    }


    if (valido==false) {
        alert("Por favor revise los datos ingresados");
    } else {
        alert("¡Gracias por tu comentario!");
        document.getElementById("formularioResenias").reset();
    }
}


    // star rating
const stars = document.querySelectorAll(".star");

// Evento clic para cada estrella
stars.forEach(function (star, index) {
  star.addEventListener("click", function () {
    // obtener la calificación actual
    const rating = index + 1;

    // Almacenar la calificación en local storage
    window.localStorage.setItem("rating", rating);

    // Actualizar la interfaz de usuario
    updateStarRating(rating);
  });
});

// Función para actualizar la interfaz de usuario
function updateStarRating(rating) {
  // Recorrer todas las estrellas y eliminar checked
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("checked");
  }

  // Agregar checked a las estrellas
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("checked");
  }
}

// Obtener la calificación almacenada en local storage
const storedRating = window.localStorage.getItem("rating");

// Si hay una calificación almacenada, actualizar la interfaz de usuario
if (storedRating) {
  updateStarRating(storedRating);
}
