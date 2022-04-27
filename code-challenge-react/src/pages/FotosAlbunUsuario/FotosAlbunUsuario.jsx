/* Componente Realiza petición a API debe controlarse casos cargando, exito y error en redux luego listar imágenes */

import React, {useLayoutEffect} from 'react';
import {FaSatelliteDish} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Loading from '../../Components/atoms/Loading/Loading';
import CardPhotos from '../../Components/organisms/CardPhotos/CardPhotos';
import {getAlbumPhotos, getAlbumPhotosDefault_actions} from '../../Redux/Photos/ActionsPhotos';
import './FotosAlbunUsuario.css';

const FotosAlbunUsuario = () => {
  const {idAlbum} = useParams();
  console.log(idAlbum);
  const dispatch = useDispatch();
  const {photosAlbum, isDataPhotosAlbum} = useSelector(state => state.storePhotos);

  useLayoutEffect(() => {
    if (idAlbum) {
      dispatch(getAlbumPhotos(idAlbum));
    }
    return () => {
      dispatch(getAlbumPhotosDefault_actions());
    };
  }, [dispatch, idAlbum]);
  if (isDataPhotosAlbum.isLoading) {
    return (
      <div className="CP-Loading-FotosAlbunUsuario">
        <Loading></Loading>
      </div>
    );
  } else {
    if (isDataPhotosAlbum.isError) {
      return (
        <div className="CP-loading-Comentarios">
          <FaSatelliteDish className="icon-Error-Comentarios primary-color"></FaSatelliteDish>
          <h3 className="primary-color-light">{isDataPhotosAlbum.mensaje}</h3>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="Layaout-Item animate__animated animate__fadeIn">
            <div className="CP-FotosAlbunUsuario">
              {photosAlbum.length > 0 &&
                photosAlbum.map((photo, index) => {
                  return <CardPhotos key={index} photo={photo} />;
                })}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
};
export default FotosAlbunUsuario;
