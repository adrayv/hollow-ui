import React from 'react';
import styled from 'styled-components';
import Dropdown from './components/dropdown';
import useNotification, { Provider } from './components/notification';

const Button = styled.div`
  width: 100px;
  height: 25px;
  background: black;
`;

const Popover = styled.div`
  width: 150px;
  height: 150px;
  background: red;
`;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 50px;
`;

function App() {
  const { notify } = useNotification();
  return (
    <Page>
      <h1>Examples</h1>
      <Dropdown trigger={<Button />} flyout={<Popover />} flyoutPos="br" />
      <button onClick={notify}>NOTIFY</button>
    </Page>
  );
}

export default () => (
  <Provider>
    <App />
  </Provider>
);
