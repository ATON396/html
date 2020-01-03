function resultadoEdad ()
{
  var age = document.getElementById("casilla");
  age = parseInt(age.value);

  if (age < 18)
  {
    R.innerHTML = R.innerHTML +P[0]+ "Menor de edad ";
  }
  else
  {
    R.innerHTML = R.innerHTML +P[0]+ "Mayor de edad ";
  }
};

var P =[];
P[0]= "Colombia: "

var R = document.getElementById("rr");
var b = document.getElementById("b1");
b.addEventListener("click", resultadoEdad);
document.addEventListener("keydown", PulsarEnter);

function PulsarEnter(evento)
{
	if (evento.keyCode == 13)
	{
		b.click();
	}
};
