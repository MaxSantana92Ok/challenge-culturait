import {
  getInitialDataLoading,
  getInitialDataSuccess,
  getInitialDataError,
  getInitialDataDefault,
} from './ActionsInitialData';
const initialDataDefault = {
  users: [],
  posts: [],
  isDataHome: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
    isShowIconClose: false,
  },
};

const storeInitialData = (state = initialDataDefault, accion) => {
  switch (accion.type) {
    case getInitialDataLoading: {
      return {
        ...state,
        isDataHome: {
          tipo: 'loading',
          isShow: true,
          mensaje: 'Loading Data...',
          isShowIconClose: false,
        },
      };
    }
    case getInitialDataSuccess: {
      return {
        ...state,
        users: accion.data.users,
        posts: accion.data.posts,
        isDataHome: {
          tipo: '',
          isShow: false,
          mensaje: '',
          isShowIconClose: false,
        },
      };
    }
    case getInitialDataError: {
      return {
        ...state,
        isDataHome: {
          tipo: 'error',
          isShow: true,
          mensaje: 'Sorry, the data could not be loaded.',
          isShowIconClose: false,
        },
      };
    }
    case getInitialDataDefault: {
      return {
        ...state,
        isDataHome: {
          tipo: '',
          isShow: false,
          mensaje: '',
          isShowIconClose: false,
        },
      };
    }
    default:
      return state;
  }
};

export default storeInitialData;
