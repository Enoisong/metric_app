import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('Should renders correctly', () => {
    const component = renderer.create(
      <Router>
        <Header />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
