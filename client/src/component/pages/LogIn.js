import React, { Component } from "react";
import { Card, Form, Button } from "semantic-ui-react";
import axios from "axios";

export class LogIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    data: null,
    proceed: false,
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  logIn = (email, password) => {
    axios
      .post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          this.props.setUser(res.data.user);
          this.props.state.user = res.data.user;
          this.props.state.currentPage = "Home";
          this.setState({ proceed: true });
          this.props.handleChangeState(this.props.state);
        }
      })
      .catch((err) => {
        // console.alert(err);
        this.setState({ error: "Username or password is incorrect" });
      });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.logIn(this.state.email, this.state.password);
  };
  signup = () => {
    this.props.state.currentPage = "signup";
    this.props.handleChangeState(this.props.state);
  };
  render() {
    return (
      <div className="col-md-6 offset-md-3 mt-5">
        <Card centered>
          <Card.Content>
            {/* {this.state.error!==null ? <Card.Meta variant="danger" className="text-center">{this.state.error}</Card.Meta> : <span></span>} */}
            <Card.Header className="text-center">Log In</Card.Header>
            <Form>
              <Form.Field>
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Button onClick={this.handleSubmit}>Login</Button>
            </Form>
            <br />
            <Card.Description>
              Don't have an account?{" "}
              <Button onClick={this.signup}>Create an Account</Button>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default LogIn;
