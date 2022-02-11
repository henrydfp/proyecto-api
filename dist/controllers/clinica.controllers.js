"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClinica = createClinica;
exports.deleteClinica = deleteClinica;
exports.getClinicas = getClinicas;
exports.getOneClinica = getOneClinica;
exports.updateClinica = updateClinica;

var _Clinica = _interopRequireDefault(require("../models/Clinica"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//insertar (POST)
function createClinica(_x, _x2) {
  return _createClinica.apply(this, arguments);
} //seleccionar todo


function _createClinica() {
  _createClinica = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, rucclinica, nomclinica, dirclinica, telclinica, logoclinica, newClinica;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, rucclinica = _req$body.rucclinica, nomclinica = _req$body.nomclinica, dirclinica = _req$body.dirclinica, telclinica = _req$body.telclinica, logoclinica = _req$body.logoclinica;
            _context.prev = 1;
            _context.next = 4;
            return _Clinica["default"].create({
              rucclinica: rucclinica,
              nomclinica: nomclinica,
              dirclinica: dirclinica,
              telclinica: telclinica,
              logoclinica: logoclinica
            }, {
              fields: ['rucclinica', 'nomclinica', 'dirclinica', 'telclinica', 'logoclinica']
            });

          case 4:
            newClinica = _context.sent;

            if (newClinica) {
              res.json({
                message: "Clinica creado correctamente",
                data: newClinica
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: "Un error a ocurrido",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createClinica.apply(this, arguments);
}

function getClinicas(_x3, _x4) {
  return _getClinicas.apply(this, arguments);
} //Seleccionar una clinica por id (GET)


function _getClinicas() {
  _getClinicas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var clinicas;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Clinica["default"].findAll();

          case 3:
            clinicas = _context2.sent;
            res.json({
              message: "Clinicas correctamente obtenidos",
              data: clinicas
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.json({
              message: "Un error a ocurrido",
              error: _context2.t0
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getClinicas.apply(this, arguments);
}

function getOneClinica(_x5, _x6) {
  return _getOneClinica.apply(this, arguments);
} //Actualizar (PUT)


function _getOneClinica() {
  _getOneClinica = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, clinica;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Clinica["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            clinica = _context3.sent;
            res.json({
              message: "Clinica obtenido correctamente",
              data: clinica
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.json({
              message: "Un error a ocurrido",
              error: _context3.t0
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getOneClinica.apply(this, arguments);
}

function updateClinica(_x7, _x8) {
  return _updateClinica.apply(this, arguments);
} //Eliminar por ID (DELETE)


function _updateClinica() {
  _updateClinica = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, rucclinica, nomclinica, dirclinica, telclinica, logoclinica, clinicas;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _req$body2 = req.body, rucclinica = _req$body2.rucclinica, nomclinica = _req$body2.nomclinica, dirclinica = _req$body2.dirclinica, telclinica = _req$body2.telclinica, logoclinica = _req$body2.logoclinica;
            _context5.next = 5;
            return _Clinica["default"].findAll({
              attributes: ['id', 'rucclinica', 'nomclinica', 'dirclinica', 'telclinica', 'logoclinica'],
              where: {
                id: id
              }
            });

          case 5:
            clinicas = _context5.sent;

            if (clinicas.length > 0) {
              clinicas.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(clinica) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return clinica.update({
                            rucclinica: rucclinica,
                            nomclinica: nomclinica,
                            dirclinica: dirclinica,
                            telclinica: telclinica,
                            logoclinica: logoclinica
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            res.json({
              message: "Clinicas updated succesfully",
              data: clinicas
            });
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](1);
            res.json({
              message: "Un error a ocurrido",
              error: _context5.t0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return _updateClinica.apply(this, arguments);
}

function deleteClinica(_x9, _x10) {
  return _deleteClinica.apply(this, arguments);
}

function _deleteClinica() {
  _deleteClinica = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;

            try {
              deleteRowCount = _Clinica["default"].destroy({
                where: {
                  id: id
                }
              });
              res.json({
                message: "Clinica deleted succesfully",
                count: deleteRowCount,
                data: {}
              });
            } catch (error) {
              res.json({
                message: "Un error a ocurrido",
                error: error
              });
            }

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _deleteClinica.apply(this, arguments);
}