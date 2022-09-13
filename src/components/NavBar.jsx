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
            <Link className='text-white text-decoration-none m-3' to='/'>Home</Link>
            <Link className='text-white text-decoration-none mt-3 mb-3' to='/'>Projects</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
