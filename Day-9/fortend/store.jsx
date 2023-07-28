import { createStore, combineReducers } from 'redux';
import loginReducer from './loginreducer';
// import cartReducer from './Cartreducer';
const rootReducer = combineReducers({
  login: loginReducer,
  // cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;