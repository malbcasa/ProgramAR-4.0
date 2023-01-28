

document.getElementById('sumar').addEventListener('click', () =>{
    let numeroA = document.getElementById('numero1').value;
    let numeroB = document.getElementById('numero2').value;

    let resultado = sumar(parseInt(numeroA),parseInt(numeroB));
    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = "block";
});

function sumar (a,b){
    return a+b;
}