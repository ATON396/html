
var D = document.getElementById("espacio1");
var pizarra = D.getContext("2d");


var vaca =
{
  url:"vaca1.png",
  cargaOK: false
};

var cerdo =
{
  url:"cerdo.png",
  cargaOK: false
};

var lobo =
{
  url:"lobo.png",
  cargaOK: false
};

var fondo =
{
  url: "tile1.png",
  cargaOK:false
};

var cantidad = aleatorio (1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobos);




function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarLobos()
{
  lobo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    pizarra.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    for(var V=0; V < cantidad; V++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      pizarra.drawImage(vaca.imagen, x, y);
    }
  }

    if(cerdo.cargaOK)
    {
      for(var V=0; V < cantidad; V++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
        pizarra.drawImage(cerdo.imagen, x, y);
      }
     }

     if(lobo.cargaOK)
     {
       for(var V=0; V < cantidad; V++)
       {
         var x = aleatorio(0, 7);
         var y = aleatorio(0, 7);
         var x = x * 60;
         var y = y * 60;
         pizarra.drawImage(lobo.imagen, x, y);
       }
      }
  }

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
