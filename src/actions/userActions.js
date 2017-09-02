
import * as actionType from '../constants/actionType/userProfile';

export function addUser(userData) {
    return {
        type: actionType.ADD_USER,
        userData
    }
}

export function init(){
    return {
        type: actionType.INIT,
    }
}

export function editForm2(userData){
    return {
        type: actionType.EDIT_INFO_FORM_2,
        userData
    }
}
export function editForm3(userData){
    return {
        type: actionType.EDIT_INFO_FORM_3,
        userData
    }
}

export function postId(id){
    return {
        type: actionType.POST_USER_ID,
        id
    }
}