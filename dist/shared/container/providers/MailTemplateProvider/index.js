"use strict";

var _tsyringe = require("tsyringe");

var _HandlebarsMalTemplateProvider = _interopRequireDefault(require("./implementations/HandlebarsMalTemplateProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providers = {
  handlebars: _HandlebarsMalTemplateProvider.default
};

_tsyringe.container.registerSingleton('MailTemplateProvider', providers.handlebars);