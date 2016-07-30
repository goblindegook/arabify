const numerals = {
  IV: { value: 4, nextUnder: 1 },
  IX: { value: 9, nextUnder: 1 },
  I: { value: 1, nextUnder: 5 },
  V: { value: 5, nextUnder: 5 },
  XL: { value: 40, nextUnder: 10 },
  XC: { value: 90, nextUnder: 10 },
  X: { value: 10, nextUnder: 50 },
  L: { value: 50, nextUnder: 50 },
  CD: { value: 400, nextUnder: 100 },
  CM: { value: 900, nextUnder: 100 },
  C: { value: 100, nextUnder: 500 },
  D: { value: 500, nextUnder: 500 },
  M: { value: 1000, nextUnder: 5000 }
}

const indices = Object.keys(numerals)

/**
 * Get the list of symbols under a the given value.
 *
 * @param  {Number} max Upper limit for the symbols to return.
 * @return {Array}      List of symbols whose value is under the limit.
 */
const getSymbolsUnder = max => indices.filter(i => numerals[i].value < max)

/**
 * Recursively convert Roman numerals to their Arabic-Indic equivalents.
 *
 * @param  {Number} roman Numeral between 1-3999.
 * @param  {String} acc   Accumulated output.
 * @return {String}       Converted Arabic numeral.
 */
function recursiveArabify (roman, acc = 0, validSymbols = indices) {
  if (!roman.length) {
    return acc
  }

  const symbol = validSymbols.filter(i => roman.startsWith(i))[0]

  if (!symbol || roman.startsWith(symbol + symbol + symbol + symbol)) {
    throw new Error('Romani ite domum.')
  }

  return recursiveArabify(
    roman.slice(symbol.length),
    acc + numerals[symbol].value,
    getSymbolsUnder(numerals[symbol].nextUnder)
  )
}

/**
 * Convert Roman numerals to their Arabic-Indic equivalents.
 * @param  {Number} roman Numeral between I-MMMCMXCIX.
 * @return {String}       Converted Arabic numeral.
 */
function arabify (roman) {
  return recursiveArabify(roman.toUpperCase())
}

export default arabify
