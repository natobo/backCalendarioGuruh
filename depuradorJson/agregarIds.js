const fs = require('fs');
const test = require('./CalendarioAcademicoRosario.json');

const arrayJsonDepurados = [];
let newJson;
let id = 1;

test.forEach(p => {
  newJson = {
    id,
    Nombre: p.Nombre,
    FechaInicio: p.FechaInicio,
    FechaFin: p.FechaCierre,
    numNotificaciones: 0,
    Tipo: p.Tipo,
    Ubicacion: p.Ubicacion,
    Notificaciones: [],
  };
  arrayJsonDepurados.push(newJson);
  id += 1;
});

// console.log(arrayJsonDepurados);
const jsonPorImprimir = [];
arrayJsonDepurados.forEach(p => jsonPorImprimir.push(JSON.stringify(p)));
fs.writeFileSync('CalendarioRosarioDepurado.json', jsonPorImprimir);
