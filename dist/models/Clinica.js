"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modulo
//conexion de la bd
var Clinica = _database.sequelize.define('clinicas', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rucclinica: {
    type: _sequelize["default"].STRING(11),
    allowNull: false
  },
  nomclinica: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  dirclinica: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  telclinica: {
    type: _sequelize["default"].STRING(12),
    allowNull: false
  },
  logoclinica: {
    type: _sequelize["default"].STRING(50),
    allowNull: true
  },
  estado: {
    type: _sequelize["default"].BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false
});

var _default = Clinica;
exports["default"] = _default;