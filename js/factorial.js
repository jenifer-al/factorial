
// Buscamos las id

const input = document.getElementById("uno");
const cajaResultado = document.getElementById("resultado");
  


function calcularfactorial(){
// 1. Obtener número input y lo paso a entero
    let nuInput = parseInt(input.value);

// Validación:Si no se ha introducido nada, hay que avisar

if (isNaN(nuInput)) {
        cajaResultado.innerHTML = "Por favor, introduce un número válido.";
        return;
    }


    //2. Si el número es negativo, lo transformo a positivo con Math.abs

        if (nuInput < 0) {
        nuInput = Math.abs(nuInput);
        // "Repintamos" el valor corregido en el input para que el usuario lo vea
        input.value = nuInput; 
        cajaResultado.innerHTML = `<p class="text-orange-500 font-bold">¡Aviso: Se transformó el número a positivo! (${nuInput})</p>`;
    } else {    
       // Limpiamos el texto si era positivo desde el principio
        cajaResultado.innerHTML = "";
    }

    // 3. Variable para guardar el resultado de la multiplicación (empieza en 1)
    let resultadoFactorial = 1;

    // 4. El bucle empieza en el número introducido y baja de 1 en 1 hasta llegar a 1
    // Ejemplo si nuInput es 5: multiplicará por 5, luego por 4, luego por 3, 2 y 1
    for (let i = nuInput; i > 0; i--) {
        resultadoFactorial = resultadoFactorial * i;
    }

    // Especial: Si el usuario metió 0, el bucle no entra, pero resultadoFactorial se queda en 1 (lo cual es correcto)

    // 5. Se muestra el resultado final acumulado en el HTML
    cajaResultado.innerHTML += `El factorial de ${nuInput} es: <strong>${resultadoFactorial}</strong>`;
} 





  
      


  

   





