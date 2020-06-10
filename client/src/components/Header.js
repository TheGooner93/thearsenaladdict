import React, { Component } from "react";
import { Container, Navbar } from "reactstrap";
import injectSheet from 'react-jss';
import classNames from 'classnames';

class AllFixtures extends Component {
  render() {
    const {
      classes: {
        imageStyle = {}
      }
    } = this.props;

    return (
      <Container>
        <Navbar light className="mb-3 rounded app-header">
          <h2 style={{marginBottom : 0}}>The Arsenal Addict</h2>
          <div className={classNames("level-right", imageStyle)}>
            {" "}
            <img
              src="../arsenal-icon.png"
              className="img-fluid"
              alt="Arsenal"
            />
          </div>
        </Navbar>
      </Container>
    );
  }
}

const jssStyles = {
  imageStyle: {
    '@media (max-width: 490px)': {
      display: 'none'
    }
  }
}

export default injectSheet(jssStyles)(AllFixtures);
