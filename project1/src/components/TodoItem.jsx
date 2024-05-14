import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({todoName,todoDate,OnDeleteItem}) {
  
 const {deleteItem}=useContext(TodoItemsContext);
  
  return (
    <>
      <div class="container ">
        <div class="row rowClass">
          <div class="col-4">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger btnClass" onClick={()=>deleteItem(todoName)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
