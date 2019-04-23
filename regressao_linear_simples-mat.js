const mlr = require('ml-regression-multivariate-linear');

/*Matematica (N=nx10+n) */

//Dados de treinamento
const x = [[2],[4],[9],[16],[22]]
const y = [[22],[44],[99],[176],[242]]

const regression = new mlr(x,y);

console.log(regression.predict([5]));

