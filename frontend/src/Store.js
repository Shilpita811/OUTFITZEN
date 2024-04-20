import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux";
import {thunk} from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import { userReducer } from "./reducer/Userreducer";


const reducer = combineReducers({
    user: userReducer
});

let initialState={

}

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;