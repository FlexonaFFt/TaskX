import React from "react";
import styled from "styled-components";

const EntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  margin-top: 2rem;
`;

const EntryCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const EntryTitle = styled.h3`
  margin-top: 0;
`;

const EntryContent = styled.p`
  margin-bottom: 0;
`;

const EntryList = ({ entries }) => {
  return (
    <EntryContainer>
      {entries.map((entry, index) => (
        <EntryCard key={index} style={{ backgroundColor: entry.style }}>
          <EntryTitle>{entry.title}</EntryTitle>
          <EntryContent>{entry.content}</EntryContent>
        </EntryCard>
      ))}
    </EntryContainer>
  );
};

export default EntryList;
