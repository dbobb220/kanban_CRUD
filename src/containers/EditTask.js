import EditTask from '../components/EditTask';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        editTask: state.editTask,
    }
}

export default connect(mapStateToProps)(EditTask);