import React, { useState,useEffect, useContext, createContext, useRef} from "react";
import { Banda } from "../../../models";
import Artista from "../artista/Artista";
import {Actions} from "../../../models/actions";
import ToastComponent from "../../../shared/toast/Toast";

type ArtistaPortadaProps = {
    bandas : Banda[];
};

const ArtistasPortada :React.FC<ArtistaPortadaProps> = (
    { bandas }
)=>{    
    // Filtrar las bandas que tienen favorito en true
    const bandasFavoritas = bandas.filter((banda) => banda.favorito);
    const previousFavoritas = useRef(bandasFavoritas.length);
    const isInitialMount = useRef(true);
    const [toastShow, setToastShow] = useState(false);
    const [action, setAction] = useState<Actions>('REMOVE');    

    useEffect(() => {
       if(previousFavoritas.current === bandasFavoritas.length) {
        console.log("no hay cambio")
       }else if(previousFavoritas.current > bandasFavoritas.length){
            previousFavoritas.current = bandasFavoritas.length
            setToastShow(true)
            setAction('REMOVE')
       }else{
            previousFavoritas.current = bandasFavoritas.length
            setToastShow(true)
            setAction('ADD')
       }    
    }, [bandasFavoritas]);

    const updateToastState = (estadoToast:boolean) => {
        setToastShow(estadoToast);
    };
    return (
        <>
            <div className="list">
                {
                bandas.map(
                        (banda: Banda)=><Artista key={banda.nombre} banda = {banda} {...banda}/>
                    )            
                }
            </div> 
            <ToastComponent 
                show = {toastShow}
                updateToastState = {updateToastState}
                action={action}
            />       
        </>
    );
}

export default ArtistasPortada
    