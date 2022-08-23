var articulos = []
function auto (marca , modelo , anio) {
    this.marca = marca ;
    this.modelo = modelo ;
    this.anio = anio;
}
for (var i = 0 ; i < 3 ; i++ ) {
    marca = prompt("¿Que marca es?");
    modelo = prompt("¿Que modelo es ?");
    anio= prompt("¿De que año es?");
    var autoNuevo = new auto (marca , modelo , anio);
    articulos.push(autoNuevo);
}
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.anio >= 2022
});
  