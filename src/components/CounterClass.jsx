import React from 'react';

export default class CounterClass extends React.Component {
  state = {
    count : 0,
    date: new Date(),
  }

  handleClick = () => {
    this.setState(({count}) => ({count: count + 1}));
  }

  componentDidMount() {
    console.log(`Component rendered `);
    const {count} = this.state;
    document.title = `Clicked ${count} times`;

    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    console.log(`Component updated`);
    const {count} = this.state;
    document.title = `Clicked ${count} times`;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  }

  render() {  
    const { date, count } = this.state;

    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button type='button' onClick={this.handleClick}>Click</button>
        </p>
      </div>
    )
  }
}