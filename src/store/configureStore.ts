import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({ serialize: true });
export const store = createStore(rootReducer, composeEnhancers());
