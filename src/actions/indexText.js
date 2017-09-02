/**
 * Created by mupxq on 8/24/17.
 */
import * as actionType from '../constants/actionType/indexTest';

export function testUpdate(data) {
    return {
        type: actionType.TEST,
        data
    }
}