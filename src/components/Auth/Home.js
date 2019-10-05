import React from 'react';
import Login from './Login';
import Signup from './Signup';
import './auth.css'

const Home = (props) => {
    let loginContainer = [];
    let signupContainer = [];



    return (
    <div className="home">
        <section className="promo"></section>
        <section className="auth">
            <div>
                <Login />
            </div>
            <div class="create_acc">
                <h4>Don't have an account?</h4>
                <h5>Create one below to get started:</h5>
                <Signup />
            </div>
        </section>
    </div>
    )
}

export default Home;