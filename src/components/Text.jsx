import Emoji from './emoji';

export default class Text extends Emoji {
  constructor(props) {
    super(props);
  }

  render()  {
    const text = this.addEmoji('I am Text Component');
    return super.render(text);
  }
}