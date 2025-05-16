import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

type initialDescription =  {
    descripcion: string
}
const initialState: initialDescription = {
    descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras porttitor condimentum purus ac hendrerit.
    Curabitur ante tellus, sodales a mauris gravida, eleifend consequat lacus.
    Morbi tincidunt venenatis libero sit amet efficitur. Pellentesque nec bibendum dui.
    Quisque ut leo at purus finibus laoreet non vitae nulla. 
    Aliquam purus enim, venenatis a tristique a, faucibus non massa.
    Donec varius interdum tempor.
    Nullam pulvinar lorem enim, non accumsan odio tincidunt vulputate.
    Vivamus tempor posuere turpis, vitae auctor risus bibendum a.
    Mauris vestibulum purus erat, a vulputate ipsum commodo eu.`
};

const descripcionSlice = createSlice({
    name: 'descripcion',
    initialState,
    reducers: {
      setDescription: (state, action: PayloadAction<string>) => {
        state.descripcion = action.payload       
      } 
    },
   
})

export const { setDescription } = descripcionSlice.actions;
export default descripcionSlice.reducer;
