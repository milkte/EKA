/**
 * Created by mupxq on 8/24/17.
 */
import * as actionType from '../constants/actionType/userProfile';

const initialState = {};

export default function userProfile (state = initialState, action) {
    switch (action.type) {
        case actionType.INIT:
            return {};
        case actionType.ADD_USER:
            return Object.assign({}, state, {
                userName: action.userData.userName,
                password: action.userData.password,
                email: action.userData.email,
            });
        case actionType.EDIT_INFO_FORM_2:
            return Object.assign({}, state, {
                firstName: action.userData.firstName,
                lastName: action.userData.lastName,
                tel: action.userData.tel,
            });
        case actionType.EDIT_INFO_FORM_3:
            return Object.assign({}, state, {
                streetLine1: action.userData.streetLine1,
                streetLine2: action.userData.streetLine2,
                city: action.userData.city,
                state: action.userData.state,
                zip: action.userData.zip,
            });
        case actionType.POST_USER_ID:
            return Object.assign({}, state, {
                id: action.id
            });
        default:
            return state;
    }
}