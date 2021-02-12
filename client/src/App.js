// import third party library
import React, { Component } from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Home from "./component/pages/Home";
import Add from "./component/layout/Add";
import SignUp from "./component/pages/SignUp";
import LogIn from "./component/pages/LogIn";
import TestUserData from "./dataset/TestUserData";
import getStartDate from "./component/layout/CoreAlgorithm";
import Navbar from "./component/layout/Navbar";
import Help from "./component/pages/Help";
export class App extends Component {
  state = {
    user: null,
    currentPage: "login",
    currentDate: new Date(),
    userData: JSON.parse(JSON.stringify(TestUserData)),
    totalDuration: 30,
    periodDuration: 5,
    startDate: null,
    endDate: null,
    location: {},
  };
  handleChangeState = (state) => {
    state["startDate"] = getStartDate(state);
    this.setState(state);
  };
  // for authentication
  componentDidMount() {
    axios.get("http://localhost:5000/api/auth/user").then((res) => {
      this.setState({
        user: res.data.user,
      });
    });
  }

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    const state = this.state;
    // redirect on the basis of current page
    return (
      <div>
        <Navbar
          setUser={this.setUser}
          handleChangeState={this.handleChangeState}
          user={this.state.user}
          state={this.state}
        />
        {/* if( this.state.user===null) */}
        {this.state.user === null && this.state.currentPage === "login" && (
          <LogIn
            setUser={this.setUser}
            handleChangeState={this.handleChangeState}
            state={this.state}
          />
        )}
        {this.state.currentPage === "signup" && (
          <SignUp
            setUser={this.setUser}
            handleChangeState={this.handleChangeState}
            state={this.state}
          />
        )}
        {this.state.user !== null && state.currentPage === "Home" && (
          <Home handleChangeState={this.handleChangeState} state={state} />
        )}
        {this.state.user !== null && state.currentPage === "Add" && (
          <Add handleChangeState={this.handleChangeState} state={state} />
        )}
        {this.state.user !== null && state.currentPage === "Help" && (
          <Help handleChangeState={this.handleChangeState} state={state} />
        )}
      </div>
    );

    // );
  }
}
export default App;
