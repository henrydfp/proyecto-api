"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDoctor = createDoctor;
exports.deleteDoctor = deleteDoctor;
exports.getDoctors = getDoctors;
exports.getOneDoctor = getOneDoctor;
exports.updateDoctor = updateDoctor;

var _Doctor = _interopRequireDefault(require("../models/Doctor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//insertar (POST)
function createDoctor(_x, _x2) {
  return _createDoctor.apply(this, arguments);
} //seleccionar todo


function _createDoctor() {
  _createDoctor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nomdoctor, apelldoctor, dnidoctor, teldoctor, emaildoctor, dirdoctor, espdoctor, clinicaid, newDoctor, doctor;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nomdoctor = _req$body.nomdoctor, apelldoctor = _req$body.apelldoctor, dnidoctor = _req$body.dnidoctor, teldoctor = _req$body.teldoctor, emaildoctor = _req$body.emaildoctor, dirdoctor = _req$body.dirdoctor, espdoctor = _req$body.espdoctor, clinicaid = _req$body.clinicaid;
            _context.prev = 1;
            _context.next = 4;
            return _Doctor["default"].create({
              nomdoctor: nomdoctor,
              apelldoctor: apelldoctor,
              dnidoctor: dnidoctor,
              teldoctor: teldoctor,
              emaildoctor: emaildoctor,
              dirdoctor: dirdoctor,
              espdoctor: espdoctor,
              clinicaid: clinicaid
            }, {
              fields: ['nomdoctor', 'apelldoctor', 'dnidoctor', 'teldoctor', 'emaildoctor', 'dirdoctor', 'espdoctor', 'clinicaid']
            });

          case 4:
            newDoctor = _context.sent;

            if (!newDoctor) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return _Doctor["default"].findOne({
              include: ["clinica"],
              where: {
                id: newDoctor.id
              }
            });

          case 8:
            doctor = _context.sent;
            res.json({
              message: "Doctor creado correctamente",
              data: doctor
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
  return _createDoctor.apply(this, arguments);
}

function getDoctors(_x3, _x4) {
  return _getDoctors.apply(this, arguments);
} //Seleccionar un doctor por id (GET)


function _getDoctors() {
  _getDoctors = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var doctors;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Doctor["default"].findAll({
              include: ["clinica"]
            });

          case 3:
            doctors = _context2.sent;
            res.json({
              message: "Doctor obtenido correctamente",
              data: doctors
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
  return _getDoctors.apply(this, arguments);
}

function getOneDoctor(_x5, _x6) {
  return _getOneDoctor.apply(this, arguments);
} //Actualizar (PUT)


function _getOneDoctor() {
  _getOneDoctor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, doctor;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Doctor["default"].findOne({
              where: {
                id: id
              },
              include: ["clinica"]
            });

          case 4:
            doctor = _context3.sent;
            res.json({
              message: "Doctor obtenido correctamente",
              data: doctor
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
  return _getOneDoctor.apply(this, arguments);
}

function updateDoctor(_x7, _x8) {
  return _updateDoctor.apply(this, arguments);
} //Eliminar por ID (DELETE)


function _updateDoctor() {
  _updateDoctor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nomdoctor, apelldoctor, dnidoctor, teldoctor, emaildoctor, dirdoctor, espdoctor, clinicaid, doctors;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _req$body2 = req.body, nomdoctor = _req$body2.nomdoctor, apelldoctor = _req$body2.apelldoctor, dnidoctor = _req$body2.dnidoctor, teldoctor = _req$body2.teldoctor, emaildoctor = _req$body2.emaildoctor, dirdoctor = _req$body2.dirdoctor, espdoctor = _req$body2.espdoctor, clinicaid = _req$body2.clinicaid;
            _context5.next = 5;
            return _Doctor["default"].findAll({
              attributes: ['id', 'nomdoctor', 'apelldoctor', 'dnidoctor', 'teldoctor', 'emaildoctor', 'dirdoctor', 'espdoctor', 'clinicaid'],
              where: {
                id: id
              }
            });

          case 5:
            doctors = _context5.sent;

            if (doctors.length > 0) {
              doctors.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(doctor) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return doctor.update({
                            nomdoctor: nomdoctor,
                            apelldoctor: apelldoctor,
                            dnidoctor: dnidoctor,
                            teldoctor: teldoctor,
                            emaildoctor: emaildoctor,
                            dirdoctor: dirdoctor,
                            espdoctor: espdoctor,
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
              message: "Doctores actualizadas exitosamente",
              data: doctors
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
  return _updateDoctor.apply(this, arguments);
}

function deleteDoctor(_x9, _x10) {
  return _deleteDoctor.apply(this, arguments);
}

function _deleteDoctor() {
  _deleteDoctor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;

            try {
              deleteRowCount = _Doctor["default"].destroy({
                where: {
                  id: id
                }
              });
              res.json({
                message: "Doctor eliminada exitosamente",
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
  return _deleteDoctor.apply(this, arguments);
}