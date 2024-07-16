import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const StyleInput = styled(FormInput)`
  margin-bottom: 2rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const NewEntryForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [style, setStyle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { title, content, style };
    onSubmit(newEntry);
    setTitle("");
    setContent("");
    setStyle("");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormTextarea
          placeholder="Содержание"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></FormTextarea>
        <StyleInput
          type="text"
          placeholder="Стиль (например, #FFCCCC)"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
        <SubmitButton type="submit">Сохранить</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default NewEntryForm;
