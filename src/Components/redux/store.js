import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import movieSlice from './movies/movieSlice';
export default configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice,
    }
})
  