"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'luciano2023silva@gmail.com',
      name: 'Luciano Silva'
    }
  }
};
exports.default = _default;