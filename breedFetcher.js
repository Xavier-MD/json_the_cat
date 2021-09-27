const request = require('request');

const args = process.argv.slice(2);
const Url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args[0];

request(Url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  const data = JSON.parse(body);

  if (data.length < 1) {
    console.log('Sorry, we couldn\'t find the breed "' + args[0] + '".');
    return;
  }

  console.log(data);
  console.log(typeof data);
});

