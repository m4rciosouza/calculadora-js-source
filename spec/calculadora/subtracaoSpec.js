describe('Calculadora - Subtração', function() {
	
	var Calculadora = require('../../src/js/calculadora.js');

	it('deve retornar 5 para os valores 8 e 3', function() {
		expect(Calculadora.subtrair(8, 3)).toEqual(5);
	});

	it('deve retornar 12 para os valores 9 e -3 em formato texto', 
		function() {
			expect(Calculadora.subtrair('9', '-3')).toEqual(12);
		});

	it('deve retornar -3.5 para os valores 1.5 e 5', function() {
		expect(Calculadora.subtrair(1.5, 5)).toEqual(-3.5);
	});

	it('deve retornar 0 quando número 1 for inválido', function() {
		expect(Calculadora.subtrair('', 10)).toEqual(0);
		expect(Calculadora.subtrair('abc', 10)).toEqual(0);
		expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
	});

	it('deve retornar 0 quando número 2 for inválido', function() {
		expect(Calculadora.subtrair(10, '')).toEqual(0);
		expect(Calculadora.subtrair(10, 'abc')).toEqual(0);
		expect(Calculadora.subtrair(10, undefined)).toEqual(0);
	});
});