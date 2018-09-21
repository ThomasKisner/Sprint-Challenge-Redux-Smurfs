import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, createSmurf } from "../actions";
import SmurfForm from './smurfForm';
import Smurf from './smurf'


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  

  componentDidMount() {
    this.props.getSmurfs();
  }

 
  render() {
    return (
      <div className="App">
       <SmurfForm />
             <Smurf smurfs={this.props.smurfs}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfReducer.smurfs,
    error: state.smurfReducer.error,
    gettingSmurfs: state.smurfReducer.gettingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, createSmurf}
)(App);
