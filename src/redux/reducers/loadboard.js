import {FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS} from '../actionTypes'

export const tasks = (state = [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS: 
            return action.tasks
        default: return state
    }
}

export const hasErrored = (state = false, action) => {
    switch(action.type) {
        case FETCH_ERROR: return action.hasErrored;
        default: return state;
    }
}

export const isLoading = (state = true, action) => {
    switch(action.type) {
        case FETCH_LOADING: return action.isLoading;
        default: return state;
    }
}