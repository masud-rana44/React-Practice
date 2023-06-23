import React from 'react';

export default class Emoji extends React.Component {

  addEmoji(text) {
    return `💗 ${text} 💗`;
  }

  render(decText) {
    let text = 'I love javascript';
    if(decText) text = decText;
    return <h1>{text}</h1>;
  }
}