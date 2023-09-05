var precios = {
    particular: 8000,
    presencial: 10000,
    sobreturno: 12000,
    online: 8000,
    osde: 1300,
    receta: 4000,
    certificado: 6000,
    informe: 18000,
    apto:  14000,
    noapto: 14000,
    portacion: 18000,
    mes: "SEPTIEMBRE 2023",
    // ... otros valores de precios ...
};

function obtenerPreciosGba(porcentaje) {
    var preciosGba = {};

    for (var precioKey in precios) {
        if (precios.hasOwnProperty(precioKey)) {
            var precioCba = precios[precioKey];
            var precioGba = precioCba * (1 + porcentaje / 100);
            preciosGba[precioKey] = precioGba; // Aquí se corrige el error
        }
    }

    return preciosGba;
}

var preciosGba15 = obtenerPreciosGba(15); // Aumento del 15%
var preciosCABA = obtenerPreciosGba(30); // Aumento del 30%
