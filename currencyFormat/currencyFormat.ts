const currencyFormat = (number: number): string => {
  if (typeof number === "number") {
    const roundNumber = Math.round((number + Number.EPSILON) * 100) / 100;

    const numberToArrayOfStrings = String(roundNumber).split('');

    const doesDecimalsExist = numberToArrayOfStrings.indexOf('.');

    let arrayOfDecimals = [];
    if (doesDecimalsExist !== -1) {
      arrayOfDecimals = numberToArrayOfStrings.splice(doesDecimalsExist);

      if (arrayOfDecimals.length < 3) {
        arrayOfDecimals.push('0');
      }
    } else {
      arrayOfDecimals.push('.', '0', '0');
    }

    let countMil = 1;
    let arrayWithDots = [];
    for (let i = numberToArrayOfStrings.length - 1; i >= 0; i--) {
      if (countMil === 4) {
        arrayWithDots.unshift('.');
        countMil = 1;
      }

      arrayWithDots.unshift(numberToArrayOfStrings[i]);
      countMil += 1;
    }

    const decimalsWithComma = arrayOfDecimals.join('').replace('.', ',');

    const integerPart = arrayWithDots.join('');

    const completeNumber = integerPart.concat(decimalsWithComma);

    return `R$${completeNumber}`;
  }

  return 'Function does not accept any type other than number';
}