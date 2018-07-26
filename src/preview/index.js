import addons from '@storybook/addons';

import { SWAP_TEXT_DIRECTION } from '../shared';
import SwapTextDirection from '../manager/components/SwapTextDirection';


// init function will be executed once when the storybook loads for the
// first time. This is a good place to add global listeners on channel.
export function init() {
  const channel = addons.getChannel();
  channel.on(
    SWAP_TEXT_DIRECTION,
    ({ direction }) => SwapTextDirection.setBodyTextDirection(direction)
  );
}
