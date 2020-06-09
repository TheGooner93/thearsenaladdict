import React from "react";
import { Container } from "reactstrap";
import injectSheet from 'react-jss';
import classNames from 'classnames';

function Footer(props) {
  const {
    classes: {
      iconStyle = {}
    }
  } = props;
  return (
    <Container className="mt-3 app-footer-wrapper">
      <footer className="app-footer rounded">
        <div className="app-footer-content">
          <a href="https://github.com/TheGooner93/thearsenaladdict">
            <i className={classNames("fab fa-github", iconStyle)}/>
          </a>
          <span>| © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </Container>
  );
}

const jssStyles = {
  iconStyle : {
    marginRight: '0.75rem',
    color: 'white', 
    '&:hover' : {
      color : 'red'
    }
  }
}

export default injectSheet(jssStyles)(Footer);
