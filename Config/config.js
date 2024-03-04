const sql = require('mssql');

const dbConfig = {
  user: "sa",
  password: "1588",
  server: "192.168.191.127", // Puedes usar 'localhost\\instance' para conectarte a una instancia con nombre
  database: "POS",
  options: {
    encrypt: true, // Úsalo si estás en Windows Azure
    trustServerCertificate: true // Verdadero si estás usando certificados autofirmados
  }
};

module.exports = {
  sql,
  dbConfig
};
