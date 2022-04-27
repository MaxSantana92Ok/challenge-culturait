import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Albunes from '../pages/Albunes/Albunes';
import AlbunesUsuario from '../pages/AlbunesUsuario/AlbunesUsuario';
import Buscar from '../pages/Buscar/Buscar';
import Comentarios from '../pages/Comentarios/Comentarios';
import FotosAlbunUsuario from '../pages/FotosAlbunUsuario/FotosAlbunUsuario';
import Home from '../pages/Home/Home';
import Tareas from '../pages/Tareas/Tareas';
import Usuarios from '../pages/Usuarios/Usuarios';

const Rutas = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Comments/:idPost" element={<Comentarios />}></Route>

        <Route path="/Users" element={<Usuarios />}></Route>
        <Route path="/Albums" element={<Albunes />}></Route>
        <Route path="/Albums/User/:idUser" element={<AlbunesUsuario />}></Route>
        <Route path="/Albums/User/Photos/:idAlbum" element={<FotosAlbunUsuario />}></Route>

        <Route path="/Tasks" element={<Tareas />}></Route>
        <Route path="/Search" element={<Buscar />}></Route>
        <Route
          path="*"
          element={
            <main style={{paddingTop: '5rem'}}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default Rutas;
