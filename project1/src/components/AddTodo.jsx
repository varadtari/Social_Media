import { useState } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const [todoText, setTodoText] = useState();
  const [todoDate, setTodoDate] = useState();
  
  const { addNewItem } = useContext(TodoItemsContext);
  
  const handleTodoText = (event) => {
    const newTodoText = event.target.value;
    setTodoText(newTodoText);
  };
  const handleTodoDate = () => {
    const newTodoDate = event.target.value;
    setTodoDate(newTodoDate);
  };
  const handleAddButtonClick = () => {
    addNewItem(todoText, todoDate);
    setTodoDate("");
    setTodoText("");
  };
  return (
    <>
      <div class="container text-center">
        <div class="row rowClass">
          <div class="col-4">
            <input
              type="text"
              placeholder="Enter todo here"
              onChange={handleTodoText}
              value={todoText}
            />
          </div>
          <div class="col-4">
            <input type="date" onChange={handleTodoDate} value={todoDate} />
          </div>
          <div class="col-1">
            <button
              type="button"
              class="btn btn-success btnClass"
              onClick={handleAddButtonClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
