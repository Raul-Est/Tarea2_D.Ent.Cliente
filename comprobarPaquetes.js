const lodash = require('lodash');
const days = require('dayjs');

console.log('Lodash version:', lodash.VERSION);
console.log('Days module:', days().format("DD/MM/YYYY HH:mm:ss"));
