import React, { useState,useEffect, useContext, createContext, useRef} from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ImgPortada from "./img-portada/ImgPortada";
import DescripcionPortada from "./descripcion-portada/DescripcionPortada";
import ArtistasPortada from "./artistas-portada/ArtistasPortada";
import { RootState } from "../../store";
import principal from '../../assets/images/principal.jpg';

const Inicio:React.FC<any> = ()=>{  
    const dispatch = useDispatch();
    const bandas_ = useSelector((state: RootState) => state.bandasReducer.bandas);
    const descripcion_ = useSelector((state: RootState) => state.descripcionReducer.descripcion);    
 
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} lg={7}>
                    <ImgPortada 
                        path={principal}
                    />            
                </Col>
                <Col>
                    <DescripcionPortada
                        descripcionPortadaProp = {descripcion_}                    
                    />           
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <ArtistasPortada
                        bandas = {bandas_}
                    />            
                </Col>                                
            </Row>                      
        </Container>
    );
}

export default Inicio



