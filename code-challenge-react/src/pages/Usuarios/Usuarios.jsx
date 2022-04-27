import React from 'react';
import {useSelector} from 'react-redux';
import CardUsers from '../../Components/organisms/CardUsers/CardUsers';
import './Usuarios.css';

const Usuarios = () => {
  const {users} = useSelector(state => state.storeInitialData);

  return (
    <React.Fragment>
      <div className="Layaout-Item animate__animated animate__fadeIn">
        <h2 className="primary-color">Users</h2>
        <div className="CP-Usuarios">
          {users.map((user, index) => {
            return <CardUsers key={index} user={user} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Usuarios;
