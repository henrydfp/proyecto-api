"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSucursal = createSucursal;
exports.deleteSucursal = deleteSucursal;
exports.getOneSucursal = getOneSucursal;
exports.getSucursals = getSucursals;
exports.updateSucursal = updateSucursal;

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//insertar (POST)
function createSucursal(_x, _x2) {
  return _createSucursal.apply(this, arguments);
} //seleccionar todo


function _createSucursal() {
  _createSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nomsucursal, dirsucursal, telsucursal, nrosillas, clinicaid, newSucursal, sucursal;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nomsucursal = _req$body.nomsucursal, dirsucursal = _req$body.dirsucursal, telsucursal = _req$body.telsucursal, nrosillas = _req$body.nrosillas, clinicaid = _req$body.clinicaid;
            _context.prev = 1;
            _context.next = 4;
            return _Sucursal["default"].create({
              nomsucursal: nomsucursal,
              dirsucursal: dirsucursal,
              telsucursal: telsucursal,
              nrosillas: nrosillas,
              clinicaid: clinicaid
            }, {
              fields: ['nomsucursal', 'dirsucursal', 'telsucursal', 'nrosillas', 'clinicaid']
            });

          case 4:
            newSucursal = _context.sent;

            if (!newSucursal) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return _Sucursal["default"].findOne({
              include: ["clinica"],
              where: {
                id: newSucursal.id
              }
            });

          case 8:
            sucursal = _context.sent;
            res.json({
              message: "Sucursal creado correctamente",
              data: sucursal
            });

          case 10:
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: "Un error a ocurrido",
              data: {}
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _createSucursal.apply(this, arguments);
}

function getSucursals(_x3, _x4) {
  return _getSucursals.apply(this, arguments);
} //Seleccionar una sucursal por id (GET)


function _getSucursals() {
  _getSucursals = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var sucursals;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Sucursal["default"].findAll({
              include: ["clinica"]
            });

          case 3:
            sucursals = _context2.sent;
            res.json({
              message: "Sucursal obtenido correctamente",
              data: sucursals
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
  return _getSucursals.apply(this, arguments);
}

function getOneSucursal(_x5, _x6) {
  return _getOneSucursal.apply(this, arguments);
} //Actualizar (PUT)


function _getOneSucursal() {
  _getOneSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, sucursal;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Sucursal["default"].findOne({
              where: {
                id: id
              },
              include: ["clinica"]
            });

          case 4:
            sucursal = _context3.sent;
            res.json({
              message: "Sucursal obtenido correctamente",
              data: sucursal
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
  return _getOneSucursal.apply(this, arguments);
}

function updateSucursal(_x7, _x8) {
  return _updateSucursal.apply(this, arguments);
} //Eliminar por ID (DELETE)


function _updateSucursal() {
  _updateSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nomsucursal, dirsucursal, telsucursal, nrosillas, clinicaid, sucursals;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _req$body2 = req.body, nomsucursal = _req$body2.nomsucursal, dirsucursal = _req$body2.dirsucursal, telsucursal = _req$body2.telsucursal, nrosillas = _req$body2.nrosillas, clinicaid = _req$body2.clinicaid;
            _context5.next = 5;
            return _Sucursal["default"].findAll({
              attributes: ['id', 'nomsucursal', 'dirsucursal', 'telsucursal', 'nrosillas', 'clinicaid'],
              where: {
                id: id
              }
            });

          case 5:
            sucursals = _context5.sent;

            if (sucursals.length > 0) {
              sucursals.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(sucursal) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return sucursal.update({
                            nomsucursal: nomsucursal,
                            dirsucursal: dirsucursal,
                            telsucursal: telsucursal,
                            nrosillas: nrosillas,
                            clinicaid: clinicaid
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
              message: "Sucursales actualizadas exitosamente",
              data: sucursals
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
  return _updateSucursal.apply(this, arguments);
}

function deleteSucursal(_x9, _x10) {
  return _deleteSucursal.apply(this, arguments);
}

function _deleteSucursal() {
  _deleteSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;

            try {
              deleteRowCount = _Sucursal["default"].destroy({
                where: {
                  id: id
                }
              });
              res.json({
                message: "Sucursal eliminada exitosamente",
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
  return _deleteSucursal.apply(this, arguments);
}