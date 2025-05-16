import React, { useState,useEffect, useContext, createContext} from "react";

type DescripcionPortadaProps = {
    descripcionPortadaProp: string;
};

const DescripcionPortada :React.FC<DescripcionPortadaProps> = (
    { descripcionPortadaProp }
)=>{    
    return (
        <div>
            <h2>Descripcion</h2>
            <p>{descripcionPortadaProp}</p>
        </div>
    );
}

export default DescripcionPortada
    