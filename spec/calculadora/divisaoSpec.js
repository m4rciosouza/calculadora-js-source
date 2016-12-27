describe('Calculadora - Divisão', function() {

	var Calculadora = require('../../src/js/calculadora.js');

	it('deve retornar 6 para os valores 12 e 2', function() {
		expect(Calculadora.dividir(12, 2)).toEqual(6);
	});

	it('deve retornar 3 para os valores 9 e 3 em formato texto', 
		function() {
			expect(Calculadora.dividir('9', '3')).toEqual(3);
		});

	it('deve retornar 1.5 para os valores 4.5 e 3', function() {
		expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
	});

	it('deve retornar erro ao dividir por zero', function() {
		expect(Calculadora.dividir(10, 0)).toEqual('Erro');
		expect(Calculadora.dividir(10, '0')).toEqual('Erro');
	})

	it('deve retornar 0 quando número 1 for inválido', function() {
		expect(Calculadora.dividir(undefined, 10)).toEqual(0);
	});

	it('deve retornar 0 quando número 2 for inválido', function() {
		expect(Calculadora.dividir(10, undefined)).toEqual(0);
	});
});