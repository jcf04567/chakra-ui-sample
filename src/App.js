import React from "react";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import Todo from "./components/Todo";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Todo />
      </div>
    </ChakraProvider>
  );
}

export default App;
