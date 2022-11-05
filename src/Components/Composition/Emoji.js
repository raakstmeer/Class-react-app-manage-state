import React from 'react';

export default class Emoji extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children({ addEmoji: this.addEmoji });
  }
}
