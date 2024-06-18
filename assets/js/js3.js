document.getElementById('try').addEventListener('click', function() {
    let numero1 = document.querySelector('#o1').value;
    let numero2 = document.querySelector('#o2').value;
    let numero3 = document.querySelector('#o3').value;

    let clave = numero1 + numero2 + numero3;

    let mensaje = document.getElementById('mensaje');

    if (clave === '911') {
        mensaje.innerHTML = 'La Clave Nro 1 es correcta :D';
        mensaje.style.color = '#1a1a1a';
    } else if (clave === '115') {
        mensaje.innerHTML = 'La Clave Nro 2 es correcta :D';
        mensaje.style.color = '#1a1a1a'; 
    } else {
        mensaje.innerHTML = 'La clave es incorrecta, intenta nuevamente :(';
        mensaje.style.color = '#ff0000'; 
    }
});