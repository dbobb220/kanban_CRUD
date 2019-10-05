import {OPEN_ASIDE, CLOSE_ASIDE, ASIDE_CONTENT} from '../actionTypes';

export const asideActive = (state = false, action) => {
    switch(action.type) {
        case OPEN_ASIDE: return action.asideActive;
        case CLOSE_ASIDE: return action.asideActive;
        default: return state;
    }
}

export const asideContainer = (state = [], action) => {
    switch(action.type) {
        case ASIDE_CONTENT: return action.asideContainer;
        default: return state;
    }
}