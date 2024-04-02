document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('miBoton').addEventListener('click', function() {
        var inputColor = document.getElementById('miInput').value.toLowerCase(); 
        var colorHex; 
        switch (inputColor) {
            case 'rojo':
                colorHex = '#ff0000';
                break;
            case 'verde':
                colorHex = '#00ff00';
                break;
            case 'azul':
                colorHex = '#0000ff';
                break;
            case 'amarillo':
                colorHex = '#ffff00';
                break;
            case 'naranja':
                colorHex = '#ffa500';
                break;
            case 'rosa':
                colorHex = '#ff69b4';
                break;
            case 'morado':
                colorHex = '#800080';
                break;
            case 'turquesa':
                colorHex = '#40e0d0';
                break;
            default:
                colorHex = inputColor; 
        }
        document.body.style.backgroundColor = colorHex;
    });
});

