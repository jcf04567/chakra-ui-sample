import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast();

  const addTodo = (e) => {
    e.preventDefault();

    if (!enteredTodo) {
      toast({
        title: "タスクが入力されていません！",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");

    toast({
      title: "新しいタスクを追加しました！",
      description: enteredTodo,
      status: "info",
      duration: 3000,
      isClosable: true,
    });  
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <HStack>
          <Input
            placeholder="タスクを入力してください"
            _placeholder={{ opacity: 0.4, color: "gray.600" }}
            size="lg"
            bgColor="white"
            variant="flushed"
            p={3}
            value={enteredTodo}
            onChange={(e) => setEnteredTodo(e.target.value)}
          />
          <Button
            colorScheme="blue"
            size="md"
            bgColor="white"
            variant="outline"
            px={7}
            type="submit"
          >
            追加
          </Button>
        </HStack>
      </form>
    </div>
  );
};

export default Form;
