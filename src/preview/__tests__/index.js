import addons from '@kadira/storybook-addons';
import createMockChannel from 'storybook-channel-mock';

import { SWAP_TEXT_DIRECTION } from '../../shared';
import { init } from '../';


describe('init', () => {
  let channel;

  beforeEach(() => {
    channel = createMockChannel();
    addons.setChannel(channel);
  });

  it('should listen to text direction changes', () => {
    init();
    const TEST_DIRECTION = 'foo';
    channel.emit(SWAP_TEXT_DIRECTION, { direction: TEST_DIRECTION });

    return new Promise((resolve) => {
      setTimeout(() => {
        expect(document.body.dir).toEqual(TEST_DIRECTION);
        resolve();
      }, 1);
    });
  });
});
