import { combineReducers } from "redux";
import handleUser from "../reducers/userReducer"; // Adjust the path if necessary
import houseReducer from "../reducers/houseReducer"; // Adjust the path if necessary
import reservationsReducer from "../reducers/reservationsReducer"; // Adjust the path if necessary

const rootReducer = combineReducers({
    user: handleUser,
    house: houseReducer,
    reservations: reservationsReducer,
});

export default rootReducer;
