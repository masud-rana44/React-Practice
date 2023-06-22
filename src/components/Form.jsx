import React from 'react';

export default class Form extends React.Component {
  state = {
    name: 'Masud Rana',
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  print(text) {
    console.log(this.state.name, text);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.handleChange}
            onClick={this.print.bind(this, 'is My Name')}
          />
        </form>
      </div>
    );
  }
}
