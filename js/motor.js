var posicion = 0;
var record = 0;
var fallaste = 0;
var nPre = 1;

yoQueSe();

var spin = setInterval(yoQueSe, 1000);

function yoQueSe() {
    document.querySelector(".lds-ring").style.display = "block";
}

function consT() {
    document.getElementById("h1").innerHTML = pantallas[0].titular;
}

function cambiaPantalla() {
    document.querySelector(".contSpiner").style.display = "none";
    document.querySelector(".conT").style.display = "block";
}

setTimeout("cambiaPantalla()", 1800);

muestraPreguntas(posicion);

function muestraPreguntas(posicion) {
    document.getElementById("nPre").innerText = nPre;
    document.getElementById("jSonNP").innerText = pantallas.length;
    document.getElementById("h5").innerText = pantallas[posicion].pregunta;
    document.querySelector(".txtA").innerText = pantallas[posicion].A;
    document.querySelector(".txtB").innerText = pantallas[posicion].B;
    document.querySelector(".txtC").innerText = pantallas[posicion].C;
}

// Boton enviar

var btn = document.querySelector("#btnEnv");

btn.addEventListener('click', function() {

    var valorSeleccion;

    if (posicion < pantallas.length - 1) {
        valorSeleccion = document.querySelector('input[type=radio]:checked');
        document.getElementById("nPre").innerText = nPre++;
        if (!valorSeleccion) {
            alert("selecciona una opcion para continuar");
            // con nPre-- no nos suma 1 cuando nos equivocamos y asi resolvemos el BUG
            nPre--;
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
        valorSeleccion = document.querySelector('input[type=radio]:checked');
        if (!valorSeleccion) {
            console.log("algo");
            btn = location.reload();
            return;
        } else if (valorSeleccion.value == pantallas[posicion].correcta) {
            console.log("correcta");
            record++;
        } else {
            console.log("fallaste");
            fallaste++;
        }
        document.getElementById("caja").innerHTML = "";
        document.getElementById("caja").innerHTML = `<div>
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