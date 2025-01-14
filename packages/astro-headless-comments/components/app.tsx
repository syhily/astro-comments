import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';

export const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>Hello World</h1>
      </BrowserRouter>
    </StrictMode>
  );
};
