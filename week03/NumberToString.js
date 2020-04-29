/**
 * 数字转字符串
 */
function convertNumberToString(number) {
  let integer = Math.trunc(number);
  let absInterger = Math.abs(integer);
  let fraction = number - integer;
  let string = '';

  if (absInterger === 0) {
    string = '0';
  }

  while (absInterger > 0) {
    string = String(absInterger % 10) + string;
    absInterger = Math.floor(absInterger / 10);
  }

  // 无小数，则直接返回字符串
  if (fraction === 0) {
    return number > 0 ? string : '-' + string;
  }

  // 想不出更好的办法，这里本质还是调用String方法
  string = string + fraction.toString().slice(1);

  return number > 0 ? string : '-' + string;
}

module.exports = convertNumberToString;
