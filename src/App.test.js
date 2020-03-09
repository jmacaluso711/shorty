import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders the app', () => {
  const app = renderer.create(<App />);
  expect(app).toBeTruthy();
});
