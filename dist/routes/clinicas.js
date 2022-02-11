"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _clinica = require("../controllers/clinica.controllers");

var router = (0, _express.Router)();
router.post('/', _clinica.createClinica);
router.get('/', _clinica.getClinicas);
router.get('/:id', _clinica.getOneClinica);
router.put('/:id', _clinica.updateClinica);
router["delete"]('/:id', _clinica.deleteClinica);
var _default = router;
exports["default"] = _default;