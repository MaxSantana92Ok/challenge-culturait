import API from '../Config/api';
export const getPostsLoading = 'getPostsLoading';
export const getPostsSuccess = 'getPostsSuccess';
export const getPostsError = 'getPostsError';

export const getPostCommentsLoading = 'getPostCommentsLoading';
export const getPostCommentsSuccess = 'getPostCommentsSuccess';
export const getPostCommentsError = 'getPostCommentsError';
export const getPostCommentsDefault = 'getPostCommentsDefault';

export const getPostsLoading_actions = () => {
  return {
    type: getPostsLoading,
  };
};
export const getPostsSuccess_actions = posts => {
  return {
    type: getPostsSuccess,
    data: posts,
  };
};
export const getPostsError_actions = () => {
  return {
    type: getPostsError,
  };
};
export const getPosts = () => {
  /* dispatch(getPostsLoading_actions()); */
  return dispatch => {
    API({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'get',
    })
      .then(res => {
        dispatch(getPostsSuccess_actions(res.data));
      })
      .catch(error => {
        /* dispatch(getPostsError_actions()) */
        console.log({error});
      });
  };
};

/* Obtener comentarios de post */
export const getPostCommentsLoading_actions = () => {
  return {
    type: getPostCommentsLoading,
  };
};
export const getPostCommentsSucces_actions = posts => {
  return {
    type: getPostCommentsSuccess,
    data: posts,
  };
};
export const getPostCommentsError_actions = () => {
  return {
    type: getPostCommentsError,
  };
};
export const getPostCommentsDefault_actions = () => {
  return {
    type: getPostCommentsDefault,
  };
};
export const getPostComments = idPost => {
  return dispatch => {
    dispatch(getPostCommentsLoading_actions());
    API({
      url: `https://jsonplaceholder.typicode.com/posts/${idPost}/comments`,
      method: 'get',
    })
      .then(res => {
        dispatch(getPostCommentsSucces_actions(res.data));
      })
      .catch(error => {
        dispatch(getPostCommentsError_actions());
        console.log({error});
      });
  };
};
