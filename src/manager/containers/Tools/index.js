import React, { Component } from 'react';
import addons from '@kadira/storybook-addons';
import SwapTextDirection from '../../components/SwapTextDirection';
import { table as tableStyle } from './style';

export default class Tools extends Component {
  render() {
    return (
      <table style={tableStyle}>
        <tbody>
            <tr>
                <td>Swap text direction:</td>
                <td><SwapTextDirection /></td>
            </tr>
        </tbody>
      </table>
    );
  }
}
