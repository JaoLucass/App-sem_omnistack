const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 */

/** 
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back
 * Post: Criar uma informação no back
 * PUT: Alterar uma informação do back
 * DELETE: Deletar uma informação do Back
*/

/**
 * Tipos de parâmetros
 * 
 * Query params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
 * Route params: parametros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, Sqlite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users).select('*').where()
  */


