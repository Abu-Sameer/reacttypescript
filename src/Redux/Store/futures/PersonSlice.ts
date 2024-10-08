import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Persons {
  id: number;
  name: string;
}

interface PersonState {
  persons: Persons[];
}

const initialState: PersonState = {
  persons: [],
};

export const PersonsSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.persons.push({
        id: state.persons.length + 1,
        name: action.payload.name,
      });
    },
    deletePerson: (state, action: PayloadAction<number>) => {
        state.persons = state.persons.filter((person) => person.id !== action.payload);
      },
  },
});

export default PersonsSlice.reducer;
export const { addPerson, deletePerson } = PersonsSlice.actions;
