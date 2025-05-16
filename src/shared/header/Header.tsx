// Header.tsx
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Artista Favorito</Navbar.Brand>
        <Navbar.Brand as={Link} to="/favoritos" >Favoritos</Navbar.Brand>        
      </Container>
    </Navbar>
  );
}

export default Header;
