import { createSlice } from '@reduxjs/toolkit';
const tasksInitialState = {
  array: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContacts(state, action) {
      state.array.push(action.payload);
    },

    deleteContacts(state, action) {
      const deleteId = state.array.findIndex(
        contacts => contacts.id === action.payload
      );
      state.array.splice(deleteId, 1);
      // console.log('state.array', state.array);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
//selectors
export const stateContacts = state => state.contacts.array;
// const deleteContact = id => {
//   setContacts(contacts.filter(contact => contact.id !== id));
// };
