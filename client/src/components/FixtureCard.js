import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import classnames from "classnames";

export default function FixtureCard(props) {
  const { fixture } = props;
  var sScore,
    sCardSubtitle = fixture.SUMMARY,
    sCompetition,
    compStartIndex,
    compEndIndex,
    scoreStartIndex;

  //If there is a competition suffix
  if (fixture && fixture.SUMMARY.search(/\[\w+\]/g) !== -1) {
    compStartIndex = fixture.SUMMARY.search(/\[/g);
    compEndIndex = fixture.SUMMARY.search(/\]/g);

    sCompetition = fixture.SUMMARY.substring(compStartIndex + 1, compEndIndex);

  }
  //If there is a score suffix
  if (sCardSubtitle.search(/\(\d+-\d+\)/g) !== -1) {
    scoreStartIndex = sCardSubtitle.search(/\(\d+-\d+\)/g);
    ///sScore ie. score is derived from the sCardSubtitle which is nothing but a fixture.SUMMARY derivative
    sScore = sCardSubtitle.substring(scoreStartIndex);
    sCardSubtitle = sCardSubtitle.substring(0, scoreStartIndex).trim();
  } else {
    sScore = "";
  }

  sCardSubtitle = fixture.SUMMARY.substring(0, compStartIndex || scoreStartIndex).trim();

  return (
    <Card
      className={classnames(
        "mb-3",
        "app-card",
        {
          "app-card-latest": new Date(fixture.DTSTART) < new Date()
        },
        {
          "app-card-upcoming": new Date(fixture.DTSTART) > new Date()
        }
      )}
    >
      <CardBody>
        {sScore ?
          <CardTitle>
            <h5 style={{ fontWeight: "bold" }}>{sScore}</h5>
          </CardTitle>
          :
         <div className="mt-2"/>
        }
        <CardTitle>
          <h5>{sCardSubtitle}</h5>
        </CardTitle>
        <CardText>
          {new Date(fixture.DTSTART).toDateString()},
          {new Date(fixture.DTSTART).toLocaleTimeString()}
        </CardText>
        <CardText>
          <strong>
            {/*For now, just support EPL, and default competition names*/}
            {!sCompetition ? "English Premier League" : sCompetition === 'FA' ? 'FA Cup' : sCompetition}
          </strong>
        </CardText>
      </CardBody>
    </Card>
  );
}
