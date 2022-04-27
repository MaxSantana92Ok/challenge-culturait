import React from 'react';
import './Modal.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const Modal = ({
  isMostrar = false,
  cerrarModal = () => {
    console.log();
  },
  colorIconoCerrarModal = '',
  children,
  isMostrarIconoCerrar = true,
}) => {
  return (
    <div className={`${isMostrar ? 'CP-Modal CP-Modal-Mostrar' : 'CP-Modal'}`}>
      {isMostrarIconoCerrar && (
        <div className="CI-IconoCerrar" onClick={() => cerrarModal()}>
          <AiOutlineCloseCircle
            style={{color: colorIconoCerrarModal}}
            className="iconoCerrar-Modal"
          ></AiOutlineCloseCircle>
        </div>
      )}

      <div className="CI-Contenido-Modal">{children}</div>
    </div>
  );
};
export default Modal;
