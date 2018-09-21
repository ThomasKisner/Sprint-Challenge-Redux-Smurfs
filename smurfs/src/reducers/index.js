

import { combineReducers } from 'redux';
import {smurfReducer} from './smurfReducer.js';

const rootReducer =combineReducers({
    smurfReducer,
});

export default rootReducer