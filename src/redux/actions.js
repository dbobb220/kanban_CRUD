import {FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS} from './actionTypes';

export const fetchError = (bool, err) => {
    return {
        type:FETCH_ERROR,
        hasErrored: bool,
        message: err
    }
}

export const fetchLoading = (bool) => {
    return {
        type: FETCH_LOADING,
        isLoading: bool
    }
}

export const fetchSuccess = (tasks) => {
    return {
        type: FETCH_SUCCESS,
        tasks
    }
}

export const fetchCall = (url, obj) => {
    console.log("fetchCalled");
    return (dispatch) => {
        fetch(url, obj)
        .then(res=>res.json())
        .then(tasks=>{
                console.log('fetch success')
                dispatch(fetchSuccess(tasks));
            })
            .catch(err=>dispatch(fetchError(true, err)))
    }
}

