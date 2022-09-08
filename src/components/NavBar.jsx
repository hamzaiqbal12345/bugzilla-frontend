import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>Bugzilla</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link class='text-white text-decoration-none' to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link class='text-white text-decoration-none' to='/'>Projects</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
