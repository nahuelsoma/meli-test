const express = require('express');
const cors = require('cors');
var compression = require('compression');

const routerApi = require('./routes');
const authorMiddleware = require('./middlewares/author.handler');
const {
  dataFetchErrorHandler,
  errorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server ON');
});

app.use(compression());
app.use(authorMiddleware);

routerApi(app);

app.use(dataFetchErrorHandler);
app.use(errorHandler);

app.listen(port, () => {});
