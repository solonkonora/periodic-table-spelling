function check(input) {
  // avoid users from entry invalid string
  if (input.length > 0) {
    for (let element of elements) {
      const symbol = element.symbol;

      // ensure that the input string is not shorter in length than the symbol
      if (symbol.length <= input.length) {
        // ensure that I am comparig substrings of equal length
        if (symbol.toLowerCase() === input.slice(0, symbol.length)) {
          // check for continuity (ensure that we are not at the end of the string)
          if (input.length > symbol.length) {
            const res = check(input.slice(symbol.length));

            if (res.length > 0) {
              return [symbol, ...res];
            }
          } else {
            return [symbol]; // stopping condition
          }
        }
      }
    }
  }

  return [];
}

// linear searchs (Searches throught the array of element of the periodic table
// and returns the element whose symbol is the parameter which was passed)
function lookup(symbol) {
  for (let element of elements) {
    if (symbol === element.symbol) {
      return element;
    }
  }
}
