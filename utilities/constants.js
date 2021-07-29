import { t } from "./localization";

var format = require("format-number");

const formatNumber = (number) => {
  return format()(Math.floor(number));
};

const formatNumberText = (num) => {
  let number = Number(num.toFixed(1))
  let decPlaces = Math.pow(10, 2);
  var abbrev = [
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion",
    "undecillion",
    "duodecillion",
    "tredecillion",
    "quattuordecillion",
    "quindecillion",
  ];

  for (var i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }
      number += (" " + t(abbrev[i]))
      break;
    }
  }
  return number;
};

const applyEval = (evalString, values) => {
  values.forEach((item) => {
    evalString = evalString.replace(`{{${item.name}}}`, item.value);
  });
  return eval(evalString);
};

export { formatNumber, formatNumberText, applyEval };
