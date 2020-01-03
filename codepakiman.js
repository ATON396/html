
var imagenes = [];
imagenes["Cauchin"] = "vaca1.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
imagenes["Lobo"] = "lobo.png";

var coleccion = [];
coleccion.push(new Pakiman("Lobo", 600, 1000+ " N"));
coleccion.push(new Pakiman("Cauchin", 100, 80+ " N"));
coleccion.push(new Pakiman("Pokacho", 60, 100+ " N"));
coleccion.push(new Pakiman("Tocinauro", 90, 90+ " N"));


for(var personaje of coleccion)
{
personaje.mostrar();
}
