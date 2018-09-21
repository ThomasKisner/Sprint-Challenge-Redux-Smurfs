import React, { Component } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.name + this.state.age + this.state.height);
  };

  addSmurfHandler = () => {
  const newSmurf = {name: this.state.name, age: this.state.age, height: this.state.height};
    this.props.createSmurf(newSmurf);
    this.setState({name: '', age: '', height: ''})
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          name={"name"}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Age"
          name={"age"}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Height"
          name={"height"}
          onChange={this.handleInput}
        />
        <button onClick={() => this.addSmurfHandler()}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    createSmurf: state.createSmurf
  };
};

export default connect(
  mapStateToProps,
  { createSmurf }
)(SmurfForm);
