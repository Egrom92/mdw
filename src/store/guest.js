import { createSlice } from "@reduxjs/toolkit";
import hc from "../request/hc";

const getInitialState = () => ({
  guest: null,
  loading: false,
});

export const guestSlice = createSlice({
  name: "guest",

  initialState: getInitialState(),

  reducers: {
    setState(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const load = (params) => async (dispatch) => {
  dispatch(setState({ loading: true }));

  const guest = await hc.get("/guest/" + params);
  console.log('state guest ----', guest);

  dispatch(
    setState({
      loading: false,
      guest,
    })
  );
};


export const { get, setState } = guestSlice.actions;

export default guestSlice.reducer;
