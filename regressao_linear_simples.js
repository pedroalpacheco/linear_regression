const mlr = require('ml-regression-multivariate-linear');

/*Cotação do dolar em R$ 3.92 */

const x = [[12],[2],[23],[4]]
const y = [[47.64],[7.84],[91.31],[15.88]]

const regression = new mlr(x,y);

console.log(regression.predict([5]));