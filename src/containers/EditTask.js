import EditTask from '../components/EditTask';
import { connect } from 'react-redux';
import {fetchCall, fetchLoading, fetchPut, updateStatus} from '../redux/actions/loadboard';
import {closeAside} from '../redux/actions/aside';

const mapStateToProps = (state) => {
    return {
        editTask: state.editTask,
        tasks: state.tasks,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        asideContainer: state.asideContainer,
        asideActive: state.asideActive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCall: (url) => dispatch(fetchCall(url)),
        fetchLoading: (bool) => dispatch(fetchLoading(bool)),
        closeAside: ()=> dispatch(closeAside(false)),
        fetchPut: (url, payload) => dispatch(fetchPut(url, payload)),
        updateStatus: (id, value) => dispatch(updateStatus(id, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);