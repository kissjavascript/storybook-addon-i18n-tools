import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import addons from '@kadira/storybook-addons';
import ToggleButton from 'react-toggle-button';
import sinon from 'sinon';
import createMockChannel from 'storybook-channel-mock';

import SwapTextDirection from '../';
import { SWAP_TEXT_DIRECTION } from '../../../../shared';


describe('Component: SwapTextDirection', function () {

  let channel;

  beforeEach(() => {
    channel = createMockChannel();
    addons.setChannel(channel);
  });

  it('should render given text', () => {
    const spy = sinon.spy();
    channel.on(SWAP_TEXT_DIRECTION, spy);

    const comp = TestUtils.renderIntoDocument(<SwapTextDirection />);
    const node = ReactDOM.findDOMNode(comp);
    const toggleButton = TestUtils.findRenderedComponentWithType(comp, ToggleButton);
    const input = TestUtils.findRenderedDOMComponentWithTag(toggleButton, 'input');
    TestUtils.Simulate.click(input);
    TestUtils.Simulate.click(input);

    expect(spy.calledTwice).toBe(true);
    expect(spy.firstCall.args[0]).toEqual({ direction: 'rtl' });
    expect(spy.secondCall.args[0]).toEqual({ direction: 'ltr' });
  });
});
