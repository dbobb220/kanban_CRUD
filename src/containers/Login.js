import Login from '../components/Auth/Login';
import {connect} from 'react-redux';
import {userLogin, userLoading, userError} from '../redux/actions/auth';

const mapStateToProps = (state) => {
    return {
        userLoading: state.userLoading, 
        userErrored: state.userErrored,
        user: []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (obj) => dispatch(userLogin(obj)),
        userLoading: (bool) => dispatch(userLoading(bool)),
        userError: (bool) => dispatch(userError(bool)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);