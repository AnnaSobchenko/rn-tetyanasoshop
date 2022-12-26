import { createSlice } from "@reduxjs/toolkit/dist";
import { getArts } from "./artsOperations";

const artsSlice = createSlice({
  name: "arts",
  initialState: {
    arts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // getArts
    [getArts.pending](state) {
      state.error = null;
    },
    [getArts.fulfilled](state, { payload }) {
      state.arts = [...payload.data];
    },
    [getArts.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export default artsSlice.reducer;
