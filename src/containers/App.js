import App from '../App';
import { connect } from 'react-redux';
import {fetchCall, fetchLoading} from '../redux/actions/loadboard';
import {closeAside, openAside, changeAside} from '../redux/actions/aside';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        asideActive: state.asideActive,
        asideContainer: state.asideContainer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCall: (url) => dispatch(fetchCall(url)),
        fetchLoading: (bool) => dispatch(fetchLoading(bool)),
        closeAside: ()=> dispatch(closeAside(false)),
        openAside: ()=> dispatch(openAside(true)),
        changeAside: (container) => dispatch(changeAside(container))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)