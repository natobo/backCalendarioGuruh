const express = require('express');

const router = express.Router();

const arregloUniandes = require('../CalendarioUniandesDepurado.json');
const arregloTadeo = require('../CalendarioTadeoDepurado.json');
const arregloRosario = require('../CalendarioRosarioDepurado.json');

// const Evento = require('../models/Evento');
const Universidad = require('../models/Universidad');

router.post('/universidad', async (req, res) => {
  const postUniversidad = new Universidad({
    Nombre: req.body.Nombre,
    Tipo: req.body.Tipo,
    Eventos: req.body.Eventos,
  });
  console.log(postUniversidad);
  try {
    const savedUniversidad = await postUniversidad.save();
    res.json(savedUniversidad);
  } catch (error) {
    res.json({ message: error });
  }
});

// Rutas para retornar informacion de universidades
router.get('/universidad', async (req, res) => {
  try {
    const resUniversidades = await Universidad.find();
    res.json(resUniversidades);
  } catch (error) {
    res.json({ message: error });
  }
});
router.get('/universidad/:uniId', async (req, res) => {
  try {
    const resUniversidad = await Universidad.findById(req.params.uniId);
    res.json(resUniversidad);
  } catch (error) {
    res.json({ message: error });
  }
});
router.get('/universidad/:uniId/eventos', async (req, res) => {
  try {
    const resUniversidad = await Universidad.findById(req.params.uniId);
    res.json(resUniversidad.Eventos);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
