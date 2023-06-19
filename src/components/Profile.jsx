import React from "react";

class Profile extends React.Component {
  render() {
    return <Avater name="masud rana" size={250} isMale={false} />;
  }
}

class Avater extends React.Component {
  render() {
    return (
      <div>
        {this.props.isMale && <h3>{this.props.name}'s photo</h3>}
        <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt={this.props.name}
          width={this.props.size}
          height={this.props.size}
        />
      </div>
    );
  }
}

export default Profile;
