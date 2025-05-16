import { configureStore } from '@reduxjs/toolkit';
import bandasReducer from './slices/artistaSlice';
import descripcionReducer from './slices/descripcion.slice'

const store = configureStore({
    reducer: {
        bandasReducer,
        descripcionReducer
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;