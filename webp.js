const imagemin = require("imagemin");
const webp = require("imagemin-webp");
var  outputFolder = "./webp";           // Output folder
var PNGImages = "./img/*.png";         // PNG images
var  JPEGImages = "./img/*.{jpg,jpeg}";        // JPEG images

imagemin([PNGImages], outputFolder, {
  use: [
    webp({
      lossless: true // Losslessly encode images
    })
  ]
}).then(function() {
  console.log("Images PNG converted!");
});

imagemin([JPEGImages], outputFolder, {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images JPG converted!");
});