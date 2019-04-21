import React from "react";
import { Container, Row } from "reactstrap";
export default function Footer() {
  return (
    <Container>
      <div className="mt-3 mb-1 border rounded app-footer">
        <footer>
          <div className="mt-2 mb-2">
            <a href="https://github.com/TheGooner93">
              <i className="fab fa-github-alt" /> <strong>GitHub</strong>
            </a>
          </div>
        </footer>
      </div>
    </Container>
  );
}
