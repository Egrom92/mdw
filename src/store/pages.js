import { createSlice } from "@reduxjs/toolkit";
import hc from "../request/hc";

const getInitialState = () => ({
  pages: null,
  loading: false,
});

export const pageSlice = createSlice({
  name: "page",

  initialState: getInitialState(),

  reducers: {
    setState(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const load = (params) => async (dispatch) => {
  dispatch(setState({ loading: true }));

  const pages = await hc.get("/pages",  params);

  dispatch(
    setState({
      loading: false,
      pages,
    })
  );
};


export const { get, setState } = pageSlice.actions;

export default pageSlice.reducer;
