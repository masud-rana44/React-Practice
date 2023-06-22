import React from 'react';

export default class Form extends React.Component {
  state = {
    name: '',
    text: '',
    language: 'JS',
    isChecked: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
     });
    // if(e.target.name === 'name')  {
    //   this.setState({
    //     name: e.target.value,
    //   });
    // } else if(e.target.name === 'text') {
    //   this.setState({
    //     text: e.target.value
    //   })
    // } else if(e.target.name === 'language') {
    //   this.setState({
    //     language:  e.target.value
    //   })
    // } else if(e.target.name === 'bd') {
    //   this.setState({
    //     isChecked : !this.state.isChecked
    //   })
    // }
  };

  print(text) {
    console.log(this.state.name, text);
  }

  handleSubmit = (e) => {
    e.preventDefault();;
    const { name, text, language, isChecked } = this.state;
    console.log(name, text, language, isChecked)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name='name'
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <p>{this.state.name}</p>

          <br />
          <br />

          <textarea name="text" value={this.state.text} onChange={this.handleChange} />

          <br />
          <br />

          <select value={this.state.language} name='language' onChange={this.handleChange}>
            <option value="js">JS</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
          </select>

          <br />
          <br />

          <input type="checkbox" name="isChecked" id="bd" checked={this.state.isChecked} onChange={this.handleChange}/>
          <label htmlFor="bd">Bangladesh</label>
        </form>
      </div>
    );
  }
}
