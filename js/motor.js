yoQueSe();

var spin = setInterval(yoQueSe, 1000);

function yoQueSe() {
    document.querySelector(".lds-ring").style.display = "block";
}

function consT() {
    document.getElementById("h1").innerHTML = pantallas[0].titular;
    // document.write('<div class="lds-ring">' + "<div></div>" + "<div></div>" + "<div></div>" + "<div></div>" + '</div>');
}

function cambiaPantalla() {
    document.querySelector(".contI").style.display = "none";
    document.querySelector(".conT").style.display = "block";
}

setTimeout("cambiaPantalla()", 2000);

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

var posicion = 0;
var record = 0;

muestraPreguntas(posicion);

function muestraPreguntas(posicion) {
    document.getElementById("h5").innerText = pantallas[posicion].pregunta;
    document.querySelector(".txtA").innerText = pantallas[posicion].A;
    document.querySelector(".txtB").innerText = pantallas[posicion].B;
    document.querySelector(".txtC").innerText = pantallas[posicion].C;
}

var btn = document.querySelector("#inpuT");

btn.addEventListener('click', function() {

    if (posicion < pantallas.length - 1) {
        var valorSeleccion = document.querySelector('input[type=radio]:checked');

        if (!valorSeleccion) {
            console.log("algo");
            return;
        } else if (valorSeleccion.value == pantallas[posicion].correcta) {
            console.log("correcta");
            record++;
        } else {
            console.log("fallaste");
        }
        posicion++;
        muestraPreguntas(posicion);
        valorSeleccion.checked = false;
    } else {
        var valorSeleccion = document.querySelector('input[type=radio]:checked');
        if (!valorSeleccion) {
            console.log("algo");
            return;
        } else if (valorSeleccion.value == pantallas[posicion].correcta) {
            console.log("correcta");
            record++;
        } else {
            console.log("fallaste");
        }
        document.getElementById("caja").innerHTML = "";
        document.getElementById("caja").innerHTML = `<div> ${record}</div>`;
    }
});


// var cont = document.write("<div><img class='foto' src=" + pantallas[0].img + "> </div>");