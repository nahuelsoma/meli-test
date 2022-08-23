const express = require('express');
const cors = require('cors');
var compression = require('compression');

const routerApi = require('./routes');
const authorMiddleware = require('./middlewares/author.handler');
const {
  // logErrors,
  dataFetchErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(authorMiddleware);

routerApi(app);

// app.use(logErrors);
app.use(dataFetchErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  // console.log('Running on port ' + port);
});
