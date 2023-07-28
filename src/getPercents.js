
export function getPercents(percent, number) {
    if (
      typeof percent !== "number" ||
      typeof number !== "number" ||
      isNaN(percent) ||
      isNaN(number)
    ) {
      throw new Error("Both arguments must be numbers");
    }
    if (percent < 0 || percent > 100) {
      throw new Error("Percent value must be between 0 and 100");
    }
    return (percent / 100) * number;
  }