
// formula y calculos

const btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', obtenerValor);
const inputMonto = document.getElementById('monto');
const inputPorcentaje = document.getElementById('porcentaje');
const inputCantMeses = document.getElementById('cantMeses');

inputMonto.addEventListener('keyup', function (event) {
  soloNumeros(this);
  validarNumero(event, this);
});

inputMonto.addEventListener('blur', function () {
  quitarMensajeError(this);
});

inputPorcentaje.addEventListener('keyup', function (event) {
  soloNumeros(this);
  validarNumero(event, this);
});

inputPorcentaje.addEventListener('blur', function () {
  quitarMensajeError(this);
});

inputCantMeses.addEventListener('keyup', function (event) {
  soloNumeros(this);
  validarNumero(event, this);
});

inputCantMeses.addEventListener('blur', function () {
  quitarMensajeError(this);
});

function obtenerValor() {
  const cantidadMeses = parseInt(inputCantMeses.value);

  if (cantidadMeses <= 0) {
    alert("La cantidad de meses debe ser mayor que 0.");
    inputMonto.value = "";
    inputPorcentaje.value = "";
    inputCantMeses.value = "";
    return; 
  }

  const valorInicial = parseFloat(inputMonto.value);
  const tasaInteresAnual = parseFloat(inputPorcentaje.value) / 12 / 100;
  let valorActual = valorInicial * Math.pow(1 + tasaInteresAnual, cantidadMeses);
  const gananciaTotal = valorActual - valorInicial;

  if (valorActual === Infinity) {
    alert("El valor es infinito.");
  } else if (cantidadMeses === 1) {
    document.getElementById("descripcionTotal").textContent = " *Valor después de " + cantidadMeses + " mes";
  } else {
    document.getElementById("descripcionTotal").textContent = " *Valor después de " + cantidadMeses + " meses";
  }
  document.getElementById("totalAnual").textContent = '$' + valorActual.toFixed(2);
}




//reset:
const btnReset = document.getElementById('reset');
btnReset.addEventListener('click', resetearFormula);

function resetearFormula() {
  inputMonto.value = "";
  inputPorcentaje.value = "";
  inputCantMeses.value = "";
  document.getElementById("totalAnual").textContent = "";
  document.getElementById("descripcionTotal").textContent = ""
}


// validar reg
function validarNumero(event, input) {
  const teclaPresionada = event.key;

  if (!/^[\d.]+$/.test(teclaPresionada)) {
    event.preventDefault();
    input.setCustomValidity("Solo se permiten números");
    input.reportValidity();
  } else {
    input.setCustomValidity("");
  }
}

function quitarMensajeError(input) {
  input.setCustomValidity("");
}

function soloNumeros(input) {
  input.value = input.value.replace(/[^\d]/g, '');
}



// Fullscreen


const fullscreenBtn = document.getElementById('fullscreen-btn');
const seccionA = document.getElementById('BOTEM');
const seccionB = document.getElementById('BotemInfo');
const inputsMod = [
  document.getElementById('monto'),
  document.getElementById('porcentaje'),
  document.getElementById('cantMeses')
];

const cambiarInputs = (fullscreen) => {
  inputsMod.forEach(inputs => {
    inputs.style.height = fullscreen ? '45px' : ''; // Cambia estilo solo si fullscreen es true

  });
};

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    seccionA.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement === seccionA) {
    seccionA.style.display = 'flex';
    seccionA.style.justifyContent = 'center';
    seccionA.style.alignItems = '';
    seccionB.style.backgroundColor = 'rgb(24 19 39)';
    document.getElementById('cerrar-fullscreen').style.display = 'block';
    document.getElementById('container-fullscry').style.display = 'inline-flex';

    cambiarInputs(true);
    seccionA.style.display = '';
    seccionA.style.justifyContent = '';
    seccionA.style.alignItems = '';
    seccionB.style.backgroundColor = '';

 
    
    cambiarInputs(false);

    
  } else {
    document.getElementById('cerrar-fullscreen').style.display = 'none';
    document.getElementById('container-fullscry').style.display = 'none';
  }
  
});

// off fullscreen
const cerrarPantallaCompletaBtn = document.getElementById('cerrar-fullscreen');
cerrarPantallaCompletaBtn.addEventListener('click', () => {
  document.exitFullscreen();


});



