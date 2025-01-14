// Accedemos al nodo del formulario
let formulario = document.getElementById('formulario');
// Ejecutamos un evento submit pra enviar los datos del formulario
formulario.addEventListener('submit', function (event) {
// Contadores para evaluar el número de respuestas y proporcionar un veredicto
let contadorLeve = 0;
let contadorGrave = 0;
let contadorMedio = 0;
// Nodo para mostrar el resultado
let resultado = document.getElementById('resultado');
    // Si nos válido no se envían
    event.preventDefault();
    // Accedemos a cada pregunta a través del 'name'
    let p1Seleccionada = document.querySelector('input[name = "pregunta1"]:checked');
    // Usamos un ternario. Si la pregunta tiene un valor elegido, pasamos el valor, si no pasamos 'null'
    let p1 = p1Seleccionada ? p1Seleccionada.value : null;
    let p5Seleccionada = document.querySelector('input[name = "pregunta5"]:checked');
    let p5 = p5Seleccionada ? p5Seleccionada.value : null;
    let p6Seleccionada = document.querySelector('input[name = "pregunta6"]:checked');
    let p6 = p6Seleccionada ? p6Seleccionada.value : null;
    let p7Seleccionada = document.querySelector('input[name = "pregunta7"]:checked');
    let p7 = p7Seleccionada ? p7Seleccionada.value : null;

    // Creamos un array de los valores seleccionados en los checkboxes por el usuario
    const p2 = Array.from(document.querySelectorAll('input[name="pregunta2"]:checked'))
        // Itera sobre cada elemento seleccionado y obtiene su valor (value).
        .map(checkbox => checkbox.value);
    const p3 = Array.from(document.querySelectorAll('input[name="pregunta3"]:checked'))
        .map(checkbox => checkbox.value);
    const p4 = Array.from(document.querySelectorAll('input[name="pregunta4"]:checked'))
        .map(checkbox => checkbox.value);

    // Alojamos los valores obtenidos de los inputs radios previamente en un array
    const valoresRadio = [p1, p5, p6, p7];
    // Recorremos ese array
    valoresRadio.forEach(valor=>{
        // Si la pregunta tiene un 'value' de 0 o 1 y no es null
        if(valor <= 1 && valor !== null){
        // el contador aumenta en uno
            contadorLeve++;
        }else if(valor > 1 && valor < 3 && valor !== null){
            contadorMedio++;
        }else if(valor >= 3 && valor !== null){
            contadorGrave++;
        }
    });

    // Alojamos los valores obtenidos de los inputs radios previamente en un array
    const valoresCheckBox = [p2, p3, p4];
    // Recorremos ese array.
    // Dependiendo de la cantidad de opciones seleccionadas,
    // aumentaremos un contador u otro
    valoresCheckBox.forEach(valor =>{
        if(valor.length === 1){
            contadorLeve++;
        }else if(valor.length === 2){
            contadorMedio++;
        }else if(valor.length > 2){
            contadorGrave++;
        }
    })

    // Resultados
    // Si el contador Grave es mayor que el resto, mostrará un mensaje
    if((contadorGrave > contadorMedio) && (contadorGrave > contadorLeve)){
        resultado.innerHTML = "&#x1F534; Riesgo Grave: Estás siendo víctima de acoso. Por favor, comunícaselo a tus profesores"
        resultado.style.fontWeight='700'
    // Si el contador Medio es mayor que el resto, mostrará un mensaje
    }else if ((contadorMedio > contadorGrave) && (contadorMedio > contadorLeve)){
        resultado.innerHTML = "&#x1F7E0; Riesgo medio: Ten cuidado, puede ir a más "
        resultado.style.fontWeight='700'
    // Si el contador Leve es mayor que el resto, mostrará un mensaje
    }else if((contadorLeve > contadorGrave) && (contadorLeve > contadorMedio)){
        resultado.innerHTML = "&#x2705; Riesgo Leve: No tienes ningún indicio de ser víctima de acoso"
        resultado.style.fontWeight='700'
    }


    /*console.log('pregunta 1:', p1)
    console.log('pregunta 2:', p2)
    console.log('pregunta 3:', p3)
    console.log('pregunta 4:', p4)
    console.log('pregunta 5:', p5)
    console.log('pregunta 6:', p6)
    console.log('pregunta 7:', p7)
    console.log('cont Leve:', contadorLeve)
    console.log('cont Medio:', contadorMedio)
    console.log('cont Grave:', contadorGrave)*/



})

