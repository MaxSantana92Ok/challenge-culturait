import {getTasksLoading, getTasksSuccess, getTasksError} from './ActionsTasks';

const tasksDefault = {
  tasks: [],
};

const storeTasks = (state = tasksDefault, accion) => {
  switch (accion.type) {
    case getTasksLoading: {
      return {
        ...state,
      };
    }
    case getTasksSuccess: {
      return {
        ...state,
        tasks: accion.data,
      };
    }
    case getTasksError: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default storeTasks;
