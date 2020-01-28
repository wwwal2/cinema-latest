export default class Utility {
  static numberValidation(max, min, num) {
    return (num <= max && num >= min);
  }

  static onlyNumbers(key) {
    return (/^\d+$/.test(key) || key === '');
  }
}
