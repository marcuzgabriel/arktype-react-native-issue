import { configureStore } from '@reduxjs/toolkit';
import api from '../../reducers/slices/api';


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => {
    let middlewareList = [api.middleware];

    // if (__DEV__) {
    //   middlewareList = middlewareList.concat(reduxFlipperMiddleware());
    // }

    const middlewares = getDefaultMiddleware();
    return middlewares.concat(middlewareList);
  },
});

export type AppDispatch = typeof store.dispatch;
export interface RootState {
  api: ReturnType<typeof api.reducer>;
}

export default store;
