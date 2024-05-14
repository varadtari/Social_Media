import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const  TodoItems= () => {
  const {todoItems}=useContext(TodoItemsContext);
console.log(todoItems);
  return(
  <div className={styles.itemsContainer}>
           
           {todoItems.map(item =>
            <TodoItem todoName={item.name} todoDate={item.dueDate} ></TodoItem>
               )}
          
           
           </div>  

  );
};
export default TodoItems;