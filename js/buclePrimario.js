//namepace == Espacio de Nombres
//main loop == Bucle principal
//aps == actualizaciónes por segundo
//fps == frames por segundo
//1 segundo == 1000 milisegundos

var buclePrimario = {
  idEjecucion: null,
  ultimoRegistro: 0,
  aps: 0,
  fps: 0,
  iterar: function(registroTemporal) {
    buclePrimario.idEjecucion = window.requestAnimationFrame(buclePrimario.iterar);
    buclePrimario.actualizar(registroTemporal);
    buclePrimario.dibujar(registroTemporal);
    if(registroTemporal - buclePrimario.ultimoRegistro > 999) {
       buclePrimario.ultimoRegistro = registroTemporal;
       console.log("APS: " + buclePrimario.aps + "FPS: " + buclePrimario.fps);
       buclePrimario.aps = 0;
        buclePrimario.fps = 0;
    }
  },
  detener: function() {
    
  },
    actualizar: function (registroTemporal) {
        teclado.reiniciar();
        mando.actualizar();
    buclePrimario.aps++;
  },
  dibujar: function(registroTemporal) {
    buclePrimario.fps++;
  }
};