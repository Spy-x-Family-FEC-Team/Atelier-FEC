require("dotenv").config();
const express = require("express");
const morgan = require('morgan')
const path = require("path");
const controllers = require("./controllers.js");

const app = express();
const staticPath = path.join(path.resolve('.'), '/client/dist/');

/*~~~~~~~THIS IS WHERE API CALLS TO OUR API TO PASS ALONG TO THE HR API GO~~~~~~~*/
app.use(morgan('tiny'))

app.use('/items*', (req, res) => {
  res.sendFile(path.join(path.resolve('.'), '/client/dist/'));
})

// route API requests paths here, we may want to break this out into its own file eventually.
app.get('/api/products/:id', controllers.getProduct)
app.get('/api/reviews/:id', controllers.getReviews)
app.get('/api/reviews/meta/:id', controllers.getReviewsMeta)
app.get('/api/products/:id/related', controllers.getRelated)
app.get('/api/products/:id/styles', controllers.getStyles)


// final fallback
app.use(express.static(staticPath));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
