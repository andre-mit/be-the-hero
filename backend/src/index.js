const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
//#region Comentarios
/**
 * Rota / recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma infromação do back-end
 */

 /**
  * Tipos de parâmetros;
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Query Builder: Query com java script de Banco de dados
   */
//#endregion


app.listen(3333);
