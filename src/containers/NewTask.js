import {connect} from 'react-redux';
import NewTask from '../components/NewTask';
import {fetchCall, fetchLoading} from '../redux/actions/loadboard';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCall: (url) => dispatch(fetchCall(url)),
        fetchLoading: (bool) => dispatch(fetchLoading(bool))
    };
};

export default connect(null, mapDispatchToProps)(NewTask)