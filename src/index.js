const numerals = {
  IV: 4,
  IX: 9,
  I: 1,
  V: 5,
  XL: 40,
  XC: 90,
  X: 10,
  L: 50,
  CD: 400,
  CM: 900,
  C: 100,
  D: 500,
  M: 1000
}

const allSymbols = Object.keys(numerals)

/**
 * Get the list of symbols allowed after the provided symbol.
 *
 * @param  {String} symbol Current symbol.
 * @return {Array}         Symbols allowed after the one provided.
 */
function getNextValidSymbols (symbol) {
  const value = numerals[symbol]
  const dec = Math.pow(10, Math.floor(Math.log10(value)))
  const max = dec * (value === dec || value === 5 * dec ? 4 : 1)
  return allSymbols.filter(i => numerals[i] < max)
}

/**
 * Recursively convert Roman numerals to their Arabic-Indic equivalents.
 *
 * @param  {Number} roman Numeral between 1-3999.
 * @param  {String} acc   Accumulated output.
 * @return {String}       Converted Arabic numeral.
 */
function recursiveArabify (roman, acc = 0, validSymbols = allSymbols) {
  if (!roman.length) {
    return acc
  }

  const symbol = validSymbols.filter(i => roman.startsWith(i))[0]

  if (!symbol || roman.startsWith(symbol + symbol + symbol + symbol)) {
    throw new Error('Romani ite domum.')
  }

  return recursiveArabify(
    roman.slice(symbol.length),
    acc + numerals[symbol],
    getNextValidSymbols(symbol)
  )
}

/**
 * Convert Roman numerals to their Arabic-Indic equivalents.
 *
 * @param  {Number} roman Numeral between I-MMMCMXCIX.
 * @return {String}       Converted Arabic numeral.
 */
function arabify (roman) {
  if (!roman || !roman.trim().length) {
    throw new Error('Romani ite domum.')
  }

  return recursiveArabify(roman.trim().toUpperCase())
}

export default arabify
