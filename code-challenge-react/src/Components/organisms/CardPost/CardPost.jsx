import React from 'react';
import {useSelector} from 'react-redux';
import Avatar from '../../molecules/Avatar/Avatar';
import './CardPost.css';

const CardPost = ({
  dataPost = {},
  handleClickComents = () => {
    console.log('');
  },
}) => {
  const dataUser = useSelector(state =>
    state.storeInitialData.users.find(user => user.id === dataPost.userId)
  );
  return (
    <div className="CP-CardPost element-shadow">
      <Avatar name={dataUser && dataUser.name ? dataUser.name : ''}></Avatar>
      <div className="CI-Body-Cardpost">
        <h3 className="primary-color">{dataPost.title ? dataPost.title : 'Title'}</h3>
        <p className="secondary-color">{dataPost.body ? dataPost.body : 'Body'}</p>
        <div className="CI-Link-Comments-Cardposts" onClick={() => handleClickComents(dataPost.id)}>
          <h4 className="primary-color-light">See coments</h4>
        </div>
      </div>
    </div>
  );
};
export default CardPost;
