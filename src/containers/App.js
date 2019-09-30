import App from '../App';
import { connect } from 'react-redux';
import {fetchCall, fetchLoading} from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCall: (url) => dispatch(fetchCall(url)),
        fetchLoading: (bool) => dispatch(fetchLoading(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)