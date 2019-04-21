import React, { Component } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";

class AllFixtures extends Component {
  render() {
    return (
      <Container>
        <Navbar light className="mt-1 mb-3 rounded app-header">
          <NavbarBrand href="/">
            <h2>The Arsenal Addict</h2>
          </NavbarBrand>
          <div className="level-right">
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

export default AllFixtures;
