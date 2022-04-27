import React, {useLayoutEffect} from 'react';
import {FaSatelliteDish} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Loading from '../../Components/atoms/Loading/Loading';
import CardAlbum from '../../Components/organisms/CardAlbum/CardAlbum';
import {getAlbumsUser, getAlbumsUserDefault_actions} from '../../Redux/Albums/ActionsAlbums';
import './AlbunesUsuario.css';

const AlbunesUsuario = () => {
  const {idUser} = useParams();
  const dispatch = useDispatch();
  const {albumsUser, isDataAlbumsUser} = useSelector(state => state.storeAlbums);

  useLayoutEffect(() => {
    if (idUser) {
      dispatch(getAlbumsUser(idUser));
    }
    return () => {
      dispatch(getAlbumsUserDefault_actions());
    };
  }, [dispatch, idUser]);

  if (isDataAlbumsUser.isLoading) {
    return (
      <div className="CP-AlbunesUsuario-Loading">
        <Loading></Loading>
      </div>
    );
  } else {
    if (isDataAlbumsUser.isError) {
      return (
        <div className="CP-loading-Comentarios">
          <FaSatelliteDish className="icon-Error-Comentarios primary-color"></FaSatelliteDish>
          <h3 className="primary-color-light">{isDataAlbumsUser.mensaje}</h3>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="Layaout-Item animate__animated animate__fadeIn">
            <h2 className="primary-color">Albums User</h2>
            <div className="CP-AlbunesUsuario">
              {albumsUser.map((albumUser, index) => {
                return <CardAlbum key={index} album={albumUser}></CardAlbum>;
              })}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
};
export default AlbunesUsuario;
