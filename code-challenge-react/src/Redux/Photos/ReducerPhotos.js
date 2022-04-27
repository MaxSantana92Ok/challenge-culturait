import {
  getPhotosLoading,
  getPhotosSuccess,
  getPhotosError,
  getPhotosDefault,
  getAlbumPhotosLoading,
  getAlbumPhotosSuccess,
  getAlbumPhotosError,
  getAlbumPhotosDefault,
} from './ActionsPhotos';

const photosDefault = {
  photos: [],
  isDataPhotos: {
    tipo: '',
    isMostrar: false,
    mensaje: '',
    isShowIconClose: false,
  },
  photosAlbum: [],
  isDataPhotosAlbum: {
    isLoading: false,
    isError: false,
    mensaje: '',
  },
};

const storePhotos = (state = photosDefault, accion) => {
  switch (accion.type) {
    case getPhotosLoading: {
      return {
        ...state,
        isDataPhotos: {
          tipo: 'loading',
          isMostrar: true,
          mensaje: 'fetching data',
          isShowIconClose: false,
        },
      };
    }
    case getPhotosSuccess: {
      return {
        ...state,
        isDataPhotos: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
          isShowIconClose: false,
        },
        photos: accion.data,
      };
    }
    case getPhotosError: {
      return {
        ...state,
        isDataPhotos: {
          tipo: 'error',
          isMostrar: true,
          mensaje: 'Sorry, the data could not be loaded.',
          isShowIconClose: false,
        },
      };
    }
    case getPhotosDefault: {
      return {
        ...state,
        isDataPhotos: {
          tipo: '',
          isMostrar: false,
          mensaje: '',
          isShowIconClose: false,
        },
      };
    }

    case getAlbumPhotosLoading: {
      return {
        ...state,
        isDataPhotosAlbum: {
          isLoading: true,
          isError: false,
          mensaje: '',
        },
      };
    }
    case getAlbumPhotosSuccess: {
      return {
        ...state,
        isDataPhotosAlbum: {
          isLoading: false,
          isError: false,
          mensaje: '',
        },
        photosAlbum: accion.data,
      };
    }
    case getAlbumPhotosError: {
      return {
        ...state,
        isDataPhotosAlbum: {
          isLoading: false,
          isError: true,
          mensaje: 'Sorry, something went wrong...',
        },
      };
    }
    case getAlbumPhotosDefault: {
      return {
        ...state,
        isDataPhotosAlbum: {
          isLoading: false,
          isError: false,
          mensaje: '',
        },
        photosAlbum: [],
      };
    }
    default:
      return state;
  }
};

export default storePhotos;
