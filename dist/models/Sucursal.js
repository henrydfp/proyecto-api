"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Clinica = _interopRequireDefault(require("./Clinica"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modulo
//conexion de la bd
var Sucursal = _database.sequelize.define('sucursals', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomsucursal: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  dirsucursal: {
    type: _sequelize["default"].STRING(100),
    allowNull: false
  },
  telsucursal: {
    type: _sequelize["default"].STRING(11),
    allowNull: false
  },
  nrosillas: {
    type: _sequelize["default"].INTEGER,
    allowNull: true
  },
  clinicaid: {
    type: _sequelize["default"].INTEGER
  },
  estado: {
    type: _sequelize["default"].BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false
});

_Clinica["default"].hasMany(Sucursal, {
  foreignKey: 'clinicaid',
  sourceKey: 'id',
  as: "sucursals"
});

Sucursal.belongsTo(_Clinica["default"], {
  foreignKey: "clinicaid",
  sourceKey: 'id',
  as: "clinica"
});
var _default = Sucursal;
exports["default"] = _default;