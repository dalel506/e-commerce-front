import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCart } from "../redux/slices/panierSlice";
import { logout } from "../redux/slices/userSlice";
import { ShoppingCart } from 'lucide-react';
import Panier from "./Panier";
import "./NavBar.css";







const NavBar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const { isOpen } = useSelector((state) => state.panier);

  const dispatch = useDispatch();
  const handleCartClick = () => {dispatch(ToggleCart());};

  return (
    <Navbar expand="lg" className="bg-body-tertiary-white px-3 ">
      <Container>
        <Navbar.Brand className="title-nav" href="/">Lunalys</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuth ? (
              <>
                <Nav.Link>
                  <Link style={{ textDecoration: "none", color: "black" }} to="/" >
                    Home
                  </Link>
                </Nav.Link>
                <Button variant="dark" size="sm" onClick={() => dispatch(logout())}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link style={{ textDecoration: "none", color: "black", hover:"" }} to="/products" className="hover-underline">
                    Products
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link style={{ textDecoration: "none", color: "black" }} to="/about" className="hover-underline">
                    About us
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link style={{ textDecoration: "none", color: "black" }} to="/contact" className="hover-underline">
                    Contact us
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
          {!isAuth && (
            <div className="ms-auto d-flex align-items-center gap-2">
              
              <Link to="/login">
                <Button
                  variant="dark"
                  size="sm"
                  className="text-capitalize rounded-pill btn-custom"
                  style={{
                    width: "70px",
                    height: "30px",
                    fontSize: "14px",
                    padding: "2px 5px",
                    backgroundColor: "white",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button 
                  variant="dark"
                  size="sm"
                  className="text-capitalize rounded-pill btn-custom"
                  style={{
                    width: "70px",
                    height: "30px",
                    fontSize: "14px",
                    padding: "2px 5px",
                    backgroundColor: "white",
                    borderColor: "black",
                    color: "black"
                  }}
                >
                  Register
                </Button>
              </Link>
              
              <ShoppingCart  
              onClick={handleCartClick}
               style={{
                 width: "70px",
                 marginBottom: "-2px",
                 height: "30px",
                 fontSize: "14px",
                 padding: "2px 2px",
                 borderColor: "black",
                 color: "black"
               }}
              /> 
          
            
            </div>
          )}
        </Navbar.Collapse>
      </Container>
      <Panier isOpen={isOpen}/>
    </Navbar>
  );
};

export default NavBar;
