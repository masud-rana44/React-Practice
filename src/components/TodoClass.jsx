import React from 'react';

export default class Todo extends React.Component {
  state = {
    todo: '',
    warning: null
  }

  handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('.js') ? 'You need javascript skill to complete this take! Do you have it?': null;

    this.setState({
      todo: inputValue,
      warning
    })
  }


  render() {
    const { todo, warning } = this.state;

    return (
      <>
        <p>{ todo }</p>
        <textarea value={todo} onChange={this.handleInput}></textarea>
        <hr />
        <p>{warning || 'Good Choice'}</p>
      </>
    )
  }
}