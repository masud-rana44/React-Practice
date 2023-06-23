import React from 'react';

export default class Emoji extends React.Component {

  addEmoji(text) {
    return `💗 ${text} 💗`;
  }

  render() {
    return this.props.children( this.addEmoji );
  }
}