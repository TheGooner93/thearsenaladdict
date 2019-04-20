import { GET_FIXTURES } from "../actions/types";

const initialState = {
  latestFixture: {},
  futureFixtures: []
};

export default function(state = initialState, action) {
  switch (action.type) {
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
