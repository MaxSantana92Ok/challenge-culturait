import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import Navbar from './Components/molecules/Navbar/Navbar';
import Alertas from './Components/organisms/Alertas/Alertas';
import Header from './Components/organisms/Header/Header';
import {getInitialData, getInitialDataDefault_accion} from './Redux/InitialData/ActionsInitialData';
import Rutas from './Rutas/Rutas';

const App = () => {
  const dispatch = useDispatch();
  const {isDataHome} = useSelector(state => state.storeInitialData);
  const respuestaDeAlerta = respuesta => {
    if (respuesta) {
      dispatch(getInitialDataDefault_accion());
    }
  };

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]);

  return (
    <div className="animate__animated animate__fadeIn">
      <Header></Header>
      <div className="LP-Blog animate__animated animate__fadeIn">
        <Rutas></Rutas>
      </div>
      <Navbar></Navbar>
      <Alertas
        colorIconoCerrarModal="white"
        isMostrar={isDataHome.isShow}
        tipoAlerta={isDataHome.tipo}
        mensaje={isDataHome.mensaje}
        isMostrarIconoCerrar={isDataHome.isShowIconClose}
        respuestaDeAlerta={respuestaDeAlerta}
      ></Alertas>
    </div>
  );
};
export default App;
