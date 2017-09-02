/**
 * Created by mupxq on 8/24/17.
 */
import * as actionType from '../constants/actionType/indexTest';

const initialState = {};

export default function indexTest (state = initialState, action) {
    switch (action.type) {
        case actionType.TEST:

            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state;
    }
}