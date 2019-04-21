import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import { connect } from "react-redux";

import { getFixtures } from "../actions/fixtureActions";
import FixtureCard from "./FixtureCard";

class FixtureList extends Component {
  componentDidMount() {
    //Fetch all fixtures
    this.props.getFixtures();
  }
  render() {
    const { latestFixture, futureFixtures } = this.props.fixtures;
    return (
      <Container className="app-content">
        {latestFixture && futureFixtures ? (
          <div>
            <Row>
              <Col xs="12" sm="12" xl="12">
                <div className="container app-headings border rounded">
                  <h2>Latest</h2>
                </div>
              </Col>
            </Row>
            <Row>
              {latestFixture && Object.keys(latestFixture).length ? (
                <Col xs="12" sm="12" xl="12">
                  <FixtureCard fixture={latestFixture} />
                </Col>
              ) : (
                <Col xs="12" sm="12" xl="12">
                  <div className="container mt-1" style={{ textAlign: "left" }}>
                    <h3>No Available Fixture</h3>
                  </div>
                </Col>
              )}
            </Row>
            <Row>
              <Col xs="12" sm="12" xl="12">
                <div className="container app-headings border rounded">
                  <h2>Upcoming</h2>
                </div>
              </Col>
            </Row>
            <Row>
              {futureFixtures && futureFixtures.length ? (
                futureFixtures.map(fixture => (
                  <Col key={fixture.UID} xs="12" sm="6" xl="4">
                    <FixtureCard fixture={fixture} />
                  </Col>
                ))
              ) : (
                <Col xs="12" sm="12" xl="12">
                  <div className="container mt-1" style={{ textAlign: "left" }}>
                    <h3>No Scheduled Fixtures</h3>
                  </div>
                </Col>
              )}
            </Row>
          </div>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  fixtures: state.fixtures
});

export default connect(
  mapStateToProps,
  { getFixtures }
)(FixtureList);
