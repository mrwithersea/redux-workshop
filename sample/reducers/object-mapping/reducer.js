import { SIMPLE_ACTION } from 'actions';

const simpleActionReducer = (state, { value }) => ({
  ...state,
  value,
});

const reducers = {
  [SIMPLE_ACTION]: simpleActionReducer,
};

export default (state = {}, action = {}) =>
  (reducers[action.type] ? reducers[action.type](state, action) : state);