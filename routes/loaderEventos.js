const express = require('express');

const router = express.Router();
require('../models/Evento');

const arregloUniandes = require('../CalendarioUniandesDepurado.json');
const arregloTadeo = require('../CalendarioTadeoDepurado.json');
const arregloRosario = require('../CalendarioRosarioDepurado.json');
const Evento = require('../models/Evento');
