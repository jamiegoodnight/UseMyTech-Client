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
import { TweenLite, Power1 } from "gsap";

import { login } from "./actions/actions";

class TechList extends React.Component {
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
        </Form>
        <div className="unlocked">
          <i class="fas fa-unlock-alt" />
        </div>
        <div className="loggedin-splash" />
      </div>
    );
  }
  componentDidMount() {
    const Form = document.querySelector("Form");
    // // $(document).ready(() => {
    // //   $(secret).fadeIn(3000);
    // // });
    TweenLite.to(Form, 2.5, { y: -650, ease: Power1.easeOut });
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

export default TechList;
