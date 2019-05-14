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

setTimeout("cambiaPantalla()", 2500);

var posicion = 0;
var record = 0;
var fallaste = 0;

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
            alert("selecciona una opcion para continuar");
            return;
        } else if (valorSeleccion.value == pantallas[posicion].correcta) {
            console.log("correcta");
            record++;
        } else {
            console.log("fallaste");
            fallaste++;
        }
        posicion++;
        muestraPreguntas(posicion);
        valorSeleccion.checked = false;
    } else {
        var valorSeleccion = document.querySelector('input[type=radio]:checked');
        if (!valorSeleccion) {
            console.log("algo");
            cambiaPantalla();
            return;
        } else if (valorSeleccion.value == pantallas[posicion].correcta) {
            console.log("correcta");
            record++;
        } else {
            console.log("fallaste");
            fallaste++;
        }
        document.getElementById("caja").innerHTML = "";
        document.getElementById("caja").innerHTML = `<div id='cajaFin'>
                                                        <div>
                                                        <div id='txtCorr'>Correctas</div>
                                                        </div>
                                                        ${'<p class="txtP"><span id="textRecord">'+record+'</span></p>'}
                                                        <div>
                                                        <div id='txtIncorr'>Incorrectas</div>
                                                        </div>
                                                        ${'<p class="txtP"><span id="textFallos">'+fallaste+'</span></p>'}
                                                    </div> `;
        btn.value = "volver";
    }
});