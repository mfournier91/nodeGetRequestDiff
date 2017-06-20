const express = require('express');
const app = express();
const request = require('request');

app.get('/', function (req, res) {
  // request('http://www.google.com', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  let last = '';
  interval = setInterval(function(){
    request('https://make-slogans-great-api.herokuapp.com/randomnoun', function(err, response, body){
      console.log(body);
      if(last != body && last != ''){
        res.send("Last was: " + last + "<br />Current is: " + body);
        clearInterval(interval)
      } else {
        last = body;
      }
    })
  },10000);
})

app.listen(1337, function() {
  console.log('Navi says "listen" on port 1337...');
})
