"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"](process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: false
  }
});
exports.sequelize = sequelize;
sequelize.authenticate().then(function () {
  console.log('La conexión se ha establecido con éxito');
})["catch"](function (err) {
  console.log('No se puede conectar a la base de datos:', err);
});