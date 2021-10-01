//import dependencies
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './reducers'

//connect to redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'

//create initial state
const initialState = {};

//apply middleware
const middleware = [thunk]

//setup store
const store = createStore(
	combineReducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

//export store
export default store;

