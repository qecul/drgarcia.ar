var precios = {
    particular: 10000,
    presencial: 10000,
    sobreturno: 15000,
    online: 10000,
    receta: 6000,
    certificado: 8000,
    informe: 25000,
    apto:  18000,
    noapto: 18000,
    portacion: 25000,
    mes: "OCTUBRE 2023",
    mes: "NOVIEMBRE 2023",
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
