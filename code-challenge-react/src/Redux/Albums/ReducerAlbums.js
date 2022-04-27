import {
  getAlbumsLoading,
  getAlbumsSuccess,
  getAlbumsError,
  getAlbumsDefault,
  getAlbumsUserLoading,
  getAlbumsUserSuccess,
  getAlbumsUserError,
  getAlbumsUserDefault,
} from './ActionsAlbums';

const albumsDefault = {
  albums: [],
  albumsUser: [],
  isDataAlbums: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
    isShowIconClose: false,
  },
  isDataAlbumsUser: {
    isLoading: false,
    isError: false,
    mensaje: '',
  },
};

const storeAlbums = (state = albumsDefault, accion) => {
  switch (accion.type) {
    case getAlbumsLoading: {
      return {
        ...state,
        isDataAlbums: {
          tipo: 'loading',
          isMostrar: true,
          mensaje: 'fetching data',
          isShowIconClose: false,
        },
      };
    }
    case getAlbumsSuccess: {
      return {
        ...state,
        albums: accion.data,
        isDataAlbums: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
          isShowIconClose: false,
        },
      };
    }
    case getAlbumsError: {
      return {
        ...state,
        isDataAlbums: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Sorry, the data could not be loaded.',
          isShowIconClose: false,
        },
      };
    }
    case getAlbumsDefault: {
      return {
        ...state,
        isDataAlbums: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
          isShowIconClose: false,
        },
      };
    }

    case getAlbumsUserLoading: {
      return {
        ...state,
        isDataAlbumsUser: {
          isLoading: true,
          isError: false,
          mensaje: '',
        },
      };
    }
    case getAlbumsUserSuccess: {
      return {
        ...state,
        isDataAlbumsUser: {
          isLoading: false,
          isError: false,
          mensaje: '',
        },
        albumsUser: accion.data,
      };
    }
    case getAlbumsUserError: {
      return {
        ...state,
        isDataAlbumsUser: {
          isLoading: false,
          isError: true,
          mensaje: 'Sorry, something went wrong...',
        },
      };
    }
    case getAlbumsUserDefault: {
      return {
        ...state,
        isDataAlbumsUser: {
          isLoading: false,
          isError: false,
          mensaje: '',
        },
        albumsUser: [],
      };
    }
    default:
      return state;
  }
};

export default storeAlbums;
