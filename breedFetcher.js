const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const Url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(Url, function(error, response, body) {
  
    const data = JSON.parse(body);
  
    if (data.length < 1) {
      callback(`Sorry, we couldn't find the breed ${breedName}`, null);
    }
    if (response.statusCode !== 200) {
      callback(`statusCode: ${response}, ${response.statusCode}`, null);
    }
    if (error !== null) {
      callback(`error: ${error}`, null);
    }
    if (data.length >= 1) {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };