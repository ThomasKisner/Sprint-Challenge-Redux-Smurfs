import React, { Component } from 'react';


class Smurf extends Component {
  render() {
    return (
      <div>
        <ul className="Smurf-List">
          {this.props.smurfs.map(smurf => {
            return (
              <li key={smurf.id}>
                {smurf.name}
              </li>
            );
          })}
        </ul>
        </div>
        )}}

        export default Smurf;
  