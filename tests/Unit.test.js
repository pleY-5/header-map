import React from 'react';
import {shallow} from 'enzyme';
import Header from '../client/src';

describe('The main app', () => {
  it('the app should have text', () => {
    const header = shallow(<Header/>);
    expect(header.contains(<h1 class="main__name___1dyg2">Minhas Micro Brewery</h1>)).toBe(true);
  });
});