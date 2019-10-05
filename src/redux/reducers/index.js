import {combineReducers} from 'redux';
import {tasks, hasErrored, isLoading} from './loadboard';
import {asideActive, asideContainer} from './aside';
import {editTask} from './editTask';
import {user, userErrored, userIsLoading} from './auth';


export default combineReducers({tasks, hasErrored, isLoading, asideActive, asideContainer, editTask, user, userErrored, userIsLoading})