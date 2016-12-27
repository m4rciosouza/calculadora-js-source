describe('Calculadora - Multiplicação', function() {
	
	var Calculadora = require('../../src/js/calculadora.js');

	it('deve retornar 6 para os valores 2 e 3', function() {
		expect(Calculadora.multiplicar(2, 3)).toEqual(6);
	});

	it('deve retornar 9 para os valores 3 e 3 em formato texto', 
		function() {
			expect(Calculadora.multiplicar('3', '3')).toEqual(9);
		});

	it('deve retornar 4.5 para os valores 1.5 e 3', function() {
		expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
	});

	it('deve retornar 0 quando número 1 for inválido', function() {
		expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
	});

	it('deve retornar 0 quando número 2 for inválido', function() {
		expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
	});
});