import React from 'react';
import {ImImage} from 'react-icons/im';
import {NavLink} from 'react-router-dom';
import './CardAlbum.css';
/* REVISAR PETICIONES AL VOLVER ATRÁS EN NAVEGACIÓN */
const CardAlbum = ({album = {}}) => {
  return (
    <React.Fragment>
      <NavLink to={`/Albums/User/Photos/${album.id}`} className="NavLinks-CardAlbum">
        <div className="CP-CardAlbums element-shadow">
          <h3 className="primary-color">
            {Object.keys(album).length > 0 && album.title ? album.title : 'Title'}
          </h3>
          <ImImage className="icon-Image-CardAlbum"></ImImage>
        </div>
      </NavLink>
    </React.Fragment>
  );
};
export default CardAlbum;
