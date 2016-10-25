import React, { Component, PropTypes } from 'react';
import ToggleButton from 'react-toggle-button'
import addons from '@kadira/storybook-addons';

import { SWAP_TEXT_DIRECTION } from '../../../shared';


export default class SwapTextDirection extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
        defaultDirection: SwapTextDirection.getDefaultTextDirection(),
        isSwapped: false
    };
    this.channel = addons.getChannel();
  }

  static getDefaultTextDirection() {
    return window.getComputedStyle(document.body).direction.toLowerCase() || 'ltr';
  }

  static reverseDirection(direction) {
    return direction.split('').reverse().join('');
  }

  static setBodyTextDirection(direction) {
    document.body.dir = direction;
  }

  render() {
    return (
      <ToggleButton
        inactiveLabel={this.state.defaultDirection.toUpperCase()}
        activeLabel={SwapTextDirection.reverseDirection(this.state.defaultDirection).toUpperCase()}
        value={this.state.isSwapped}
        onToggle={(value) => {
            const isSwapped = !value;
            this.setState({ isSwapped });
            const newDirection = isSwapped ? SwapTextDirection.reverseDirection(this.state.defaultDirection) : this.state.defaultDirection;
            this.channel.emit(SWAP_TEXT_DIRECTION, {
                direction: newDirection,
            });
        }} />
    );
  }
}
