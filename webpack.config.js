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
      {
        // I added this rule in order include our white background image and any other images with our bundle. (Jenessa)
        test: /\.(png|jpe?g|gif|woff2?)$/i,
        use: [
          {
            // Installed url-loader and file-loader to make this work. (see package.json devDependencies.)
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
       //This part keeps you from creating a new file each time you reload.
       type: 'javascript/auto'
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  }

}