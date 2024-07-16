import React, { useState } from "react";
import NewEntryForm from "./templates/NewEntryFrom";
import EntryList from "./templates/EntryList";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
`;

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <AppContainer>
      <NewEntryForm onSubmit={addEntry} />
      <EntryList entries={entries} />
    </AppContainer>
  );
};

export default App;
