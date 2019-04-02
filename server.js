var express = require("express");
var ical2json = require("ical2json");
var fs = require("fs");
var download = require("download-file");
var parseIcalDate = require("ical-date-parser");

var app = express();
var url =
  "https://ics.fixtur.es/v2/arsenal.ics?fba191619381b181"; /*unofficial*/
// var url = 'https://ics.ecal.com/ecal-sub/5ca33a74f8f200d45b8b4567/Arsenal%20FC.ics'; /*official*/
var arsenalCalendarJSON = {};
var fileReadPromise;
var options = {
  directory: "./",
  filename: "arsenal.ics"
};

//On start of server, download the ICS and build JSON
download(url, options, function(err) {
  if (!err) {
    // arsenalCalendarJSON = ical2json.convert(fs.readFileSync('./arsenal.ics').toString());
    fileReadPromise = new Promise(function(resolve, reject) {
      var oFileContents = fs.readFile("./arsenal.ics", (err, data) => {
        if (err) {
          throw err;
        }
        resolve(data);
      });
    });
    fileReadPromise
      .then(function(fileContents) {
        arsenalCalendarJSON = ical2json.convert(fileContents.toString());
      })
      .catch(function(err) {
        console.log("Error:" + err);
      });
  } else {
    throw err;
  }
});

app.get("/", function(req, res) {
  res.send("Change the URL to see fixtures");
});

app.get("/arsenal", function(req, res) {
  var currentDate = new Date();
  var aFixtures = arsenalCalendarJSON.VCALENDAR[0].VEVENT;
  // if(new Date(parseIcalDate(aFixtures[0].DTSTART)) >= new Date()){
  var finalFixtures = aFixtures
    .filter(fixture => {
      return new Date(parseIcalDate(fixture.DTSTART)) >= currentDate;
    })
    .map(fixture => {
      return (fixture = {
        ...fixture,
        DTSTART: parseIcalDate(fixture["DTSTART"]),
        DTEND: parseIcalDate(fixture["DTEND"])
      });
    });
  res.send(finalFixtures);
  // } else {
  //     res.send("Sorry");
  // }
});

app.listen(3001);

console.log("SHE WORE SHE WORE..");
