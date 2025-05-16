const log = require('logplease');
const logger = log.create('ElidaLogger');

const { esPar } = require('./numeros');

const numeros = [2, 3, 101, 201, 202, 100];

numeros.forEach((num) => {
  if (esPar(num)) {
    logger.info(`El número ${num} es par`);
  } else {
    logger.error(`El número ${num} no es par`);
  }
});
