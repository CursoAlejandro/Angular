/*Codigo de selector Profesor , lo demas lo realize yo */

//Variables globales
var nombre, apellidos, email, usuario, clave, clave2, expresion;

//******************************************************* *********** */
function main() {	//envio de evento a la funcion manejadora.
	var aGeneros = ["Programacion", "Ofimatica", "Adobe"];// Guardo en Arrays
	var oAutores = {  // Los llamo segun su nombre
		"Programacion": ["Java", "C#", "javascript", "Cobol"],
		"Ofimatica": ["M Word", "Excel", "PowerPoint", "Acces"],
		"Adobe": ["Photoshop", "Adobe Premiere", "After Effect", "Adobe Pdf"],

	};

	var sSelectedGenero;  // Creo variables
	var sSelectedAutor;
	// nodos del DOM
	var domSelecGeneros = document.querySelector("#generos");
	var domSelecAutores = document.querySelector("#autores"); //vinculo a los ids
	var domBoton = document.querySelector('#boton');
	//manejadores
	domSelecGeneros.addEventListener("change", cambioGenero);  // al cambiar invocamos la funcion
	domSelecAutores.addEventListener("change", cambioAutores);
	domBoton.addEventListener("click", enviar);			// Al clicar invocamos la funcion enviar 
	// configuración inicial
	domSelecAutores.disabled = true;   //desactiva los ids autores
	//domBoton.disabled = true;

	cargarSelect(domSelecGeneros, aGeneros); // Invoco la funcion con las variables con los ids generos
	// y autores

	function cargarSelect(oDom, aDatos) {
		oDom.innerHTML = "<option> </option>"; // añado un option
		domBoton.disabled = true; //desactivo boton si solo tengo seleccionado 0 o 1 
		for (var i = 0; i < aDatos.length; i++) {
			oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
		}
	}

	function cambioGenero(oE) { // Entra aqui AL SELECCIONAR GENERO	
		var domSelect = oE.currentTarget; // La propiedad de evento currentTarget devuelve el elemento cuyo detectores de eventos activado el evento.
		if (domSelect.childElementCount > aGeneros.length) { // Si Numero de elementos descendientes es mayor que el numero de numero de cursos [3]

			domSelect.removeChild(domSelect.children[0]); // Mi evento removera el hijo del nodo deuvelve en un array los nodos de los elementos
		}
		let nSelect = domSelect.selectedIndex; // OBliga a leegir un elemento de la lista
		let domOption = domSelect.options[nSelect]; // accede a la opcion de la lista array crreado aut por navegador 
		sSelectedGenero = domOption.text;
		// las tres lineas en una 
		// sSelectedGenero domSelect.options[domSelect.selectedIndex].text;

		cargarSelect(domSelecAutores, oAutores[sSelectedGenero]);
		domSelecAutores.disabled = false;
	}

	function cambioAutores(oE) {
		var domSelect = oE.currentTarget; //me devuelve el evento en si 
		if (domSelect.childElementCount > oAutores[sSelectedGenero].length) {
			domSelect.removeChild(domSelect.children[0]);
		}
		var nSelect = domSelect.selectedIndex;
		var domOption = domSelect.options[nSelect]
		sSelectedAutor = domOption.text;
		domBoton.disabled = false;
	}

	function enviar() {
		return confirm("Debe completar los campos indicados para el registro en el curso de: " + sSelectedAutor); //envia y confirma
	}



};//fin del onload


if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", main, false);
	//metodo de DOM nivel 2  que indica al agente de usuario que permanezca atento:
	// evento: en este caso la carga completa de la página
	// función a lanzar: en este caso iniciaBoton
	// orden del flujo de eventos: false salta la fase de captura
} else {
	window.onload = main;
}
//******************************************** */
function inicio() {

	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	email = document.getElementById("email").value;
	usuario = document.getElementById("usuario").value;				//Inicio vinculo con los ids y creo un boolean false
	clave = document.getElementById("clave").value;
	clave2 = document.getElementById("clave2").value;
	formulario = document.getElementById("formulario").value;
	expresion = false;

}

function mostrar() {			//Llamo a las 2 funciones

	this.inicio();
	this.validar();
}

function validar() {
	if (clave != clave2) {
		alert("No coinciden las contraseñas ")

	} else if (clave == clave2 && clave.length >= 2 && clave2.length >= 2) { // Comprobar que coincidan las claves y minimo tengan 2 caracteres
		this.expresion = true;
		return mostrarFinal();
	}
}

function mostrarFinal() {
	if (expresion == false) {
		this.validar();
	}
	else if (this.expresion == true) {
		var f = new Date();

		confirm("Registro Aceptado")
		document.write(
			"<table cellpadding='9' cellspacing='0' border='1'>" +
			"<tr><td>Nombre</td><td>Apellido</td><td>Email</td><td>Usuario</td><td>Tu clave</td></tr>" +
			"<tr><td>" + this.nombre + "</td><td>" + this.apellidos + "</td><td>" + this.email + "</td><td>" + this.usuario + "</td><td>" + this.clave + "</td></tr></table>"
		);
		document.write("<br>" + "Fecha de registro:" + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
	}
}

function comodin() {
	return false;
}

