import Signup from '../components/Auth/Signup';
import {connect} from 'react-redux';
import {userSignup, userLoading, userError} from '../redux/actions/auth';

const mapStateToProps = (state) => {
    return {
        userLoading: state.userLoading, 
        userErrored: state.userErrored,
        user: []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignup: (obj) => dispatch(userSignup(obj)),
        userLoading: (bool) => dispatch(userLoading(bool)),
        userError: (bool) => dispatch(userError(bool)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);