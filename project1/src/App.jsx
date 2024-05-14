import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
function App() {
 
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    console.log(newTodoItems);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center>
        <AppName />
      </center>
<TodoItemsContext.Provider value={{todoItems,addNewItem,deleteItem}}>
      <center className="todo-container">
        <AddTodo ></AddTodo>
       <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
