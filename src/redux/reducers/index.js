import {combineReducers} from 'redux';
import {tasks, hasErrored, isLoading} from './loadboard';
import {asideActive, asideContainer} from './aside'


export default combineReducers({tasks, hasErrored, isLoading, asideActive, asideContainer})