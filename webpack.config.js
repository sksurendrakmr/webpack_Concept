//this file is basically a javascript module
/**
 * webpack expects this module to export the configuration
 * object.
 *
 * Inside this object, we can specify many useful configuration options.
 *
 * entry
 * This file usually import all other modules in our application.
 * webpack will start from this file when running the build process.
 * In our case, index.js will be entry point.
 *
 * output (file)
 * Here we can specify a name of the file which will be generated as a result
 * of the build process and path to the directory where this file should
 * be generated.
 *
 * In our case :-
 * So after webpack runs, it will generate a file called bundle.js inside of the
 * folder called dist.
 * webpack will automatically create this folder if it doesn't exist.
 *
 * mode
 *
 * setting these three properies are minimal sensible and mandatory configuration
 * file.
 *
 */

const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"), //it takes absolute path
  },
  mode: "none",
};
