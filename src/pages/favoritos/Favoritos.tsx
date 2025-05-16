import React, { useState,useEffect, useContext, createContext, useRef} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from "../../slices/artistaSlice";
import { Actions, Banda } from "../../models";
import Card from 'react-bootstrap/Card';
import { Button, ListGroup, Container, Row, Col } from "react-bootstrap";
import Artista from "../inicio/artista/Artista";
import ToastComponent from "../../shared/toast/Toast";

type FavoritosProps = {
    bandas: Banda[]
};

const Favoritos :React.FC<FavoritosProps> = (
    { bandas }
)=>{ 
    const isInitialMount = useRef(true);
    const [toastShow, setToastShow] = useState(false);
    const [action, setAction] = useState<Actions>('REMOVE');
    useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false;
        }else{
            setToastShow(true);
            setAction('REMOVE')
        }       
    }, [bandas]);

    const updateToastState = (estadoToast:boolean) => {
        setToastShow(estadoToast);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className="list">
                        {
                        bandas.map(
                                (banda: Banda)=><Artista key={banda.nombre} banda = {banda} {...banda}/>
                            )            
                        }
                    </div>
                </Col>
                <ToastComponent
                    show = {toastShow}
                    updateToastState = {updateToastState}
                    action={action}
                />
            </Row>            
        </Container>        
    );
}

export default Favoritos
    