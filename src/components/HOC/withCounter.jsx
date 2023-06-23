import React from 'react';

const withCounter = (OldComponent) => {
  class NewComponent extends React.Component {
  state = {
    count : 0
  }

  countHandler = () => {
    this.setState((state) => ({count: state.count + 1}));
  }

  render() {
    return (
    <OldComponent count={this.state.count} countHandler={this.countHandler}/>
    )
  }
  }

  return NewComponent;
}

export default withCounter;