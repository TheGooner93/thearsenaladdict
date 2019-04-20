import axios from "axios";
import { GET_FIXTURES } from "./types";

export const getFixtures = () => dispatch => {
  axios
    .get("/fixtures")
    .then(res => dispatch({ type: GET_FIXTURES, payload: res.data }))
    .catch(err => console.log(err));
};
