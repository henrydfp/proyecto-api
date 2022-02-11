"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _doctor = require("../controllers/doctor.controllers");

var router = (0, _express.Router)();
router.post('/', _doctor.createDoctor);
router.get('/', _doctor.getDoctors);
router.get('/:id', _doctor.getOneDoctor);
router.put('/:id', _doctor.updateDoctor);
router["delete"]('/:id', _doctor.deleteDoctor);
var _default = router;
exports["default"] = _default;