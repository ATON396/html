var Texto = document.getElementById("Texto_lineas");
var boton = document.getElementById("botoncito")
boton.addEventListener("click", dibujoPorClick );

 var D = document.getElementById("DIBUJOO12");
 var Lienzo = D.getContext("2d");
 var ancho = D.width;

 function dibujoPorClick()
 {
   var xxx = parseInt(Texto.value);
   var Lineas = xxx;
   var L = 0;
   var yi, xf, yi, yf;
   var nxf , nyf;
   var color_Mayas = "green";
   var espacio = ancho / Lineas;

   for(L=0; L < Lineas; L++)
   {
      yi = espacio * L;
      xf = espacio * (L + 1);
      xi = espacio * L;
      xf = espacio * (L + 1);
      nxf = 299 - xf;
      nyf = 299 - yf;
      nyf = 299 - yf;
      nxf = 299 - xf;
      dibujarLinea(color_Mayas, xi, 300, 300, nyf);
      dibujarLinea(color_Mayas, 0, xf, nxf, 0);
      dibujarLinea(color_Mayas, 0, xf, yi, 300);
      dibujarLinea(color_Mayas, xi, 0, 300, yf);
      dibujarLinea(color_Mayas, yi, 300, 300, nxf);
      dibujarLinea(color_Mayas, yi, 0, 300, xf);

      dibujarLinea( "orange",1, 1, 1, 299);
      dibujarLinea( "orange",299, 1, 1, 1);
      dibujarLinea( "orange",1, 299, 299, 299);
      dibujarLinea( "orange",299, 299, 299, 1);

   }

   function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
   {
     Lienzo.beginPath();
     Lienzo.strokeStyle = color;
     Lienzo.moveTo(xinicial, yinicial);
     Lienzo.lineTo(xfinal, yfinal);
     Lienzo.stroke();
     Lienzo.closePath();
   }

 }
