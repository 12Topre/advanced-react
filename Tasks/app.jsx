import React, { useState } from "react";
import styled from "styled-components";
import AddItem from "./AddItem";
import ToDoList from "./ToDoList";

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  return (
    <Container>
      <AddItem addTask={addTask} />
      <ToDoList tasks={tasks} removeTask={removeTask} />
    </Container>
  );
}

export default App;
