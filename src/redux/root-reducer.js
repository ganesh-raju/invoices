import { combineReducers } from "redux";

import elementsReducer from "./elements/reducer";

const rootReducer = combineReducers({
    elements: elementsReducer
});

export default rootReducer;