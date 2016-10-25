import React from 'react';
import { storiesOf } from '@kadira/storybook';
require('../src/preview').init();

storiesOf('i18n toolbox', module)
  .add('Test story', () => (
    <div style={{ display: 'flex' }}>
      <span style={{ backgroundColor: 'lightgreen' }}>text start &gt;</span>
      <span style={{ backgroundColor: 'lightblue' }}>text end &gt;</span>
    </div>
  ));
