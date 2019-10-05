import {EDIT_CLICK} from '../actionTypes'

export const editTask = (state = [], action) => {
    switch(action.type) {
        case EDIT_CLICK: return action.editTask;
        default: return state;
    };
}