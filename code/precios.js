/* 
var precios = {
    primera: 10000*1.3,
    particular: 10000,
    presencial: 10000,
    sobreturno: 15000,
    online: 10000,
    osde: 1700,
    receta: 6000,
    certificado: 8000,
    informe: 25000,
    apto:  18000,
    noapto: 18000,
    portacion: 25000,
    caba: precios.particular*1.15,
    mes: "NOVIEMBRE 2023",
    // ... otros valores de precios ...
    // ver si defino variables directos con porcentajes  quisiera definir estas varibles de otra forma 
    // por ejemplo convirtiendo a partir del valor en dolar blue de la consulta a  dolares en peso argentinos 
    // y luego agregando ej particular  10 dolares receta fuera de turno 60% de la consulta particular certificado 80 % de
    //  la consulta particular sobreturno 50 % mas a la connsulta particular // 
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
var primeraparticular = precios.particular * 1.3; // precios.particularMas30
var preciosGba15 = obtenerPreciosGba(15); // Aumento del 15%
var preciosCABA = obtenerPreciosGba(30); // Aumento del 30%

*/
// Supongamos que el valor actual del dolar blue es de 200 pesos.
const valorDolarBlue = 1000;

// Precios base en dólares
const precioConsultaParticularDolares = 10; 
const osdecoseguro = 1700;

// Definimos los precios en pesos, aplicando la conversión del dolar blue.
var precios = {
    primera: (precioConsultaParticularDolares * 1.3) * valorDolarBlue,
    particular: precioConsultaParticularDolares * valorDolarBlue,
    presencial: precioConsultaParticularDolares * valorDolarBlue,
    sobreturno: (precioConsultaParticularDolares * 1.5) * valorDolarBlue,
    online: precioConsultaParticularDolares * valorDolarBlue,
    osde: (osdecoseguro),
    receta: (precioConsultaParticularDolares * 0.6) * valorDolarBlue, // Aquí añades 10 USD al precio de la consulta
    certificado: (precioConsultaParticularDolares * 0.8) * valorDolarBlue,
    informe: (precioConsultaParticularDolares * 2.5) * valorDolarBlue,
    apto: (precioConsultaParticularDolares + (precioConsultaParticularDolares * 0.8)) * valorDolarBlue,
    noapto: (precioConsultaParticularDolares + (precioConsultaParticularDolares * 0.8)) * valorDolarBlue,
    portacion: (precioConsultaParticularDolares * 2.5) * valorDolarBlue,
    // 'caba' se calcula después de la creación del objeto 'precios'
    mes: "NOVIEMBRE 2023"
};

// Ahora podemos añadir 'caba' al objeto 'precios'.
precios.caba = precios.particular * 1.15;

function obtenerPreciosGba(porcentaje) {
    var preciosGba = {};

    for (var precioKey in precios) {
        if (precios.hasOwnProperty(precioKey) && typeof precios[precioKey] === 'number') {
            var precioCba = precios[precioKey];
            var precioGba = precioCba * (1 + porcentaje / 100);
            preciosGba[precioKey] = precioGba;
        }
    }

    return preciosGba;
}

// Ahora puedes calcular los precios ajustados para GBA y CABA usando la función 'obtenerPreciosGba'.
var preciosGba15 = obtenerPreciosGba(15); // Aumento del 15% para GBA
var preciosCABA = obtenerPreciosGba(30); // Aumento del 30% para CABA
