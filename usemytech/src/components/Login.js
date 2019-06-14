import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Alert
} from "reactstrap";

import { login } from "./actions/actions";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    email: ""
  };
  render() {
    return (
      <div className="login-wrapper">
        <Form>
          <img src="https://i.imgur.com/qp70wn0.png" alt="Logo" />
          <div>
            <Input
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChanges}
              className="login-input"
            />
            <i class="fas fa-user" />
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChanges}
              className="login-input"
            />
            <i class="fas fa-key" />
          </div>
          <div>
            <div className="btn-login shd" onClick={this.login}>
              {this.props.loggingIn === true ? <h3>Loading</h3> : <h3>GO</h3>}
            </div>
            <i class="fas fa-sign-in-alt" />
          </div>
          {/* <i class="fas fa-user-plus" onClick={this.modalToggle} /> */}
        </Form>
        <div className="login-splash" />
        <>
          <Modal
            isOpen={this.state.modal}
            toggle={this.modalToggle}
            className="sign-up"
          >
            <ModalHeader className="sign-up" toggle={this.modalToggle}>
              <i class="fas fa-cash-register" />
              <h3>Sign Up!</h3>
            </ModalHeader>
            <ModalBody>
              <div>
                <Input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  className="login-input"
                  required
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="login-input"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="login-input"
                />
              </div>
              <i class="fas fa-cash-register" />
            </ModalBody>
            <ModalFooter className="sign-up">
              <Button className="reg-btn" onClick={this.register}>
                go tabless
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.token) {
      this.props.history.push("/tech");
    }
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  modalToggle = e => {
    this.setState({
      modal: !this.state.modal
    });
  };

  login = e => {
    console.log(">>>", this.props.test);
    this.props
      .login({
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        this.props.history.push("/tech");
      });
  };
}

const mapStateToProps = ({ token, tech, test, loggingIn }) => ({
  token,
  tech,
  test,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
