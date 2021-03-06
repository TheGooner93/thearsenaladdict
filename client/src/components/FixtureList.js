import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import { connect } from "react-redux";

import { getFixtures } from "../actions/fixtureActions";
import FixtureCard from "./FixtureCard";
import helper from '../utility/helper';

class FixtureList extends Component {
  componentDidMount() {

    //Fetch all fixtures
    this.props.getFixtures();
    helper.registerGAPageView(window.location.pathname);
  }
  render() {
    const { latestFixture, futureFixtures, isLoading } = this.props.fixtures;
    return (
      <Container className="app-content">
        {isLoading ? (
          <Col xs="12" sm="12" xl="12">
            Loading...
          </Col>
        ) :
          latestFixture && futureFixtures ? (
            <div>
              <Row>
                <Col xs="12" sm="12" xl="12">
                  <div className="container app-headings">
                    <h2 style={{ marginBottom: 0, padding: '0.4rem 0 0.4rem 0' }}>Latest</h2>
                  </div>
                </Col>
              </Row>
              <Row className='mt-3'>
                {latestFixture && Object.keys(latestFixture).length ? (
                  <Col xs="12" sm="12" xl="12">
                    <FixtureCard fixture={latestFixture} />
                  </Col>
                ) : (
                    <Col xs="12" sm="12" xl="12">
                      <div className="container" style={{ minHeight: '11rem', textAlign: "left" }}>
                        <h3>No fixtures available</h3>
                      </div>
                    </Col>
                  )}
              </Row>
              <Row>
                <Col xs="12" sm="12" xl="12">
                  <div className="container app-headings">
                    <h2 style={{ marginBottom: 0, padding: '0.4rem 0 0.4rem 0' }}>Upcoming</h2>
                  </div>
                </Col>
              </Row>
              <Row className='mt-3'>
                {/* {isLoading ? (
                <Col xs="12" sm="12" xl="12">
                  <Spinner />
                </Col>
              ) : (
                ""
              )} */}
                {futureFixtures && futureFixtures.length ? (
                  futureFixtures.map(fixture => (
                    <Col key={fixture.UID} xs="12" sm="6" xl="4">
                      <FixtureCard fixture={fixture} />
                    </Col>
                  ))
                ) : (
                    <Col xs="12" sm="12" xl="12">
                      <div className="container" style={{ minHeight: '11rem', textAlign: "left" }}>
                        <h3>No fixtures scheduled</h3>
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
