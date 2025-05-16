import React from "react";
import Image from 'react-bootstrap/Image';
import './imgPortada.css'

interface ImgPortadaProps {
  path: string;
}

const ImgPortada: React.FC<ImgPortadaProps> = ({ path }) => {    
    return (
        <div className="cont-img">
            <Image src={path} rounded style={{ width: '100%'}}/>
        </div>
    );
}

export default ImgPortada