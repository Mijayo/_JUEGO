// alert("HEllo");

var posicion = 0;
var record = 0;
muestrapreguntas(posicion);

function muestrapreguntas(posicion) {
    document.getElementById("respuesta1").innerHTML = preguntas[posicion].respuesta1;
    document.getElementById("respuesta2").innerHTML = preguntas[posicion].respuesta2;
    document.getElementById("respuesta3").innerHTML = preguntas[posicion].respuesta3;
    document.getElementById("respuesta4").innerHTML = preguntas[posicion].respuesta4;
}

function siguiente() {

    var valorSeleccion = document.querySelector('input[type=radio]:checked');
    if (!valorSeleccion) {
        alert("alogo");
        return;
    }

    if (valorSeleccion.value == preguntas[posicion].correcta) {
        record++;
    }
    posicion++;
    muestrapreguntas(posicion);
}




// "respuesta": [{
//         "res": "un uno",
//         "correcta": 0
//     },
//     {
//         "res": "un dos",
//         "correcta": 1
//     }
// ]