import {connect} from 'react-redux';
import Task from '../components/Task';
import {fetchCall, fetchLoading} from '../redux/actions/loadboard';
import {editClick} from '../redux/actions/editTask';
import {openAside, changeAside} from '../redux/actions/aside';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCall: (url) => dispatch(fetchCall(url)),
        fetchLoading: (bool) => dispatch(fetchLoading(bool)),
        editClick: (taskId) => dispatch(editClick(taskId)),
        openAside: ()=> dispatch(openAside(true)),
        changeAside: (container) => dispatch(changeAside(container))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task)