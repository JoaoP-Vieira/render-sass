const path = require("path");
const sass = require("node-sass");
const fs = require("fs");

const renderSass = (input, output) => {
  sass.render(
    {
      // SASS OPTIONS
      file: path.join(__dirname, input) // file path to be rendered
    },
  (err, result) => {
    // WRITE THE RESULT
    fs.writeFile(
      path.join(__dirname, output), // file path to be written
      result.css,
      (err) => {
        // Log information about the fs.writeFile function
        console.log("Render completed!") && console.log(err);
      },
      // Log errors about the callback function
    ) && console.log(err);
  },
)
};

// Simple example of use
renderSass("sass/style.scss", "public/css/style.css");
