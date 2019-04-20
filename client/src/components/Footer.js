import React from "react";
import { Container } from "reactstrap";
export default function Footer() {
  return (
    <Container>
      <footer className="mt-3 mb-1 border rounded app-footer app-opaque">
        <div className="mt-2 ml-1 mr-1 mb-2">
          <a href="https://github.com/TheGooner93">
            <i className="fab fa-github-alt" /> <strong>GitHub</strong>
          </a>
        </div>
      </footer>
    </Container>
  );
}
