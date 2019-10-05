import {CLOSE_ASIDE, OPEN_ASIDE, ASIDE_CONTENT} from '../actionTypes';

export const closeAside = (bool) => {
    return {
        type: CLOSE_ASIDE,
        asideActive: false
    }
}

export const openAside = (bool) => {
    return {
        type: OPEN_ASIDE,
        asideActive: true,
    }
}

export const changeAside = (component) => {
    return {
        type: ASIDE_CONTENT,
        asideContainer: component
    }
}
