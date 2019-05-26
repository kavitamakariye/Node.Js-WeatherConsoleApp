const request = require('request');
const argv = require('yargs').argv;
let city = argv.c || 'aurangabad';
let apiKey = '853f8067646523ef7e35920829ec2b9e';
//let city = 'aurangabad';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
request(url,function(err,response,body){
    if(err){
        console.log('error:',error);
        
    }
    else{
        //console.log('body:',body);
        let weather = JSON.parse(body);
let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
console.log(message);
    }
});