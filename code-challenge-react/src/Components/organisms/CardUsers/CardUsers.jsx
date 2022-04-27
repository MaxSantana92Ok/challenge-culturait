import React from 'react';
import './CardUsers.css';
const CardUsers = ({user = {}}) => {
  return (
    <React.Fragment>
      <div className="CP-CardUsers element-shadow">
        <div className="CI-InfoPersonal-User">
          <div className="infoPersonal-User">
            <h4 className="primary-color">{user.name ? user.name : 'name'}</h4>
            <p>{user.phone ? user.phone : 'phone'}</p>
            <p>{user.email ? user.email : 'email'}</p>
            <p>{user.website ? user.website : 'website'}</p>
            <p>{user.username ? user.username : 'username'}</p>
          </div>
          <div className="domicilio-User">
            <h4 className="primary-color">Address</h4>
            <p>{user.address.street ? user.address.street : 'street'}</p>
            <p>{user.address.suite ? user.address.suite : 'suite'}</p>
            <p>{user.address.city ? user.address.city : 'city'}</p>
            <p>{user.address.zipcode ? user.address.zipcode : 'zipcode'}</p>
          </div>
        </div>
        <div className="CI-InfoLaboral-User">
          <h4 className="primary-color">Company</h4>
          <p>{user.company.name ? user.company.street : 'name'}</p>
          <p>{user.company.catchPhrase ? user.company.catchPhrase : 'catchPhrase'}</p>
          <p>{user.company.bs ? user.company.bs : 'bs'}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CardUsers;
