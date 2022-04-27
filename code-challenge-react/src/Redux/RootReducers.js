import {combineReducers} from 'redux';
import storeInitialData from './InitialData/ReducerInitialData';
import storePosts from './Posts/ReducerPosts';
import storeAlbums from './Albums/ReducerAlbums';
import storePhotos from './Photos/ReducerPhotos';
import storeComments from './Comments/ReducerComments';
import storeTasks from './Tasks/ReducerTasks';
const RootReducers = combineReducers({
  storeInitialData,
  storePosts,
  storeAlbums,
  storePhotos,
  storeComments,
  storeTasks,
});
export default RootReducers;
