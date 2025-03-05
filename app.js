const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const ProductsRoute = require('./routes/productsRoute');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));



app.use('/api/v1/ugaoo/products', ProductsRoute);


app.use(errorHandler);

module.exports = app;

