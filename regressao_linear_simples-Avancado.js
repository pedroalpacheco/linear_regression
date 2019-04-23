const mlr = require('ml-regression-multivariate-linear');
const readlineSync = require('readline-sync');

const dolar = readlineSync.question('Digite a quantidade de dolar a converter: ')

/*Cotação do dolar em R$ 3.92 */

//Dados de treinamento
const x = [[2],[4],[9],[16]]
const y = [[7.84],[15.88],[35.28],[62.72]]


const regression = new mlr(x,y);

const dolarstring = Number(dolar)

resultado = regression.predict([dolarstring])


console.log(Math.round(resultado));

