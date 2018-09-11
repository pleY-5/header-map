import React from 'react';
import {shallow} from 'enzyme';
import Header from '../client/src';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('The main app', () => {
  it('the app should have text', () => {
    const app = shallow(<Header/>);
    expect(app.contains(<h1>Minhas Micro Brewery</h1>)).toBe(true);
  });
});