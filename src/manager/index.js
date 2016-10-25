import React from 'react';
import addons from '@kadira/storybook-addons';

import Tools from './containers/Tools'
import { ADDON_ID, PANEL_ID } from '../shared';


export function init() {
  addons.register(ADDON_ID, api => {
    addons.addPanel(PANEL_ID, {
      title: 'i18n tools',
      render() {
        return <Tools />;
      }
    });
  });
}
