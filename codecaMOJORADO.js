class Billete
{
  constructor(V, C)
  {
    this.valor= V;
    this.cantidad= C;
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {

      div = Math.floor(dinero / bi.valor);
        if(div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push( new Billete( bi.valor, papeles));
        dinero = dinero - ( bi.valor * papeles);
    }
  }

  if(dinero > 0)
  {
    document.write( alert("Lo sentimos el cajero no pose esa cifra"));
  }
  else
  {
  for(var e of entregado)
    {
      r.innerHTML = r.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
    }
  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(50, 5000) );
caja.push( new Billete(20, 10000) );
caja.push( new Billete(10, 10000) );
var dinero = 210;
var div = 0;
var papeles= 0;


//Interaccciones con el teclado y el mouse//
var r = document.getElementById("resultado");
var b = document.getElementById("b1");
b.addEventListener("click", entregarDinero);
document.addEventListener("keydown", PulsarEnter);

function PulsarEnter(evento)
{
	if (evento.keyCode == 13)
	{
		b.click();
	}
};
