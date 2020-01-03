
var D = document.getElementById("espacio1");
var pizarra = D.getContext("2d");


document.addEventListener("keydown", moverLobo);

var lobo =
{
  url:"lobo.png",
  cargaOK: false
};
var xLobo = 0;
var yLobo = 0;

var fondo =
{
  url: "tile1.png",
  cargaOK:false
};

var vaca =
{
  url:"vaca1.png",
  cargaOK: false
};
var xVaca = new Array()
var yVaca = new Array()

var cerdo =
{
  url:"cerdo.png",
  cargaOK: false
};
var xCerdo = new Array()
var yCerdo = new Array()


var pollo =
{
  url:"pollo.png",
  cargaOK: false
};
var xPollo = new Array()
var yPollo = new Array()



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

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

var cantidad_vacas = aleatorio (1, 10);
var cantidad_pollos = aleatorio (1, 10);
var cantidad_cerdos = aleatorio (1, 10);
console.log("cantidad de vacas" + cantidad_vacas);
console.log("cantidad de pollos" + cantidad_pollos);
console.log("cantidad de cerdos" + cantidad_cerdos);

function moverLobo(evento)
{
  var movimiento = 50;
  var teclas =
  {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };

  switch (evento.keyCode)
  {
    case teclas.UP:
    if (yLobo > 0)
    {
      yLobo = yLobo - movimiento;
      dibujar();
    }
      console.log ("ARRIBA");
      break;

      case teclas.DOWN:
      if (yLobo < 420)
      {
        yLobo = yLobo + movimiento;
        dibujar();
      }
        console.log ("ABAJO");
        break;

        case teclas.LEFT:
        if (xLobo > 0)
        {
          xLobo = xLobo - movimiento;
          dibujar();
        }
          console.log ("IZQUIERDA");
          break;

          case teclas.RIGHT:
          if (xLobo < 420)
          {
            xLobo = xLobo + movimiento;
            dibujar();
          }
            console.log ("DERECHA");
            break;
            default:
             console.log("Tecla incorrecta"+ evento.Key);
             break;

  }
}

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  mantenerPosicion();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  mantenerPosicion();
}

function cargarLobos()
{
  lobo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  mantenerPosicion();
}


function mantenerPosicion()
{
  if (vaca.cargaOK)
  {
  for (var i = 0; i < cantidad_vacas; i++)
  {
  var x = aleatorio(0, 6);
  var y = aleatorio(0, 6);
  var x = x * 70;
  var y = y * 70;
  xVaca[i]= x;
  yVaca[i]= y;
   }
  }
  if (cerdo.cargaOK)
  {
  for (var i = 0; i < cantidad_cerdos; i++)
  {
  var x = aleatorio(0, 6);
  var y = aleatorio(0, 6);
  var x = x * 70;
  var y = y * 70;
  xCerdo[i]= x;
  yCerdo[i]= y;
   }
  }
  if (pollo.cargaOK)
  {
  for (var i = 0; i < cantidad_pollos; i++)
  {
  var x = aleatorio(0, 6);
  var y = aleatorio(0, 6);
  var x = x * 70;
  var y = y * 70;
  xPollo[i]= x;
  yPollo[i]= y;
   }
  }
}

 var cantidad = aleatorio(1, 30);

function dibujar()
{
  if(fondo.cargaOK)
  {
    pizarra.drawImage(fondo.imagen, 0, 0);
  }

  if(lobo.cargaOK)
  {
    pizarra.drawImage(lobo.imagen, xLobo, yLobo);
  }

  if(vaca.cargaOK)
  {
    for(var i=0; i < cantidad; i++)
    {
      pizarra.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
    }
  }

    if(cerdo.cargaOK)
    {
      for(var i=0; i < cantidad; i++)
      {
        pizarra.drawImage(cerdo.imagen,xCerdo[i], yCerdo[i]);
      }
     }

      if(pollo.cargaOK)
      {
        for(var i=0; i < cantidad; i++)
        {
        pizarra.drawImage(pollo.imagen,xPollo[i], yPollo[i]);
        }

      }
  }

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
