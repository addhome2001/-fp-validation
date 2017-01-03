'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxNum = exports.minLength = exports.maxLength = exports.isCellphone = exports.isEmail = exports.isNumber = exports.isRequired = undefined;

var _format = require('./utils/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRequired = exports.isRequired = (0, _format2.default)(function (val) {
  return {
    con: val !== '',
    msg: '欄位為必填'
  };
});

var isNumber = exports.isNumber = (0, _format2.default)(function (val) {
  return {
    con: !isNaN(parseFloat(val)) && isFinite(val),
    msg: '輸入內容必須為數字'
  };
});

var isEmail = exports.isEmail = (0, _format2.default)(function (val) {
  return {
    con: val.match(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) !== null,
    msg: '電子信箱格式不正確'
  };
});

var isCellphone = exports.isCellphone = (0, _format2.default)(function (val) {
  return {
    con: val.match(/^09[0-9]{8}$/),
    msg: '手機號碼格式不正確'
  };
});

var maxLength = exports.maxLength = (0, _format2.default)(function (max, val) {
  return {
    con: String(val).length <= max,
    msg: '\u8D85\u904E\u6700\u5927\u9650\u5236\u9577\u5EA6' + max + '\u5B57\u5143'
  };
});

var minLength = exports.minLength = (0, _format2.default)(function (min, val) {
  return {
    con: String(val).length >= min,
    msg: '\u5C0F\u65BC\u6700\u5C0F\u9650\u5236\u9577\u5EA6' + min + '\u5B57\u5143'
  };
});

var maxNum = exports.maxNum = (0, _format2.default)(function (max, val) {
  return {
    con: parseFloat(val) <= max,
    msg: '\u6578\u503C\u8D85\u904E' + max
  };
});