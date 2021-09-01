import { combineReducers } from "redux";
import raffleReducer from "./raffleReducer"

const reducers = combineReducers({
    raffle: raffleReducer
});

export default reducers