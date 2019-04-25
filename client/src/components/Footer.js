import React from "react";
import { Container } from "reactstrap";
export default function Footer() {
  return (
    <Container className="mt-3 app-footer-wrapper">
      <footer className="app-footer rounded">
        <div className="app-footer-content">
          <a href="https://github.com/TheGooner93">
            <i className="fab fa-github-alt" /> <strong>GitHub</strong>
          </a>
        </div>
      </footer>
    </Container>
  );
}
