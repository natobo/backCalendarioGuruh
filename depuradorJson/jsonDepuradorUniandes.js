const fs = require('fs');
const test = require('./CalendarioAcademicoUniandes.json');

const arrayJsonDepurados = [];
let newJson;
let newJson2;
let id = 1;

function convertirStringMesAFecha(stringFecha) {
  let rta;
  if (stringFecha) {
    if (stringFecha.includes('Ene.')) {
      rta = stringFecha.replace('Ene.', '2020-01-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Feb.')) {
      rta = stringFecha.replace('Feb.', '2020-02-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Abr.')) {
      rta = stringFecha.replace('Abr.', '2020-04-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Mar.')) {
      rta = stringFecha.replace('Mar.', '2020-03-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('May.')) {
      rta = stringFecha.replace('May.', '2020-05-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Jun.')) {
      rta = stringFecha.replace('Jun.', '2020-06-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Jul.')) {
      rta = stringFecha.replace('Ju;.', '2020-07-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Ago.')) {
      rta = stringFecha.replace('Ago.', '2020-08-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Sep.')) {
      rta = stringFecha.replace('Sep.', '2020-09-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Oct.')) {
      rta = stringFecha.replace('Oct.', '2020-10-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Nov.')) {
      rta = stringFecha.replace('Nov.', '2020-11-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
    if (stringFecha.includes('Dic.')) {
      rta = stringFecha.replace('Dic.', '2020-12-').trim();
      rta = rta.split(' ').join('');
      return rta;
    }
  }
  return rta;
}

function invertirFecha(stringFechaInversa) {
  if (stringFechaInversa != null) {
    const arregloTmp = stringFechaInversa.split('-');
    const nuevafecha = `${arregloTmp[2]}-${arregloTmp[1]}-${arregloTmp[0]}`;
    return nuevafecha;
  }
}

test.forEach(p => {
  if (p.Fecha2020_1 && p.Fecha2020_2) {
    newJson = {
      id,
      Nombre: p.Actividad,
      Ubicacion: 'Cra. 1 #18a-12, Bogota',
      FechaInicio: convertirStringMesAFecha(p.Fecha2020_1.split('-')[0]),
      FechaFin: convertirStringMesAFecha(p.Fecha2020_1.split('-')[1])
        ? convertirStringMesAFecha(p.Fecha2020_1.split('-')[1])
        : convertirStringMesAFecha(p.Fecha2020_1.split('-')[0]),
      numNotificaciones: 0,
      Tipo: 'GENERAL',
      Notificaciones: [],
    };
    id += 1;
    arrayJsonDepurados.push(newJson);
    newJson2 = {
      id,
      Nombre: p.Actividad,
      Ubicacion: 'Cra. 1 #18a-12, Bogota',
      FechaInicio: convertirStringMesAFecha(p.Fecha2020_2.split('-')[0]),
      FechaFin: convertirStringMesAFecha(p.Fecha2020_2.split('-')[1])
        ? convertirStringMesAFecha(p.Fecha2020_2.split('-')[1])
        : convertirStringMesAFecha(p.Fecha2020_2.split('-')[0]),
      numNotificaciones: 0,
      Tipo: 'GENERAL',
      Notificaciones: [],
    };
    id += 1;
    arrayJsonDepurados.push(newJson2);
  } else if (p.Fecha2020_1) {
    newJson = {
      id,
      Nombre: p.Actividad,
      Ubicacion: 'Cra. 1 #18a-12, Bogota',
      FechaInicio: convertirStringMesAFecha(p.Fecha2020_1.split('-')[0]),
      FechaFin: convertirStringMesAFecha(p.Fecha2020_1.split('-')[1])
        ? convertirStringMesAFecha(p.Fecha2020_1.split('-')[1])
        : convertirStringMesAFecha(p.Fecha2020_1.split('-')[0]),
      numNotificaciones: 0,
      Tipo: 'GENERAL',
      Notificaciones: [],
    };
    id += 1;
    arrayJsonDepurados.push(newJson);
  } else if (p.Fecha2020_2) {
    newJson2 = {
      id,
      Nombre: p.Actividad,
      Ubicacion: 'Cra. 1 #18a-12, Bogota',
      FechaInicio: convertirStringMesAFecha(p.Fecha2020_2.split('-')[0]),
      FechaFin: convertirStringMesAFecha(p.Fecha2020_2.split('-')[1])
        ? convertirStringMesAFecha(p.Fecha2020_2.split('-')[1])
        : convertirStringMesAFecha(p.Fecha2020_2.split('-')[0]),
      numNotificaciones: 0,
      Tipo: 'GENERAL',
      Notificaciones: [],
    };
    id += 1;
    arrayJsonDepurados.push(newJson2);
  } else if (p.Fecha2020_1_Medicina && p.Fecha2020_2_Medicina) {
    newJson = {
      id,
      Nombre: p.Actividad,
      Ubicacion: 'Cra. 1 #18a-12, Bogota',
      FechaInicio: convertirStringMesAFecha(
        p.Fecha2020_1_Medicina.split('-')[0]
      ),
      FechaFin: convertirStringMesAFecha(p.Fecha2020_1_Medicina.split('-')[1])
        ? convertirStringMesAFecha(p.Fecha2020_1_Medicina.split('-')[1])
        : convertirStringMesAFecha(p.Fecha2020_1_Medicina.split('-')[0]),
      numNotificaciones: 0,
      Tipo: 'MEDICINA',
      Notificaciones: [],
    };
    id += 1;
    arrayJsonDepurados.push(newJson);
    newJson2 = {
      id,
      Nombre: p.Actividad,
      Ubicacion: 'Cra. 1 #18a-12, Bogota',
      FechaInicio: convertirStringMesAFecha(
        p.Fecha2020_2_Medicina.split('-')[0]
      ),
      FechaFin: convertirStringMesAFecha(p.Fecha2020_2_Medicina.split('-')[1])
        ? convertirStringMesAFecha(p.Fecha2020_2_Medicina.split('-')[1])
        : convertirStringMesAFecha(p.Fecha2020_2_Medicina.split('-')[0]),
      numNotificaciones: 0,
      Tipo: 'MEDICINA',
      Notificaciones: [],
    };
    id += 1;
    arrayJsonDepurados.push(newJson2);
  } else if (p.Fecha2020_1_Medicina1) {
    newJson = {
      id,
      Nombre: p.Actividad,
      Ubicacion: 'Cra. 1 #18a-12, Bogota',
      FechaInicio: convertirStringMesAFecha(
        p.Fecha2020_1_Medicina.split('-')[0]
      ),
      FechaFin: convertirStringMesAFecha(p.Fecha2020_1_Medicina.split('-')[1])
        ? convertirStringMesAFecha(p.Fecha2020_1_Medicina.split('-')[1])
        : convertirStringMesAFecha(p.Fecha2020_1_Medicina.split('-')[0]),
      numNotificaciones: 0,
      Tipo: 'MEDICINA',
      Notificaciones: [],
    };
    id += 1;
    arrayJsonDepurados.push(newJson);
  } else if (p.Fecha2020_2_Medicina) {
    newJson2 = {
      id,
      Nombre: p.Actividad,
      Ubicacion: 'Cra. 1 #18a-12, Bogota',
      FechaInicio: convertirStringMesAFecha(
        p.Fecha2020_2_Medicina.split('-')[0]
      ),
      FechaFin: convertirStringMesAFecha(p.Fecha2020_2_Medicina.split('-')[1])
        ? convertirStringMesAFecha(p.Fecha2020_2_Medicina.split('-')[1])
        : convertirStringMesAFecha(p.Fecha2020_2_Medicina.split('-')[0]),
      numNotificaciones: 0,
      Tipo: 'MEDICINA',
      Notificaciones: [],
    };
    id += 1;
    arrayJsonDepurados.push(newJson2);
  }
});

// Arregla las fechas de cada Json
arrayJsonDepurados.forEach(p => (p.FechaInicio = invertirFecha(p.FechaInicio)));
arrayJsonDepurados.forEach(p => (p.FechaFin = invertirFecha(p.FechaFin)));

// console.log(arrayJsonDepurados);
const jsonPorImprimir = [];
arrayJsonDepurados.forEach(p => jsonPorImprimir.push(JSON.stringify(p)));
fs.writeFileSync('CalendarioUniandesDepurado.json', jsonPorImprimir);
