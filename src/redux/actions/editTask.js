import {EDIT_CLICK} from '../actionTypes'

export const editClick = (taskId) => {
    return {
        type: EDIT_CLICK,
        editTask: taskId
    }
}