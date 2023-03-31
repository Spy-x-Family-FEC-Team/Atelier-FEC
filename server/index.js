require("dotenv").config();
const express = require("express");
const morgan = require('morgan')
const path = require("path");
const controllers = require("./controllers.js");
var compression = require('compression')

const app = express();
const staticPath = path.join(path.resolve('.'), '/client/dist/');

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(compression())


app.use('/items*', (req, res) => {
  res.sendFile(path.join(path.resolve('.'), '/client/dist/'));
})


// route API requests paths here, we may want to break this out into its own file eventually.
app.get('/api/products/:id', controllers.getProduct);
app.get('/api/reviews/:id', controllers.getReviews);
app.get('/api/reviews/meta/:id', controllers.getReviewsMeta);
app.get('/api/products/:id/related', controllers.getRelated);
app.get('/api/products/:id/styles', controllers.getStyles);
app.post('/api/reviews', controllers.postReview);
app.post('/api/cart', controllers.addToCart);
app.post('/api/helpful/:id', controllers.putHelpful);
app.post('/api/report/:id', controllers.putReport);


// final fallback
app.use(express.static(staticPath));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
