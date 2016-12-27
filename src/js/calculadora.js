var Calculadora = {

	ADICAO: '+',
	SUBTRACAO: '-',
	DIVISAO: '/',
	MULTIPLICACAO: '*',

	adicionar: function(num1, num2) {
		return Calculadora.calcular(num1, num2, 
			Calculadora.ADICAO);
	},

	subtrair: function(num1, num2) {
		return Calculadora.calcular(num1, num2, 
			Calculadora.SUBTRACAO);
	},

	dividir: function(num1, num2) {
		if (parseFloat(num2) === 0) {
			return 'Erro';
		}

		return Calculadora.calcular(num1, num2, 
			Calculadora.DIVISAO);
	},

	multiplicar: function(num1, num2) {
		return Calculadora.calcular(num1, num2, 
			Calculadora.MULTIPLICACAO);
	},

	calcular: function(num1, num2, operacao) {
		var resposta;

		num1 = parseFloat(num1);
		num2 = parseFloat(num2);

		if (isNaN(num1) || isNaN(num2)) {
			return 0;
		}
		switch (operacao) {
			case Calculadora.ADICAO:
				resposta = num1 + num2;
				break;
			case Calculadora.SUBTRACAO:
				resposta = num1 - num2;
				break;
			case Calculadora.DIVISAO:
				resposta = num1 / num2;
				break;
			case Calculadora.MULTIPLICACAO:
				resposta = num1 * num2;
				break;
			default:
				resposta = 0;			
		}

		return resposta;
	}
};

// usado na função 'require' do NodeJS
if (typeof module !== 'undefined' 
	&& typeof module.exports !== 'undefined') {
	module.exports = Calculadora;
}