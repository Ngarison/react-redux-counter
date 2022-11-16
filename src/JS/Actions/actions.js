// src/Actions/actions.js

import { INCREMENT_COUNTER } from "../constants/actions-types";

const initialState = {
  counter: 0
};

function rootReducer(state = initialState, action) {
switch (action.type) {
  case INCREMENT_COUNTER:
    
  return {
    counter : state.counter + 1 
  }
  return state;
};
}

export default rootReducer;
