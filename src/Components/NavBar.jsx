import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiBookmark } from "react-icons/ci";
import { BsChatSquareText } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "./images/Logo.png";
import set from "./images/set.png";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
const NavPage = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar className="bg-body-tertiary flex justify-between">
          <Container className="">
            <Navbar.Brand href="#home">
              <img
                src={set}
                width="40"
                height="40"
                className=""
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#">
              <img
                src={logo}
                width="60"
                height="60"
                className="mt-2"
                alt="Logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#" className="font-semibold hover:text-violet-500">Home</Nav.Link>
            <Nav.Link href="#"  className="font-semibold hover:text-violet-500">Internship</Nav.Link>
            <Nav.Link href="#"  className="font-semibold hover:text-violet-500">Jobs</Nav.Link>
            <Nav.Link href="#"  className="font-semibold hover:text-violet-500">Clubs</Nav.Link>
            <div className="bg-cyan-100 w-36 h-10 rounded-md inline-flex justify-center font-semibold text-violet-600">
              <Nav.Link href="#" className="text-violet-600 font-semibold">Switch Mode</Nav.Link>
              <Nav.Link href="#">
                <HiOutlineSwitchHorizontal className="mt-1" />
              </Nav.Link>
            </div>
            <Nav.Link href="#">
              <CiBookmark />
            </Nav.Link>
            <Nav.Link href="#">
              <BsChatSquareText />
            </Nav.Link>
            <Nav.Link href="#">
              <IoMdArrowDropdown />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavPage;
