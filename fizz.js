var numeros = 100;
var divisible = false;

for(var i= 1; i <= 100; i++)
{
  divisible= false;
  if(resultadoDe(i, 3))
  {
    document.write("Fizz ");
    divisible = true;
  }

  if (resultadoDe(i, 5))
  {
    document.write(" Buzz");
    divisible = true;
  }

  if(!divisible)
  {
    document.write(i);
  }
  document.write("<br />");


};


function resultadoDe(nuemero,divicion)
{
  if(nuemero % divicion == 0)
  {
    return true;
  }
  else
  {
  return false;
  }
};
