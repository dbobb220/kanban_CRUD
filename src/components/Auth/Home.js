import React from "react";
import Login from "../../containers/Login";
import Signup from "../../containers/Signup";
import "./auth.css";
import kanban from "../../images/kanban_home.png";

const Home = props => {
  return (
    <div className="home">
      <section className="promo">
        <h2>A virtual project management board</h2>
        <img src={kanban} alt="kanban application example" />
      </section>
      <section className="auth">
        <div>
          <Login />
        </div>
        <div className="create_acc">
          <h4>Don't have an account?</h4>
          <h5>Create one below to get started:</h5>
          <Signup />
        </div>
      </section>
    </div>
  );
};

export default Home;
