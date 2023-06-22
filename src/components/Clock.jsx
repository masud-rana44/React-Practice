import React from "react";

export default class Clock extends React.Component {
  state = { date: new Date(), locale: "bn-BD", isBD: true };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick = () => {
    if(this.state.isBD) {
      this.setState({ locale: "en-US", isBD: !this.state.isBD });
    } else {
      this.setState({ locale: "bn-BD", isBD: !this.state.isBD});
    }
  };

  render() {
    return (
      <div>
        <h1 className="heading" tabIndex={0}>
          <span>
            {this.state.date.toLocaleTimeString(this.state.locale)}
          </span>
        </h1>
        <button onClick={this.handleClick}>{this.state.isBD ? 'Click Here!' : 'ক্লিক করুন'}</button>
      </div>
    );
  }
}
