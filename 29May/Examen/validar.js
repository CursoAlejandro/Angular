/*function main(){

//fase 2
	var oProgramacion = ["Programacion", "Ofimatica", "Adobe"]
	var oCursos = {
		"Programacion": ["Java", "C#", "Php", "Delphi"],
		"Ofimatica":	["Word", "Excel", "Powerpoint", "Acces"],
		"Adobe":		["Photoshop", "Ilustrator", "Adb Premiere", "Acrobat"]
	}

	var aSelecProgramacion;
	var aSelecCursos;

	var domSelecProgramacion = document.querySelector("#Programacion")
	var domSelecCursos = document.querySelector("#asignaturas")

	domSelecProgramacion.addEventListener("change", cambioProgramacion); //Generos
	domSelecCursos.addEventListener("change", cambioCursos); //Autor

	domSelecCursos.disabled = true;

	//paste

	domSelecCursos.addEventListener("change", cambioGenero);
			domSelecCursos.addEventListener("change", cambioAutores);
			domBoton.addEventListener("click", enviar);
			// configuración inicial
			domSelecAutores.disabled = true;
			//domBoton.disabled = true;
			cargarSelect(domSelecProgramacion, oProgramacion);
			function enviar() {
				return confirm("Desaa solicitar los datos de " + aSelecCursos);
			}
			function cambioCursos(oE) {
				var domSelect = oE.currentTarget;
				if (domSelect.childElementCount > oAutores[aSelecProgramacion].length) {
					domSelect.removeChild(domSelect.children[0]);
				}
				var nSelect = domSelect.selectedIndex;
				var domOption = domSelect.options[nSelect]
				sSelectedAutor = domOption.text;
				domBoton.disabled = false;
			}
			function cambioGenero(oE) {
				var domSelect = oE.currentTarget;
				if (domSelect.childElementCount > oProgramacion.length) {
					domSelect.removeChild(domSelect.children[0]);
				}
				let nSelect = domSelect.selectedIndex;
				let domOption = domSelect.options[nSelect];
				sSelectedGenero = domOption.text;
				// las tres lineas en una 
				// sSelectedGenero domSelect.options[domSelect.selectedIndex].text;
				cargarSelect(domSelecCursos, oCursos[aSelecProgramacion]);
				domSelecCursos.disabled = false;
			}
			function cargarSelect(oDom, aDatos) {
				oDom.innerHTML = "<option> </option>";
				domBoton.disabled = true;
				for (var i = 0; i < aDatos.length; i++) {
					oDom.innerHTML += "<option>" + aDatos[i] + "</option>";
				}
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
	
*/

/* DEVUELVE FECHA   

var f = new Date();
document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

*/

function validar() {
	var nombre, apellidos, email, usuario, clave, clave2, expresion;
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	email = document.getElementById("email").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
	clave2 = document.getElementById("clave2").value;

		
		// cop
		if (nombre === "" || apellidos === "" || email === "" || usuario === "" || clave === "") {
			alert("Esta vacio uno o mas campos");
			return false;
		}
		// Maximo de caracteres
		else if (nombre.length > 15) {
			alert("Nombre muy largo")
			return false;
		}
		else if (apellidos.length > 30) {
			alert("Apellidos muy largo")
			return false;
		}
		else if (usuario.length > 12) {
			alert("Usuario muy largo")
			return false;
		}
		else if (clave.length > 12) {
			alert("Clave muy larga")
			return false;
		}

		// Validacion de claves
		if (clave != clave2) {
			alert("No has puesto la misma clave")
			return false;
		} else if (clave === clave2) {
			alert("Registro Exitoso")
			return true;
		}

		recogeDatos();

}



function recogeDatos (){
	alert("He")

}

document.addEventListener("DOMContentLoaded", recogeDatos, false);	

