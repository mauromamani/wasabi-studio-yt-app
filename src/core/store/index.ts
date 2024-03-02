import { configureStore } from '@reduxjs/toolkit';
import { editorSlice } from '../../modules/home/redux/slice';

export const store = configureStore({
  reducer: {
    editor: editorSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
