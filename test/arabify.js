import test from 'ava'
import arabify from '../src/'

test('whitespace is not converted', t => {
  t.throws(() => arabify(''))
  t.throws(() => arabify(' '))
})

test('invalid symbols are not converted', t => {
  t.throws(() => arabify('Q'))
})

test('invalid same-symbol sequences are not converted', t => {
  t.throws(() => arabify('IIII'))
  t.throws(() => arabify('VV'))
  t.throws(() => arabify('XXXX'))
  t.throws(() => arabify('LL'))
  t.throws(() => arabify('CCCC'))
  t.throws(() => arabify('DD'))
  t.throws(() => arabify('MMMM'))
})

test('invalid symbol pairs are not converted', t => {
  t.throws(() => arabify('IL'))
  t.throws(() => arabify('IC'))
  t.throws(() => arabify('ID'))
  t.throws(() => arabify('IM'))
  t.throws(() => arabify('VX'))
  t.throws(() => arabify('VC'))
  t.throws(() => arabify('VD'))
  t.throws(() => arabify('VL'))
  t.throws(() => arabify('VM'))
  t.throws(() => arabify('XD'))
  t.throws(() => arabify('XM'))
  t.throws(() => arabify('LC'))
  t.throws(() => arabify('LD'))
  t.throws(() => arabify('LM'))
  t.throws(() => arabify('DM'))
  t.throws(() => arabify('IIV'))
  t.throws(() => arabify('VIV'))
  t.throws(() => arabify('XXL'))
  t.throws(() => arabify('LXL'))
  t.throws(() => arabify('CCD'))
  t.throws(() => arabify('DCD'))
})

test('conversion of valid roman numerals', t => {
  t.is(arabify('I'), 1)
  t.is(arabify('II'), 2)
  t.is(arabify('III'), 3)
  t.is(arabify('V'), 5)
  t.is(arabify('VI'), 6)
  t.is(arabify('VII'), 7)
  t.is(arabify('VIII'), 8)
  t.is(arabify('X'), 10)
  t.is(arabify('XV'), 15)
  t.is(arabify('XX'), 20)
  t.is(arabify('L'), 50)
  t.is(arabify('C'), 100)
  t.is(arabify('D'), 500)
  t.is(arabify('M'), 1000)
  t.is(arabify('MM'), 2000)
  t.is(arabify('MMXVI'), 2016)
  t.is(arabify('MMM'), 3000)
  t.is(arabify('MMMCMXCIX'), 3999)
})

test('conversion of numerals with two-character symbols', t => {
  t.is(arabify('IV'), 4)
  t.is(arabify('IX'), 9)
  t.is(arabify('XIV'), 14)
  t.is(arabify('XIX'), 19)
  t.is(arabify('XL'), 40)
  t.is(arabify('XLIV'), 44)
  t.is(arabify('CD'), 400)
  t.is(arabify('CM'), 900)
})

test('conversion of big-ass numerals', t => {
  t.is(arabify('MMMDCCCLXXXVIII'), 3888)
})

test('conversion is case-insensitive', t => {
  t.is(arabify('mdccclxxxviii'), 1888)
})
