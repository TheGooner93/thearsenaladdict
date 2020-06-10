import React from "react";
import { Container } from "reactstrap";
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { OutboundLink } from 'react-ga';

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
          <OutboundLink
            eventLabel="Github Repo"
            to="https://github.com/TheGooner93/thearsenaladdict"
            target="_blank"
          >
            <i className={classNames("fab fa-github", iconStyle)} />
          </OutboundLink>
          <span>| © {new Date().getFullYear()}</span>
        </div>
      </footer>
    </Container>
  );
}

const jssStyles = {
  iconStyle: {
    marginRight: '0.75rem',
    color: 'white',
    '&:hover': {
      color: 'red'
    }
  }
}

export default injectSheet(jssStyles)(Footer);
