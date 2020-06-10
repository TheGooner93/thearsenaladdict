import React from "react";
import { Container } from "reactstrap";
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { OutboundLink } from 'react-ga';

function Footer(props) {
  const {
    classes: {
      outboundLinkStyle = {}
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
            <i className={classNames("fab fa-github mr-2", outboundLinkStyle)} />
          </OutboundLink>
          <span>| </span>
          <OutboundLink
            eventLabel="My Portfolio"
            to="https://mohammedehab.com/"
            target="_blank"
          >
            <span className={classNames(outboundLinkStyle)}>
              <span className={'mr-1'}>©</span>
              <span>{new Date().getFullYear()}</span>
            </span>
          </OutboundLink>
        </div>
      </footer>
    </Container>
  );
}

const jssStyles = {
  outboundLinkStyle: {
    color: 'white',
    '&:hover': {
      color: 'red'
    }
  },
}

export default injectSheet(jssStyles)(Footer);
