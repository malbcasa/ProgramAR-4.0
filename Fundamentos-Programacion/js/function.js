/** console.log('Hola mundo!');
 * let numero1 = 3;
 * let numero2 = 4;
 * 
 * let resultado = numero1 + numero2;
 * 
 * console.log('La suma de numero1 y numero2 es ' + resultado);
 * */

/**
document.getElementById('boton').onclick = () => {
    console.log('Capturamos el evento click');
    
} */

/**
document.addEventListener('click',()=>{
    console.log('');
    document.getElementById('demo').innerHTML = 'Estamos probando nuestro primer evento';
}); */

document.getElementById('boton').addEventListener('click', () => {
    console.log('Hola mundo desde el event listener');
    document.getElementById('demo').innerHTML = 'Estamos probando nuestro primer evento';
});

document.getElementById('boton_color').addEventListener('click', () => {
    document.body.style.background = '#FF0000';
});

document.getElementById('boton_default').addEventListener('click', () => {
    document.body.style.background = 'blue';
});