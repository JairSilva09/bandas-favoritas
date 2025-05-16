import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { Banda } from '../models';
import { Bandas } from '../bandas.mock';

type initialbandas =  {
  bandas: Banda[]
}
const initialState: initialbandas = {
  bandas: Bandas
};

const artistaSlice = createSlice({
  name: 'bandas',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<Banda>) => {
      state.bandas = state.bandas.map((banda: Banda) => {
        if (banda.nombre === action.payload.nombre) {
          return {
            ...banda,
            favorito: !banda.favorito,
          };
        }
        return banda;
      });
    } 
  },    
})

export const { changeStatus } = artistaSlice.actions;
export default artistaSlice.reducer;
