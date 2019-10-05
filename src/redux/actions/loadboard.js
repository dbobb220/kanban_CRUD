import {FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS} from '../actionTypes'

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
    return (dispatch) => {
        fetch(url, obj)
        .then(res=>res.json())
        .then(tasks=>{
                dispatch(fetchSuccess(tasks));
            })
            .catch(err=>dispatch(fetchError(true, err)))
    }
}

export const fetchPut = (url, payload) => {
    return (dispatch) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res=> res.text())
            .then(text=> {
                console.log(text);
                dispatch(fetchCall('/tasks'))
            })
                .catch(err=>console.log(`Error:${err}`))
    }
}

export const updateStatus = (id, value) => {
    return (dispatch) => {
        let setStatus = {status: value};
        fetch(`/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setStatus)
        })
        .then(res=>res.text())
        .then(text=>dispatch(fetchCall('/tasks')))
            .catch(err=>console.log(`Error:${err}`))
    }
}