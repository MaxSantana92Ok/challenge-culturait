import React, {useLayoutEffect} from 'react';
import {FaSatelliteDish} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Loading from '../../Components/atoms/Loading/Loading';
import {getPostComments, getPostCommentsDefault_actions} from '../../Redux/Posts/ActionsPosts';
import './Comentarios.css';

const Comentarios = () => {
  const {idPost} = useParams();
  const dispatch = useDispatch();
  const {postComments, isGetPostComments} = useSelector(state => state.storePosts);

  useLayoutEffect(() => {
    dispatch(getPostComments(idPost));
    return () => {
      dispatch(getPostCommentsDefault_actions());
    };
  }, [idPost, dispatch]);

  if (isGetPostComments.isLoading) {
    return (
      <React.Fragment>
        <div className="CP-loading-Comentarios">
          <Loading></Loading>
        </div>
      </React.Fragment>
    );
  } else {
    if (isGetPostComments.isError) {
      return (
        <div className="CP-loading-Comentarios">
          <FaSatelliteDish className="icon-Error-Comentarios primary-color"></FaSatelliteDish>
          <h3 className="primary-color-light">{isGetPostComments.mensaje}</h3>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="Layaout-Item animate__animated animate__fadeIn">
            <div className="CP-Comentarios">
              <h2 className="primary-color">Coments</h2>
              {postComments.map((comment, index) => {
                return (
                  <div key={index} className="CP-Comentarios-Post">
                    <h3 className="primary-color">{comment.email}</h3>
                    <p className="primary-color-light">{comment.name}</p>
                    <p>{comment.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
};
export default Comentarios;
