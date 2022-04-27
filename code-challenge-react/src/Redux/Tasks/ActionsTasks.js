import API from '../Config/api';
export const getTasksLoading = 'getTasksLoading';
export const getTasksSuccess = 'getTasksSuccess';
export const getTasksError = 'getTasksError';

export const getTasksLoading_actions = () => {
  return {
    type: getTasksLoading,
  };
};
export const getTasksSuccess_actions = tasks => {
  return {
    type: getTasksSuccess,
    data: tasks,
  };
};
export const getTasksError_actions = () => {
  return {
    type: getTasksError,
  };
};
export const getTasks = () => {
  /* dispatch(getTasksLoading_actions()); */
  return dispatch => {
    API({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'get',
    })
      .then(res => {
        console.log({res});
        dispatch(getTasksSuccess_actions(res.data));
      })
      .catch(error => {
        /* dispatch(getTasksError_actions()); */
        console.log({error});
      });
  };
};
