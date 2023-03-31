const axios = require("axios");

exports.getProduct = (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}`, {headers:{Authorization:process.env.AUTH_KEY}}).then((results) => {
    // console.log(results.data)
    console.log(`Successfully found product: ${req.params.id}`)
    res.send(results.data)
  }).catch((err) => {
    // console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
}

exports.getReviews = (req, res) => {
  // console.log(req.params.id)
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${req.params.id}&count=1000`,
    {headers:{Authorization:process.env.AUTH_KEY}}
  ).then((results) => {
    // console.log(results.data)
    console.log(`Successfully found reviews for product: ${req.params.id}`)
    res.send(results.data)
  }).catch((err) => {
    // console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
}

exports.getReviewsMeta = (req, res) => {
  // console.log(req.params.id)
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${req.params.id}`,
    {headers:{Authorization:process.env.AUTH_KEY}}
  ).then((results) => {
    // console.log(results.data)
    console.log(`Successfully found reviews metadata for product: ${req.params.id}`)
    res.send(results.data)
  }).catch((err) => {
    // console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
}

exports.getRelated = (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}/related`, {headers:{Authorization:process.env.AUTH_KEY}}).then((results) => {
    // console.log(results.data)
    console.log(`Successfully found product: ${req.params.id}`)
    res.send(results.data)
  }).catch((err) => {
    // console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
}

exports.getStyles = (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${req.params.id}/styles`, {headers:{Authorization:process.env.AUTH_KEY}}).then((results) => {
    // console.log(results.data)
    console.log(`Successfully found product: ${req.params.id}`)
    res.send(results.data)
  }).catch((err) => {
    // console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
};

exports.postReview = (req, res) => {
  console.log(req.body)
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews`, req.body ,{headers:{Authorization:process.env.AUTH_KEY}}).then((results) => {
    console.log(`Successfully sent review.`)
    res.sendStatus(201);
  }).catch((err) => {
    console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
};

exports.putHelpful = (req, res) => {
  console.log(req.body)
  console.log(req.params.id)
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.params.id}/helpful`, {} ,{headers:{Authorization:process.env.AUTH_KEY}}).then((results) => {
    console.log(`Successfully rated review helpful.`)
    res.sendStatus(201);
  }).catch((err) => {
    console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
};

exports.putReport = (req, res) => {
  console.log(req.body)
  console.log(req.params.id)
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.params.id}/report`, {} ,{headers:{Authorization:process.env.AUTH_KEY}}).then((results) => {
    console.log(`Successfully reported review.`)
    res.sendStatus(201);
  }).catch((err) => {
    console.log(`  Error encountered during request ${err.message}`);
    res.sendStatus(500);
  })
};

exports.addToCart = (req, res) => {
  // console.log("------------------------Got to addToCart with this req.body: ", req.body);
  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart`, req.body,
  {
    headers:{
      'Authorization': process.env.AUTH_KEY,
      'Content-Type': 'application/json'
    }
  }
    )
    .then(() => {
      console.log("Successful post to bag!");
      res.sendStatus(201);
    })
    .catch ((err) => {
      console.log(err);
      console.log("Nope!")
      res.sendStatus(500);
    })
}