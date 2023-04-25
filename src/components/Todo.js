import { useState } from "react";
import List from "./List";
import Form from "./Form";
import { Heading, VStack } from "@chakra-ui/react";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "英語の教材を購入する。",
    },
    {
      id: 2,
      content: "学際の衣装を作る",
    },
    {
      id: 3,
      content: "宅配便の再配送を頼む",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <VStack p="10" spacing="10">
      <Heading color="blue.200" fontSize="5xl">
        Todoリスト
      </Heading>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </VStack>
  );
};
export default Todo;
