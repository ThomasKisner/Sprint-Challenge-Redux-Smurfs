
import * as actionTypes from '../actions';

const initialState =  {
    smurfs: [],
    gettingSmurfs: false,
    gotSmurfs: false,
    addingSmurf: false,
    addedSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
  }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GETTING_SMURFS:
            return{
                ...state, 
                gettingSmurfs: true};
        case actionTypes.GOT_SMURFS:
            return{
                ...state,
                smurfs: action.payload, 
                fetchingSmurfs:false,
                gotSmurfs: true,
            };
        case actionTypes.ADDING_SMURF:
            return{
                ...state, 
                addingSmurf: true,
            }
        case actionTypes.ADDED_SMURF:
            return{
                ...state,
                smurfs: action.payload, 
                addingSmurf: false,
                addedSmurf: true,
            }
        case actionTypes.ERROR:
            return{
                ...state,
                gettingSmurfs: false,
                gotSmurfs: false,
                addingSmurf: false,
                addedSmurf: false,
                updatingSmurf: false,
                deletingSmurf: false,
                error: null,
            }
        default:
        return state;
    }
};
