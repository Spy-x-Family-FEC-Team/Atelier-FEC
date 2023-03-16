// load what's in .env into environment vars
require("dotenv").config();

// pathing library, for join and stuff
const path = require("path");


module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "client/dist/"),
    filename: "bundle.js"
  },
  module: {
    rules: [ //shamelessly stolen from previous files, cause the regex is nice and we need babel loader
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader", //do we need a preset?
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  }

}