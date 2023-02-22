import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin-top: 20px;
`; 

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

function AddItem({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Type your task here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default AddItem;


ToDoList.jsx: This component renders the list of tasks using the ToDoItem component. It also provides a button for each task that allows the user to remove it from the list. When the remove button is clicked, the removeTask function passed down from App is called with the index of the task to be removed.

import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

function ToDoList({ tasks, removeTask }) {
  return (
    <List>
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} index={index} removeTask={removeTask} />
      ))}
    </List>
  );
}

export default ToDoList;