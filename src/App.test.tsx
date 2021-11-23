import React from 'react';
import { act, render, screen } from '@testing-library/react';

import App from './App';
let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  window['__RUNTIME_CONFIG__'] = {
    RANDOM_USER_URL: 'https://randomuser.me/api/?results=10'
  };
});

afterEach(() => {
  container.remove();
  container = null;
});



test('click Address List', () => {
  act(() => {
    // render components
    render(<App />, container);
  });

  // this is where the test for clicking the element in the list
  // and verifying that the data for the card is populated.
  // need to figure out how to mimick a mouse click on the row and then validate the output
});
