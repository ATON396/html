  class Pakiman
 {
   constructor(N, V, A)
   {
     this.imagen = new Image();
     this.nombre = N;
     this.Vida = V;
     this.Ataque = A;

     this.imagen.src = imagenes[this.nombre];
   }
   hablar()
   {
     alert(this.nombre);
   }
   mostrar()
   {
     document.write("<h2><strong>"  +  this.nombre +  "</strong><br /></h2>");
     document.body.appendChild(this.imagen);
     document.write("<p>");
     document.write("Vida:" + this.Vida + "<br />");
     document.write("   Ataque:" + this.Ataque);
     document.write("</p>");
   }

 }
