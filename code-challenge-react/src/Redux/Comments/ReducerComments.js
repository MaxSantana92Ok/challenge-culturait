import {getCommentsLoading, getCommentsSuccess, getCommentsError} from './ActionsComments';

const commentsDefault = {
  comments: [],
};

const storeComments = (state = commentsDefault, accion) => {
  switch (accion.type) {
    case getCommentsLoading: {
      return {
        ...state,
      };
    }
    case getCommentsSuccess: {
      return {
        ...state,
        comments: accion.data,
      };
    }
    case getCommentsError: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default storeComments;
