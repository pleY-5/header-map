import React from 'react';
import {shallow} from 'enzyme';
import Header from '../client/src';

describe('The main app', () => {
  it('the app should have text', () => {
    const app = shallow(<Header/>);
    expect(app.contains(<div>Claimed</div>)).toBe(true);
  });
});