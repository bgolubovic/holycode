import React from 'react';
import renderer from 'react-test-renderer';

import AddBook from './index';

it('AddBook container component match snapshot', () => {
  const AddBookContainer = renderer.create(<AddBook />).toJSON();
  expect(AddBookContainer).toMatchSnapshot();
});
