import React, { Component } from "react";
import "./Contactus.css";
import { Form, Icon, Button, Row, Col } from "antd";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";

class Contactus extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <div>
              <h1 className="display-2">Contact Form</h1>
            </div>
            <Form className="login-form">
              <TextField
                placeholder="name"
                value={name}
                onChange={event => {
                  this.setState({ name: event.target.value });
                }}
              />
              <TextField
                type="email"
                placeholder="email"
                value={email}
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
              />
              {/* <TextField
                type="message"
                placeholder="message"
                value={message}
                onChange={event => {
                  this.setState({ message: event.target.value });
                }}
              /> */}
              {/* <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Send
                </Button>
              </Form.Item> */}
            </Form>
          </Col>
        </Row>

        <Row>
          <Col span={12} offset={6}>
            <Form className="Message">
              <TextArea
                // type="message"
                placeholder="message"
                value={message}
                onChange={event => {
                  this.setState({ message: event.target.value });
                }}
              />
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contactus;
