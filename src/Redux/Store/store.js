import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk)) 
 );

 export default configureStore;