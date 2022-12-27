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
      state.isLoading = true;
    },
    [getArts.fulfilled](state, { payload }) {
      state.arts = payload.data;
      state.isLoading = false;
      state.error = null;
    },
    [getArts.rejected](state, { payload }) {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default artsSlice.reducer;
