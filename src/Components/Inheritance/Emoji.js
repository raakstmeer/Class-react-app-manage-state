import React from 'react';

export default class Emoji extends React.Component {
  // eslint-disable-next-line class-methods-use-this, react/no-unused-class-component-methods
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render(overwrite) {
    let text = 'I am the Emoji component';
    if (overwrite) text = overwrite;
    return <div>{text}</div>;
  }
}
