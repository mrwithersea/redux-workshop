import React from 'react';
import { connect } from 'react-redux';

class SimplestThingThatCouldPossiblyWork extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.simpleValue}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  simpleValue: state.simpleForm.data.value,
});

export default connect(mapStateToProps)(SimplestThingThatCouldPossiblyWork);
