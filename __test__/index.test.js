const isOdd = require('../src')

describe('isOdd', () => {
	it('Should return true if the number is odd:', () => {
		expect(!isOdd(0)).toBe(true)
		expect(!isOdd(2)).toBe(true)
		expect(isOdd(1)).toBe(true)
		expect(isOdd(3)).toBe(true)
		expect(isOdd(-1)).toBe(true)
		expect(isOdd(-3)).toBe(true)
		expect(isOdd(1.0)).toBe(true)
		expect(isOdd(9007199254740991)).toBe(true)
	})

	it('Should work with strings:', () => {
		expect(!isOdd('0')).toBe(true)
		expect(!isOdd('2')).toBe(true)
		expect(isOdd('1')).toBe(true)
		expect(isOdd('3')).toBe(true)
		expect(isOdd('1.0e0')).toBe(true)
		expect(isOdd('9007199254740991')).toBe(true)
	})

	it('Should throw an error when an invalid value is passed', () => {
		expect(() => isOdd()).toThrow('expected a number')
		expect(() => isOdd('foo')).toThrow('expected a number')
		expect(() => isOdd('1.1e0')).toThrow('expected an integer')
		expect(() => isOdd('9007199254740992')).toThrow(
			'value exceeds maximum safe integer'
		)
		expect(() => isOdd(9007199254740992)).toThrow(
			'value exceeds maximum safe integer'
		)
	})
})
