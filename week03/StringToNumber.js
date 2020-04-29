// 检查字符串范围
function checkCharRange(char, min, max) {
  return char.codePointAt(0) >= min.codePointAt(0) && char.codePointAt(0) <= max.codePointAt(0);
}

// 二进制字符串转数字
function covertBinaryStringToNumber(chars) {
  var number = 0;
  var i = 0;

  while (i < chars.length && checkCharRange(chars[i], '0', '1')) {
    number = number * 2;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  if (i < chars.length) {
    return NaN;
  }

  return number;
}

// 八进制字符串转数字
function covertOctalStringToNumber(chars) {
  var number = 0;
  var i = 0;

  while (i < chars.length && checkCharRange(chars[i], '0', '7')) {
    number = number * 8;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  if (i < chars.length) {
    return NaN;
  }

  return number;
}

// 十进制字符串转数字
function covertDecimalStringToNumber(chars) {
  var number = 0;
  var i = 0;
  var signed = 1;

  if (chars[i] === '-' || chars[i] === '+') {
    signed = chars[i] === '+' ? 1 : -1;
    i++;
  }

  while (i < chars.length && checkCharRange(chars[i], '0', '9')) {
    number = number * 10;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  if (i < chars.length) {
    return NaN;
  }

  if (signed > 0) return number;
  else return 0 - number;
}

// 十六进制字符串转数字
function covertHexStringToNumber(chars) {
  var number = 0;
  var i = 0;

  while (i < chars.length) {
    number = number * 16;

    if (checkCharRange(chars[i], '0', '9')) {
      number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    } else if (checkCharRange(chars[i], 'A', 'F')) {
      number += chars[i].codePointAt(0) - 'A'.codePointAt(0) + 10;
    } else if (checkCharRange(chars[i], 'a', 'f')) {
      number += chars[i].codePointAt(0) - 'a'.codePointAt(0) + 10;
    } else {
      return NaN;
    }

    i++;
  }

  return number;
}

// 指数字符串转数字
function covertExponentStringToNumber(chars) {
  var number = 0;
  var precision = 0; // 精度
  var index = 1; // 指数
  var curDecimal = 10; // 当前进制

  var i = 0;

  while (i < chars.length && chars[i] !== 'e' && chars[i] !== '+' && chars[i] !== '-') {
    number = number * 10;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  if (chars[i] === 'e') {
    i++;
  }

  if (chars[i] === '+' || chars[i] === '-') {
    curDecimal = chars[i] === '+' ? curDecimal : 1e-1;
    i++;
  }

  while (i < chars.length) {
    precision = precision * 10;
    precision += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  while (precision--) {
    index = curDecimal * index;
  }

  return number * index;
}

// 浮点字符串串转数字
function covertFloatStringToNumber(chars) {
  var number = 0;
  var i = 0;

  while (i < chars.length && chars[i] !== '.') {
    number = number * 10;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  if (chars[i] === '.') {
    i++;
  }

  var fraction = 1;
  while (i < chars.length) {
    fraction = fraction / 10;
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
    i++;
  }

  return number;
}

function convertStringToNumber(string) {
  var trimString = string.trim();
  var chars = trimString.split('');

  if (/^0[bB]/.test(trimString)) {
    return covertBinaryStringToNumber(chars.slice(2));
  }

  if (/^0[oO]/.test(trimString)) {
    return covertOctalStringToNumber(chars.slice(2));
  }

  if (/^[-+]{0,1}(\d+)$/.test(trimString)) {
    return covertDecimalStringToNumber(chars);
  }

  if (/^0[xX]/.test(trimString)) {
    return covertHexStringToNumber(chars.slice(2));
  }

  if (/^\d+e[-+]*(\d+)$/.test(trimString)) {
    return covertExponentStringToNumber(chars);
  }

  if (/^\d*.(\d*)$/.test(trimString)) {
    return covertFloatStringToNumber(chars);
  }

  return NaN;
}

module.exports = convertStringToNumber;
