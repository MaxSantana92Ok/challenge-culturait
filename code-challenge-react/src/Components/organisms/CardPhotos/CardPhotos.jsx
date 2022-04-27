import React from 'react';
import Avatar from '../../molecules/Avatar/Avatar';
import './CardPhotos.css';

const CardPhotos = ({photo = {}}) => {
  return (
    <React.Fragment>
      <div className="CP-CardPhotos element-shadow">
        <div className="header-CardPhotos">
          <Avatar imagen={photo.thumbnailUrl ? photo.thumbnailUrl : ''} isShowName={false} />
          <p className="primary-color title-CardPhotos">{photo.title ? photo.title : 'Title'}</p>
        </div>
        <div className="body-CardPhotos">
          <img
            alt="img"
            src={
              photo.url
                ? photo.url
                : 'https://giovannicosmetics.com/wp-content/uploads/2020/04/For-Men.jpg'
            }
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CardPhotos;
