import React from 'react';
import './Avatar.css';

const Avatar = ({imagen = '', name = 'Name', isShowName = true}) => {
  return (
    <React.Fragment>
      <div className="CP-Avatar">
        <div className="CI-Avatar">
          <img
            alt="avatar"
            src={
              imagen
                ? `${imagen}`
                : 'https://giovannicosmetics.com/wp-content/uploads/2020/04/For-Men.jpg'
            }
          ></img>
        </div>

        {isShowName && <p className="primary-color">{name ? name.split(' ')[0] : 'Name'}</p>}
      </div>
    </React.Fragment>
  );
};
export default Avatar;
