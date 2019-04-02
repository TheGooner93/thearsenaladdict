// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Hello New York\n');
// }).listen(3001);

// console.log('Server running at localhost:3001/');

var express = require('express');
var ical2json = require('ical2json');
var fs = require('fs');
var download = require('download-file');

var app = express();
var url = 'https://ics.fixtur.es/v2/arsenal.ics?fba191619381b181'; /*unofficial*/
// var url = 'https://ics.ecal.com/ecal-sub/5ca33a74f8f200d45b8b4567/Arsenal%20FC.ics'; /*official*/
var arsenalCalendarJSON = {};
var options = {
    directory: "./",
    filename: "arsenal.ics"
}

//On start of server, download the ICS and build JSON
download(url, options, function (err) {
    if(!err){
        arsenalCalendarJSON = ical2json.convert(fs.readFileSync('./arsenal.ics').toString());
    } else { 
        console.log("Error:" + err);
    }
});

// app.configure(function(){
//     app.use(express.bodyParser());
// });

app.get('/', function (req, res) {
    res.send('Change the URL to see fixtures');
});

app.get('/arsenal', function (req, res) {
    
    var aFixtures = arsenalCalendarJSON.VCALENDAR[0].VEVENT;
    // aFixtures.forEach(function (fixture,index) {
    //     if(fixture.DTSTART < new Date()){
    //         aFixtures.splice(index,1);
    //     }
    // });
    res.send(aFixtures);
});

app.listen(3001);

console.log('SHE WORE SHE WORE..');