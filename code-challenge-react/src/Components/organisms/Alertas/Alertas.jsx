import React from 'react';
import './Alertas.css';
import Loading from '../../atoms/Loading/Loading';
import Modal from '../../molecules/Modal/Modal';
import Success from '../../atoms/Success/Success';
import {VscError} from 'react-icons/vsc';

const Alertas = ({
  isMostrar = false,
  tipoAlerta = '',
  cerrarModal = () => {
    console.log();
  },
  mensaje = '',
  colorIconoCerrarModal = '',
  isMostrarIconoCerrar = false,
  respuestaDeAlerta = () => {
    console.log('');
  },
}) => {
  return (
    <React.Fragment>
      {tipoAlerta === 'loading' && (
        <Modal
          colorIconoCerrarModal={colorIconoCerrarModal}
          isMostrarIconoCerrar={isMostrarIconoCerrar}
          isMostrar={isMostrar}
          cerrarModal={cerrarModal}
        >
          <div className="CI-Body-Alerta">
            <Loading></Loading>
            {<p className="mensaje-Alerta">{mensaje ? mensaje : 'Mensaje'}</p>}
          </div>
        </Modal>
      )}
      {tipoAlerta === 'success' && (
        <Modal
          colorIconoCerrarModal={colorIconoCerrarModal}
          isMostrarIconoCerrar={isMostrarIconoCerrar}
          isMostrar={isMostrar}
          cerrarModal={cerrarModal}
        >
          <div className="CI-Body-Alerta">
            <Success></Success>
            {<p className="mensaje-Alerta">{mensaje ? mensaje : 'Mensaje'}</p>}
          </div>
        </Modal>
      )}
      {tipoAlerta === 'error' && (
        <Modal
          colorIconoCerrarModal={colorIconoCerrarModal}
          isMostrarIconoCerrar={isMostrarIconoCerrar}
          isMostrar={isMostrar}
          cerrarModal={cerrarModal}
        >
          <div className="CI-Body-Alerta">
            <VscError className="iconoError-Alerta" />
            <p className="mensaje-Alerta">{mensaje ? mensaje : 'Mensaje'}</p>
            <div className="ok-Alerta-Error" onClick={() => respuestaDeAlerta(true)}>
              <p>ok</p>
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};
export default Alertas;
