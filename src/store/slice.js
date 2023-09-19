import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data/Data";
const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updateremove = state.find((user) => user.id == id);
      if (updateremove) {
        return state.filter((data) => data.id !== id);
      }
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const update = state.find((user) => user.id == id);
      if (update) {
        update.name = name;
        update.email = email;
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
