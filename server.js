var express = require("express");
var ical2json = require("ical2json");
var fs = require("fs");
var download = require("download-file");
var parseIcalDate = require("ical-date-parser");

var app = express();
var url = "https://ics.fixtur.es/v2/arsenal.ics?fba191619381b181";
var arsenalCalendarJSON = {};
var fileReadPromise;
var options = {
  directory: "./",
  filename: "arsenal.ics"
};

//On start of server, download the ICS and build JSON
download(url, options, function(err) {
  if (!err) {
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

app.get("/fixtures", function(req, res) {
  var currentDate = new Date();
  var aInterimFixtures = arsenalCalendarJSON.VCALENDAR[0].VEVENT;
  var sStartDate,
    sEndDate,
    aPastFixtures = [],
    oLatestFixture,
    oCurrentFixture,
    aFutureFixtures = [];
  for (var fixture of aInterimFixtures) {
    sStartDate = new Date(parseIcalDate(fixture.DTSTART));
    sEndDate = new Date(parseIcalDate(fixture.DTEND));
    if (sEndDate < currentDate) {
      //Past Fixtures
      aPastFixtures.push(fixture);
    } else if (sStartDate <= currentDate && sEndDate >= currentDate) {
      //Current Fixtures
      oCurrentFixture = fixture;
    } else {
      //Future fixtures
      aFutureFixtures.push(fixture);
    }
  }

  if (!oCurrentFixture) {
    //If no ongoing fixture exists, get the latest available past fixture
    //TODO: may not require all the past fixtures
    aPastFixtures = aPastFixtures.map(fixture => {
      return (fixture = {
        ...fixture,
        DTSTART: parseIcalDate(fixture["DTSTART"]),
        DTEND: parseIcalDate(fixture["DTEND"])
      });
    });
  } else {
    oCurrentFixture.DTSTART = parseIcalDate(oCurrentFixture.DTSTART);
    oCurrentFixture.DTEND = parseIcalDate(oCurrentFixture.DTEND);
  }
  oLatestFixture = oCurrentFixture || aPastFixtures[aPastFixtures.length - 1];

  aFutureFixtures = aFutureFixtures.map(fixture => {
    //Mutate the array to alter the date strings, to be ISO compliant for easier consumption
    return (fixture = {
      ...fixture,
      DTSTART: parseIcalDate(fixture["DTSTART"]),
      DTEND: parseIcalDate(fixture["DTEND"])
    });
  });

  res.send({ latestFixture: oLatestFixture, futureFixtures: aFutureFixtures });
});

//serve static assets if in production - DONE FOR HEROKU INTEGRATION
if (process.env.NODE_ENV === "production") {
  //set static folder
  // app.use(express.static("client/build"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("COYG!!"));
