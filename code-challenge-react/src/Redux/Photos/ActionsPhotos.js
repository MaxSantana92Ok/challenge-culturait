import API from '../Config/api';
export const getPhotosLoading = 'getPhotosLoading';
export const getPhotosSuccess = 'getPhotosSuccess';
export const getPhotosError = 'getPhotosError';
export const getPhotosDefault = 'getPhotosDefault';

export const getAlbumPhotosLoading = 'getAlbumPhotosLoading';
export const getAlbumPhotosSuccess = 'getAlbumPhotosSuccess';
export const getAlbumPhotosError = 'getAlbumPhotosError';
export const getAlbumPhotosDefault = 'getAlbumPhotosDefault';

export const getPhotosLoading_actions = () => {
  return {
    type: getPhotosLoading,
  };
};
export const getPhotosSuccess_actions = photos => {
  return {
    type: getPhotosSuccess,
    data: photos,
  };
};
export const getPhotosError_actions = () => {
  return {
    type: getPhotosError,
  };
};
export const getPhotosDefault_actions = () => {
  return {
    type: getPhotosDefault,
  };
};
export const getPhotos = () => {
  return dispatch => {
    dispatch(getPhotosLoading_actions());
    API({
      url: 'https://jsonplaceholder.typicode.com/photos',
      method: 'get',
    })
      .then(res => {
        console.log({res});
        dispatch(getPhotosSuccess_actions(res.data));
      })
      .catch(error => {
        dispatch(getPhotosError_actions());
        console.log({error});
      });
  };
};

/* OBTENER FOTOS DE ALBUM ID */
export const getAlbumPhotosLoading_actions = () => {
  return {
    type: getAlbumPhotosLoading,
  };
};
export const getAlbumPhotosSuccess_actions = photos => {
  return {
    type: getAlbumPhotosSuccess,
    data: photos,
  };
};
export const getAlbumPhotosError_actions = () => {
  return {
    type: getAlbumPhotosError,
  };
};
export const getAlbumPhotosDefault_actions = () => {
  return {
    type: getAlbumPhotosDefault,
  };
};
export const getAlbumPhotos = idAlbum => {
  return dispatch => {
    dispatch(getAlbumPhotosLoading_actions());
    API({
      url: `https://jsonplaceholder.typicode.com/photos?albumId=${idAlbum}`,
      method: 'get',
    })
      .then(res => {
        console.log({res});
        dispatch(getAlbumPhotosSuccess_actions(res.data));
      })
      .catch(error => {
        dispatch(getAlbumPhotosError_actions());
        console.log({error});
      });
  };
};
