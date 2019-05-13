yoQueSe();

var spin = setInterval(yoQueSe, 1000);

function yoQueSe() {
    document.querySelector(".lds-ring").style.display = "block";
}

function consT() {
    document.getElementById("h1").innerHTML = pantallas[0].titular;
    // document.write('<div class="lds-ring">' + "<div></div>" + "<div></div>" + "<div></div>" + "<div></div>" + '</div>');
}



/*pesada();

function pesada() {
    for (x = 0; x < pantallas.length; x++) {
        for (y = 0; y < pantallas[x].respuestas; y++) {
            document.querySelector(".txtA").innerHTML += pantallas[y].respuestas[x].A;
            document.querySelector(".txtB").innerHTML += pantallas[y].respuestas[x].B;
            document.querySelector(".txtC").innerHTML += pantallas[y].respuestas[x].C;
        }
    }
}*/


var posicion = 0;
var record = 0;

muestraPreguntas(posicion);

function muestraPreguntas(posicion) {
    document.getElementById("h5").innerHTML = pantallas[posicion].pregunta;
    document.querySelector(".txtA").innerHTML = pantallas[posicion].A;
    document.querySelector(".txtB").innerHTML = pantallas[posicion].B;
    document.querySelector(".txtC").innerHTML = pantallas[posicion].C;
}

/*function siguiente() {

    var valorSeleccion = document.querySelector('input[type=radio]:checked');
    if (!valorSeleccion) {
        alert("algo");
        return;
    }

    if (valorSeleccion.value == preguntas[posicion].correcta) {
        record++;
    }
    posicion++;
    muestraPreguntas(posicion);
}*/

var btn = document.querySelector("#inpuT");

btn.addEventListener('click', function() {
    var valorSeleccion = document.querySelector('input[type=radio]:checked');

    if (!valorSeleccion) {
        alert("algo");
        return;
    }

    if (valorSeleccion.value == pantallas[posicion].correcta) {
        record++;
    }
    posicion++;
    muestraPreguntas(posicion);

});


// var cont = document.write("<div><img class='foto' src=" + pantallas[0].img + "> </div>");