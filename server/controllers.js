const axios = require("axios");

exports.getProduct = (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}`, {headers:{Authorization:process.env.AUTH_KEY}}).then((results) => {
    console.log(results.data)
    console.log(`Successfully found product: ${req.params.id}`)
    res.send(results.data)
  }).catch((err) => {
    console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
}

exports.getReviews = (req, res) => {
  console.log(req.params.id)
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${req.params.id}&count=1000`,
    {headers:{Authorization:process.env.AUTH_KEY}}
  ).then((results) => {
    console.log(results.data)
    console.log(`Successfully found reviews for product: ${req.params.id}`)
    res.send(results.data)
  }).catch((err) => {
    console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
}

exports.getReviewsMeta = (req, res) => {
  console.log(req.params.id)
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${req.params.id}`,
    {headers:{Authorization:process.env.AUTH_KEY}}
  ).then((results) => {
    console.log(results.data)
    console.log(`Successfully found reviews metadata for product: ${req.params.id}`)
    res.send(results.data)
  }).catch((err) => {
    console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
}