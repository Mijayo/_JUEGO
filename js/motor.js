var pantallas = [{
        "titular": "¿ Cuanto sabes de HTML ?",
        "pregunta": "¿Cuántas etiquetas header puede contener un documento?",
        "respuestas": [{
                "A": "Una unica etiqueta",
                "correcta": "0"
            },
            {
                "B": "Una por seccion",
                "correcta": "0"
            },
            {
                "C": "Cuantas sean necesarias",
                "correcta": "1"
            }
        ]
    },
    {
        "pregunta": "¿ Cual es el elemento invalido ? ",
        "respuestas": [{
                "A": "hgroup",
                "correcta": "0"
            },
            {
                "B": "progress",
                "correcta": "0"
            },
            {
                "C": "<post>",
                "correcta": "1"
            }
        ]
    },
    {
        "pregunta": "¿ Cual es el elemento invalido para un input ? ",
        "respuestas": [{
                "A": "source",
                "correcta": "0"
            },
            {
                "B": "pattern",
                "correcta": "0"
            },
            {
                "C": "required",
                "correcta": "1"
            }
        ]
    }
];

yoQueSe();

var spin = setInterval(yoQueSe, 1000);

function yoQueSe() {
    document.querySelector(".lds-ring").style.display = "block";
}

function consT() {
    document.getElementById("h1").innerHTML = pantallas[0].titular;
    // document.write('<div class="lds-ring">' + "<div></div>" + "<div></div>" + "<div></div>" + "<div></div>" + '</div>');
}

document.getElementById("h5").innerHTML = pantallas[0].pregunta;

pesada();

function pesada() {
    for (x = 0; x < pantallas.length; x++) {
        for (y = 0; y < pantallas[x].respuestas; y++) {
            document.querySelector(".txtA").innerHTML += pantallas[y].respuestas[x].A;
            document.querySelector(".txtB").innerHTML += pantallas[y].respuestas[x].B;
            document.querySelector(".txtC").innerHTML += pantallas[y].respuestas[x].C;
        }
    }
}



// var cont = document.write("<div><img class='foto' src=" + pantallas[0].img + "> </div>");2