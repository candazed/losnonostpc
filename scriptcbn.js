// ** LISTADO DE CABAÑAS **
const mostrarCabaniasList = () => {

    let wrapper = document.getElementById("cabanias-wrapper");
    wrapper.innerHTML = '';
    let cont = 0;

    fetch('./cabanias.json')
        .then(res => res.json())
        .then(res => {
            console.log('Datos JSON obtenidos:', res); // Verifica si los datos JSON se están leyendo correctamente

            res.cabanias.forEach(dato => {
                
                let cabaniaHTML = `
                <div class="cabania">
                        <img src="${dato.img1}" class="img-thumbnail" alt="Cabaña en alquiler">
                    <div class="cabania-body">
                        <div class="cabania-txt">
                            <h4>${dato.id}</h4>
                            <h6>Capacidad: ${dato.cantP} personas</h6>
                            <p>${dato.desc}</p>
                        </div>
                        <div class="cabania-bottom-body">
                            <span><span class="precio">$${dato.precio}</span>/por día</span>
                            <div class="cabania-btn">
                                <button class="btn btn-masinfo btn-secondary" type="button" onclick="mostrarMasInfo(${cont})">Más info</button>
                                <button class="btn btn-reservar btn-dark" type="button" onclick="mostrarForm(${cont})">Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
                console.log('html generado:', cabaniaHTML); // Verifica el HTML generado para cada dato
                wrapper.innerHTML += cabaniaHTML;

                cont++;
                console.log('contador: '+cont)
            });
        })
        .catch(error => {
            console.error('Error al cargar datos JSON:', error);
        });
}

function mostrarFullListado() {
    let listadoCabanias = document.getElementById("containerAll");
    listadoCabanias.innerHTML = '';

    let listadoHTML = `
        <div class="filtro-wrapper">
            <div class="row">
                <div class="col-3" id="filtrodiv"><h4>Capacidad mínima:</h4></div>
                <div class="col" id="filtrodiv">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-f btn-outline-secondary">3</button>
                        <button type="button" class="btn btn-f btn-outline-secondary">4</button>
                        <button type="button" class="btn btn-f btn-outline-secondary">5</button>
                        <button type="button" class="btn btn-f btn-outline-secondary">6</button>
                        </div>
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                        <button type="button" value="0" class="btn btn-vt btn-outline-secondary">Ver todo</button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        <div class="cabanias-wrapper" id="cabanias-wrapper"></div>
        `;
    listadoCabanias.innerHTML += listadoHTML;
    mostrarCabaniasList();
}

const mostrarCabaniasFiltradas = (cantidad) => {

    let wrapper = document.getElementById("cabanias-wrapper");
    wrapper.innerHTML = '';

    fetch('./cabanias.json')
        .then(res => res.json())
        .then(res => {
            console.log('Datos JSON obtenidos:', res); // Verifica si los datos JSON se están leyendo correctamente
            let cont = -1;
            res.cabanias.forEach(dato => {
                cont++;
                if (dato.cantP >= cantidad) {
                    let cabaniaHTML = `
                    <div class="cabania">
                            <img src="${dato.img1}" class="img-thumbnail" alt="Cabaña en alquiler">
                        <div class="cabania-body">
                            <div class="cabania-txt">
                                <h4>${dato.id}</h4>
                                <h6>Capacidad: ${dato.cantP} personas</h6>
                                <p>${dato.desc}</p>
                            </div>
                            <div class="cabania-bottom-body">
                                <span><span class="precio">$${dato.precio}</span>/por día</span>
                                <div class="cabania-btn">
                                    <button class="btn btn-secondary" type="button" onclick="mostrarMasInfo(${cont})">Más info</button>
                                    <button class="btn btn-dark" type="button">Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                    console.log('html generado:', cabaniaHTML); // Verifica el HTML generado para cada dato
                    wrapper.innerHTML += cabaniaHTML;
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar datos JSON:', error);
        });
}
// filtro
var filtro = null;
function filtrar() {
    console.log('filtrar: clicked')

    switch (filtro) {
        case 3: mostrarCabaniasFiltradas(3);
            break;
        case 4: mostrarCabaniasFiltradas(4);
            break;
        case 5: mostrarCabaniasFiltradas(5);
            break;
        case 6: mostrarCabaniasFiltradas(6);
            break;
        case 0: mostrarCabaniasList();
    }
}

function toggleDiv() {
    var div = document.getElementById("f-resenias");
    div.classList.toggle("oculto");
  }

// acciones botones
const mostrarMasInfo = (indice) => {
    toggleDiv();
    document.getElementById("btnenviar-rev").addEventListener("click", validarResenia);

    let detallesCabania = document.getElementById("containerAll");
    detallesCabania.innerHTML = '';

    fetch('./cabanias.json')
        .then(res => res.json())
        .then(res => {
            console.log('Datos JSON obtenidos:', res); // Verifica si los datos JSON se están leyendo correctamente

            let cabaniaHTML = `
                <div class="container" id="div-cabania">
                    <a href="" id="btnvolver"><i class="fa-solid fa-chevron-left"></i> Volver</a>
                    <br><br>
                    <div id="id-json">${res.cabanias[indice].id}</div> 
                    <div id="desc-json">${res.cabanias[indice].desc}</div>
                    <hr>
                    <!-- Gallery -->
                    <div class="row">
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0" id="img-12">
                        <img src="${res.cabanias[indice].img1}" class="w-100 shadow-1-strong rounded mb-4" id="img-1"/>
                        <img src="${res.cabanias[indice].img2}" class="w-100 shadow-1-strong rounded mb-4" id="img-2"/>
                        </div>
                    
                        <div class="col-lg-4 mb-4 mb-lg-0" id="img-34">
                        <img src="${res.cabanias[indice].img3}" class="w-100 shadow-1-strong rounded mb-4" id="img-3"/>
                        <img src="${res.cabanias[indice].img4}" class="w-100 shadow-1-strong rounded mb-4" id="img-4"/>
                        </div>
                    
                        <div class="col-lg-4 mb-4 mb-lg-0" id="img-56">
                        <img src="${res.cabanias[indice].img5}" class="w-100 shadow-1-strong rounded mb-4" id="img-5"/>
                        <img src="${res.cabanias[indice].img6}" class="w-100 shadow-1-strong rounded mb-4" id="img-6"/>
                        </div>
                    </div>
                    <hr><br>
                    <div class="row" style="padding: 15px;">
                        <div class="col-5" id="listacar-1">
                            <div id="car-1" class="cars"></div>
                            <div id="car-2" class="cars"></div>
                            <div id="car-3" class="cars"></div>
                            <div id="car-4" class="cars"></div>
                            <div id="car-5" class="cars"></div>
                        </div>
                        <div class="col-7" id="listacar-2">
                            <div id="car-6" class="cars"></div>
                            <div id="car-7" class="cars"></div>
                            <div id="car-8" class="cars"></div>
                            <div id="car-9" class="cars"></div>
                            <div id="car-10" class="cars"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div id="precio-json" class="col-9">
                            $${res.cabanias[indice].precio} por día
                        </div>
                        <div id="divreserva" class="col-3">
                            <button id="btnreserva"  type="button" class="btn btn-dark" onclick="mostrarForm(${indice})">SOLICITAR RESERVA</button>
                        </div>
                    </div>
                </div>    
                `;
            detallesCabania.innerHTML = cabaniaHTML;

            let caracts = document.getElementsByClassName("cars");
            res.cabanias[indice].caracts.forEach((caract, index) => {
                caracts[index].innerHTML = Object.values(caract)[0];
            });
                
            })
}

var precio = 0;
const mostrarForm = (indice) => {
    let formReserva = document.getElementById("containerAll");
    formReserva.innerHTML = '';

    fetch('./cabanias.json')
        .then(res => res.json())
        .then(res => {
            const cantidad = res.cabanias[indice].cantP
                    // console.log('MForm - cant personas: ' +cantidad)
            precio = res.cabanias[indice].precio
                    // console.log('MForm - precio: ' +precio)

            var opciones = ''
                for(let i=0; i <= cantidad ; i++){
                    if(i == 0)
                        opciones += '<option value=""></option>'
                    else
                        opciones += '<option value="' + (i) + '">' + (i) + '</option>'
                }

            let formHTML = `
                <div class="container" id="div-form">
                    <div id="titulo">
                        <h1>Solicitar Reserva</h1> <hr>
                    </div>
                    <form action="" id="formularioReserva">
                        <div class="row">
                                <div class="col-4">
                                    <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" required id="fnom">
                                </div>
                                <div class="col-4">
                                    <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido" required id="fap">
                                </div>
                            </div> <br>
                            <div class="row">
                                <div class="col-4">
                                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" id="femail">
                                </div> 
                            </div><br>
                            <div class="row">
                                <div class="col-3">
                                    <input type="number" class="form-control" placeholder="Telefono" aria-label="Telefono" min="1000000000" id="ftel">
                                </div> 
                            </div> <br>
                        Fecha de interés
                    <div class="row g-3 align-items-center">
                        <div class="col-3">
                            <input type="date" class="form-control" placeholder="Date" aria-label="Date" required id="ffecha">
                        </div>
                        <div class="col-2">
                            <input type="number" class="form-control" placeholder="Dias" aria-label="Dias" required id="ffechadias">
                        </div>
                        <div class="col-auto">
                            <span id="passwordHelpInline" class="form-text">
                            </span>
                        </div>
                    </div> <br>
                    Cantidad de personas
                    <div class="row">
                        <div class="col-3" id="fdivcantp">
                            <select class="form-select" id="fcantp">
                                ${opciones}
                            </select>
                    </div>
                    </div>
                    <div class="col-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="fmasc">
                            <label class="form-check-label" for="autoSizingCheck">
                                Llevo mascota
                           </label>
                        </div>
                    </div> <br>
                    <div class="row align-items-center">
                        <div class="col">
                            <button class="btn btn-dark" type="button" id="btnenviar-res">Enviar datos</button>
                        </div>
                        <div class="col" id="contenedorprecio">
                            <div id="precio">"El precio estimado es de: "</div>
                        </div>
                    </div>
                </form>
                `;
                formReserva.innerHTML = formHTML;

                document.getElementById("btnenviar-res").addEventListener("click", validarReserva);
                document.getElementById("ffechadias").addEventListener("input", muestraCostoF);
                document.getElementById("ffechadias").addEventListener("input", sumarDias);
        });
}

// ** CABAÑA ESPECIFICA **

// MUESTRA EL COSTO FINAL

const muestraCostoF = () => { 
    preciowrapper= document.getElementById("precio");
    dias= parseInt(document.getElementById("ffechadias").value);
    console.log('MCosto: dias= ' + dias)

    preciowrapper.innerHTML= '';
    preciowrapper.innerHTML += "El precio estimado es de: $" + (dias*precio) ;
}

// inicializar 
function iniciar() {
    mostrarFullListado();

    //inicializar botones de filtrado
    var btnGroup = document.querySelectorAll(".btn-group > button.btn-f");
    for (var i = 0; i < btnGroup.length; i++) {

        btnGroup[i].addEventListener("click", function () {
            // guarda el valor del boton en la variable filtro
            filtro = +this.innerHTML;
        });
        //agrega a cada boton la funcion filtrar
        btnGroup[i].addEventListener("click", filtrar);
    }

    var btnVerTodo = document.querySelectorAll(".btn-group > button.btn-vt");
    for (var i = 0; i < btnVerTodo.length; i++) {
        btnVerTodo[i].addEventListener("click", function () {
            // guarda el valor del boton en la variable filtro
            filtro = 0;
        });
        //agrega a cada boton la funcion filtrar
        btnVerTodo[i].addEventListener("click", filtrar);
    }
}

window.onload = function() {
    iniciar();
};
// window.addEventListener("load", iniciar);

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

    // Mostrar la nueva fecha en algún lugar de tu página
    if (document.getElementById("ffecha").value!="" &&  document.getElementById("ffechadias").value!="" ) {
        document.getElementById("passwordHelpInline").innerHTML = "Reserva hasta el día  " + nuevaFecha;
    }
    
}

const mostrarCabania = (cbn) => {
    let idwrapper= document.getElementById("id-json");
    let descwrapper= document.getElementById("desc-json");
    let img1= document.getElementById("img-1");
    let img2= document.getElementById("img-2");
    let img3= document.getElementById("img-3");
    let img4= document.getElementById("img-4");
    let img5= document.getElementById("img-5");
    let img6= document.getElementById("img-6");
    let caracts= document.getElementsByClassName("cars");
    let pricewrapper= document.getElementById("precio-json");

    fetch('./cabanias.json')
        .then(res => res.json())
        .then(res => {
            console.log('Datos JSON obtenidos:', res); // Verifica si los datos JSON se están leyendo correctamente

            res.forEach(dato => {
                if (dato.id === cbn) {
                    idwrapper.innerHTML= dato.id;
                    descwrapper.innerHTML= dato.desc;
                    img1.src = dato["img-1"];
                    img2.src = dato["img-2"];
                    img3.src = dato["img-3"];
                    img4.src = dato["img-4"];
                    img5.src = dato["img-5"];
                    img6.src = dato["img-6"];
                    dato.caracts.forEach((caract, index) => {
                        caracts[index].innerHTML = Object.values(caract)[0];
                    });
                    pricewrapper.innerHTML= "$"+ dato.precio + " Por Día";
                }
            });
        })
        .catch(error => {
            console.error('Error al cargar datos JSON:', error);
        });
}
