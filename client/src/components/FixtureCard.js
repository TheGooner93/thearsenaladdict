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
    suffixStartIndex;

  //If there is a competition prefix
  if (fixture && fixture.SUMMARY.search(/\[\w+\]/g) !== -1) {
    compStartIndex = fixture.SUMMARY.search(/\[/g);
    compEndIndex = fixture.SUMMARY.search(/\]/g);

    sCompetition = fixture.SUMMARY.substring(compStartIndex + 1, compEndIndex);

    sCardSubtitle = fixture.SUMMARY.substring(compEndIndex + 1).trim();
  }
  //if there is a score suffix
  if (sCardSubtitle.search(/\(\d+-\d+\)/g) !== -1) {
    suffixStartIndex = sCardSubtitle.search(/\(\d+-\d+\)/g);
    ///sScore ie. score is derived from the sCardSubtitle which is nothing but a fixture.SUMMARY derivative
    sScore = sCardSubtitle.substring(suffixStartIndex);
    sCardSubtitle = sCardSubtitle.substring(0, suffixStartIndex).trim();
  } else {
    sScore = "";
  }

  return (
    <Card
      className={classnames(
        "mt-1 mb-1",
        {
          "app-card-latest": new Date(fixture.DTSTART) < new Date()
        },
        {
          "app-card-upcoming": new Date(fixture.DTSTART) > new Date()
        }
      )}
    >
      <CardBody>
        <CardTitle>
          <h5 style={{ fontWeight: "bold" }}>{sScore}</h5>
        </CardTitle>
        <CardSubtitle>
          <h6>{sCardSubtitle}</h6>
        </CardSubtitle>
        <CardText>
          {new Date(fixture.DTSTART).toDateString()},
          {new Date(fixture.DTSTART).toLocaleTimeString()}
        </CardText>
        <CardText>
          <strong>
            {sCompetition ? sCompetition : "English Premier League"}
          </strong>
        </CardText>
      </CardBody>
    </Card>
  );
}
