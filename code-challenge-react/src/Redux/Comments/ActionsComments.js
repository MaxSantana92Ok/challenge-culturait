import API from '../Config/api';
export const getCommentsLoading = 'getCommentsLoading';
export const getCommentsSuccess = 'getCommentsSuccess';
export const getCommentsError = 'getCommentsError';

export const getCommentsLoading_actions = () => {
  return {
    type: getCommentsLoading,
  };
};
export const getCommentsSuccess_actions = comments => {
  return {
    type: getCommentsSuccess,
    data: comments,
  };
};
export const getCommentsError_actions = () => {
  return {
    type: getCommentsError,
  };
};
export const getComments = () => {
  /* dispatch(getCommentsLoading_actions()); */
  return dispatch => {
    API({
      url: 'https://jsonplaceholder.typicode.com/comments',
      method: 'get',
    })
      .then(res => {
        console.log({res});
        dispatch(getCommentsSuccess_actions(res.data));
      })
      .catch(error => {
        /* dispatch(getCommentsError_actions()); */
        console.log({error});
      });
  };
};
