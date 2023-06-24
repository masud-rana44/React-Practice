import React from 'react';

export default class Counter extends React.Component {
  state = {
    count: 0
  }

  handleCount = () => {
    this.setState(preState => ({count : preState.count + 1}))
  }

  render() {
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.handleCount);
  }
}