import API from '../Config/api';
export const getInitialDataLoading = 'getInitialDataLoading';
export const getInitialDataSuccess = 'getInitialDataSuccess';
export const getInitialDataError = 'getInitialDataError';
export const getInitialDataDefault = 'getInitialDataDefault';
export const getInitialDataLoading_actions = () => {
  return {
    type: getInitialDataLoading,
  };
};
export const getInitialDataSuccess_actions = initialData => {
  return {
    type: getInitialDataSuccess,
    data: initialData,
  };
};
export const getInitialDataError_actions = () => {
  return {
    type: getInitialDataError,
  };
};
export const getInitialDataDefault_accion = () => {
  return {
    type: getInitialDataDefault,
  };
};
export const getInitialData = () => {
  return dispatch => {
    dispatch(getInitialDataLoading_actions());
    var auxDataHome = {};
    API({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    })
      .then(res => {
        auxDataHome = {
          users: res.data,
        };
        API({
          url: 'https://jsonplaceholder.typicode.com/posts',
          method: 'get',
        })
          .then(res => {
            auxDataHome = {
              ...auxDataHome,
              posts: res.data,
            };
            dispatch(getInitialDataSuccess_actions(auxDataHome));
          })
          .catch(error => {
            dispatch(getInitialDataError_actions());
            console.log({error});
          });
      })
      .catch(error => {
        dispatch(getInitialDataError_actions());
        console.log({error});
      });
  };
};
