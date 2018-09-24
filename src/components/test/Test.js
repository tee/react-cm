import React, { Component } from "react";

export default class Test extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          name: "",
          email: "",
          phone: ""
        })
      );
  }

  componentWillRecieve;

  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <p className="lead">{email}</p>
        <p className="phone">{phone}</p>
      </div>
    );
  }
}
