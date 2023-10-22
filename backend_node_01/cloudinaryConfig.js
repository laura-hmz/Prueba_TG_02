const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dt0ejpyba', 
  api_key: '215184292566663', 
  api_secret: 'DsbgPmL1pYIFb0IawgjfypLI5iE' 
});

module.exports = cloudinary;