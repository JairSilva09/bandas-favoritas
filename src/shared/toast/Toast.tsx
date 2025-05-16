import { useEffect, useRef, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
import { Actions } from '../../models/actions';

type ToastProps = {
    show:boolean,
    updateToastState: (showToast: boolean) =>void,
    action: Actions 
}

function ToastComponent(
    {
        show,
        updateToastState,
        action
    }:ToastProps){
    const [showA, setShowA] = useState(false);
   
    function close(){
        updateToastState(false)
    }
    return (
        <ToastContainer position="bottom-end" className={'text-white'}>
            <Toast  bg={action === 'ADD'?'success':'danger'} show={show} onClose={close}>
                <Toast.Header>
                    <small className="me-auto">Mis bandas favoritas</small>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                </Toast.Header>
                <Toast.Body>{action === 'ADD'?'Una banda se agregó a la lista de favoritas':'Una banda se quitó de la lista de favoritas'}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default ToastComponent;