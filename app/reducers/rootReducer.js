import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import infoReducer from './infoReducer';

const reducers = combineReducers({
    userData: nameReducer,
    infoData: infoReducer
});

export default reducers;