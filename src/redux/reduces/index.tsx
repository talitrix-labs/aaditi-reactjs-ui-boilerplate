import { UnknownAction, combineReducers } from 'redux';
import signinSlice from './signIn';

const reducers = combineReducers({
  signin: signinSlice,
});

const rootReducer = (state: { signin: { isloading: boolean; }; } | Partial<{ signin: { isloading: boolean; } | undefined; }> | undefined, action: UnknownAction) => {
  if (action.type === 'user/_logout/fulfilled' || sessionStorage.getItem('token') === null) {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};

export default rootReducer;
