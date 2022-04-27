import {
  getPostsLoading,
  getPostsSuccess,
  getPostsError,
  getPostCommentsLoading,
  getPostCommentsSuccess,
  getPostCommentsError,
  getPostCommentsDefault,
} from './ActionsPosts';

const postsDefault = {
  posts: [],
  postComments: [],
  isGetPostComments: {
    isLoading: false,
    isError: false,
    mensaje: '',
  },
};

const storePosts = (state = postsDefault, accion) => {
  switch (accion.type) {
    case getPostsLoading: {
      return {
        ...state,
      };
    }
    case getPostsSuccess: {
      return {
        ...state,
        posts: accion.data,
      };
    }
    case getPostsError: {
      return {
        ...state,
      };
    }
    case getPostCommentsLoading: {
      return {
        ...state,
        isGetPostComments: {isLoading: true, isError: false, mensaje: ''},
      };
    }
    case getPostCommentsSuccess: {
      return {
        ...state,
        isGetPostComments: {isLoading: false, isError: false, mensaje: ''},
        postComments: accion.data,
      };
    }
    case getPostCommentsError: {
      return {
        ...state,
        isGetPostComments: {
          isLoading: false,
          isError: true,
          mensaje: 'Sorry, something went wrong...',
        },
      };
    }
    case getPostCommentsDefault: {
      return {
        ...state,
        postComments: [],
        isGetPostComments: {
          isLoading: false,
          isError: false,
          mensaje: '',
        },
      };
    }
    default:
      return state;
  }
};

export default storePosts;
