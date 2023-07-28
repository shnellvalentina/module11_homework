export function checkNumber(number) {
    if (number < 1 || number > 1000) {
        return "Данные неправильные";
    } else if (number % 2 === 0) {
        return `Число ${number} четное!`;
    } else {
        return `Число ${number} нечетное!`;
    }
  }