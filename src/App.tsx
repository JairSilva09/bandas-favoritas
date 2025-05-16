// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio';
import Favoritos from './pages/favoritos/Favoritos';
import Header from './shared/header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const App: React.FC = () => {
  const bandas_ = useSelector((state: RootState) => state.bandasReducer.bandas);
  // Filtrar las bandas que tienen favorito en true
  const bandasFavoritas = bandas_.filter((banda) => banda.favorito);
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="favoritos" element={<Favoritos bandas={bandasFavoritas} />} />
        <Route path="*" element={<Inicio />} />
      </Routes>        
    </BrowserRouter>
  );
};

export default App;
