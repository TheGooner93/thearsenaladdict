import axios from "axios";
import { GET_FIXTURES, FIXTURES_LOADING } from "./types";

export const getFixtures = () => dispatch => {
  dispatch({ type: FIXTURES_LOADING, payload: true });
  axios
    .get("/fixtures")
    .then(res => {
      dispatch({ type: GET_FIXTURES, payload: res.data });
      dispatch({ type: FIXTURES_LOADING, payload: false });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FIXTURES_LOADING, payload: false });
    });
};
