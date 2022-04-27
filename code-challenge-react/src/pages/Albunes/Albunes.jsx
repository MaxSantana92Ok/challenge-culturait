import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Avatar from '../../Components/molecules/Avatar/Avatar';
import './Albunes.css';
const Albunes = () => {
  const {users} = useSelector(state => state.storeInitialData);

  return (
    <React.Fragment>
      <div className="Layaout-Item animate__animated animate__fadeIn">
        <div className="CP-Albunes">
          <h2 className="primary-color">Albums</h2>
          {users.map((user, index) => {
            return (
              <div className="CP-User-Albunes element-shadow" key={index}>
                <div>
                  <Avatar isShowName={false}></Avatar>
                  <p>{user.name}</p>
                </div>
                <Link to={`/Albums/User/${user.id}`} className="CI-Show-Albums">
                  <p className="primary-color-light">Show Albums</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Albunes;
