document.addEventListener('DOMContentLoaded', function() {
    inicio.iniciarJuego();
}, false);

var inicio = {
    iniciarJuego: function () {
        ajax.cargarArchivo("/mapas/cendero.json"); 
        teclado.iniciar();
    console.log("El Juego Empezo");
        dimensiones.iniciar();
        mando.iniciar();
    inicio.recargarTiles();
        buclePrimario.iterar();
  },
  recargarTiles: function() {
    document.getElementById("juego").innerHTML = "";
    for (var y = 0; y < dimensiones.obtenerTilesVertical(); y++) {
       for (var x = 0; x < dimensiones.obtenerTilesHorizontal(); x++) {
           var r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
       }
    }
  }
};

var dimensiones = {
  ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
  ladoTiles: 100,
  escala: 1,
  iniciar: function() {
    window.addEventListener("resize", function(evento) {
        dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        console.log("Ancho: " + dimensiones.ancho + " Alto: " + dimensiones.alto);
        inicio.recargarTiles();
    });
  },
  obtenerTilesHorizontal: function() {
    var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
    return Math.ceil((dimensiones.ancho - ladoFinal) / ladoFinal);
  },
  obtenerTilesVertical: function() {
var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
    return Math.ceil((dimensiones.alto - ladoFinal) / ladoFinal);
  },
  obtenerTilesTotal: function() {
    return dimensiones.obtenerTilesHorizontal() * dimensiones.obtenerTilesVertical();
  }
};
