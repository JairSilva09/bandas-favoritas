import React, { useState,useEffect, useContext, createContext} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from "../../../slices/artistaSlice";
import { Banda } from "../../../models";
import Card from 'react-bootstrap/Card';
import { Button, ListGroup } from "react-bootstrap";
import hand from '../../../assets/images/hand.jpg'
import enojada from '../../../assets/images/enojada.jpg'
import Image from 'react-bootstrap/Image';
import './artista.css'

type ArtistaPortadaProps = {
    banda : Banda;
};

const Artista :React.FC<ArtistaPortadaProps> = (
    { banda }
)=>{
    const dispatch = useDispatch();
    function AddFavoritos(banda: Banda){
        dispatch(changeStatus(banda))
    }
    return (
        <Card className="my-2">
            <Card.Body>
                <Card.Title>{banda.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Mejores canciones</Card.Subtitle>
                <Button variant="link" onClick={() => AddFavoritos(banda)}>{banda.favorito ? "Quitar de favoritos" : "Agregar a Lista de favoritos"} </Button>
                <Image className="icono-state" src={banda.favorito ? enojada : hand} rounded/>
                
                <ListGroup variant="flush">
                    {
                        banda.canciones.map(
                            (cancion: string)=><ListGroup.Item key={cancion}>{cancion}</ListGroup.Item>
                        )            
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Artista
    