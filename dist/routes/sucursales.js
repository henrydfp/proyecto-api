"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sucursal = require("../controllers/sucursal.controllers");

var router = (0, _express.Router)();
router.post('/', _sucursal.createSucursal);
router.get('/', _sucursal.getSucursals);
router.get('/:id', _sucursal.getOneSucursal);
router.put('/:id', _sucursal.updateSucursal);
router["delete"]('/:id', _sucursal.deleteSucursal);
var _default = router;
exports["default"] = _default;