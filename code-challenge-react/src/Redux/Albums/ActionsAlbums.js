import API from '../Config/api';
export const getAlbumsLoading = 'getAlbumsLoading';
export const getAlbumsSuccess = 'getAlbumsSuccess';
export const getAlbumsError = 'getAlbumsError';
export const getAlbumsDefault = 'getAlbumsDefault';

export const getAlbumsUserLoading = 'getAlbumsUserLoading';
export const getAlbumsUserSuccess = 'getAlbumsUserSuccess';
export const getAlbumsUserError = 'getAlbumsUserError';
export const getAlbumsUserDefault = 'getAlbumsUserDefault';

export const getAlbumsLoading_actions = () => {
  return {
    type: getAlbumsLoading,
  };
};
export const getAlbumsSuccess_actions = albums => {
  return {
    type: getAlbumsSuccess,
    data: albums,
  };
};
export const getAlbumsError_actions = () => {
  return {
    type: getAlbumsError,
  };
};
export const getAlbumsDefault_actions = () => {
  return {
    type: getAlbumsDefault,
  };
};
export const getAlbums = () => {
  return dispatch => {
    dispatch(getAlbumsLoading_actions());
    API({
      url: 'https://jsonplaceholder.typicode.com/albums',
      method: 'get',
    })
      .then(res => {
        console.log({res});
        dispatch(getAlbumsSuccess_actions(res.data));
      })
      .catch(error => {
        dispatch(getAlbumsError_actions());
        console.log({error});
      });
  };
};

/* TRAER ALBUM POR USUARIO */
export const getAlbumsUserLoading_actions = () => {
  return {
    type: getAlbumsUserLoading,
  };
};
export const getAlbumsUserSuccess_actions = albums => {
  return {
    type: getAlbumsUserSuccess,
    data: albums,
  };
};
export const getAlbumsUserError_actions = () => {
  return {
    type: getAlbumsUserError,
  };
};
export const getAlbumsUserDefault_actions = () => {
  return {
    type: getAlbumsUserDefault,
  };
};
export const getAlbumsUser = userId => {
  return dispatch => {
    dispatch(getAlbumsUserLoading_actions());
    API({
      url: `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
      method: 'get',
    })
      .then(res => {
        console.log({res});

        dispatch(getAlbumsUserSuccess_actions(res.data));
      })
      .catch(error => {
        dispatch(getAlbumsUserError_actions());
        console.log({error});
      });
  };
};
