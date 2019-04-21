import { GET_FIXTURES, FIXTURES_LOADING } from "../actions/types";

const initialState = {
  latestFixture: {},
  futureFixtures: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FIXTURES_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case GET_FIXTURES:
      return {
        ...state,
        latestFixture: action.payload.latestFixture,
        futureFixtures: action.payload.futureFixtures
      };
    default:
      return state;
  }
}
