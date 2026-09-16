import { useState } from "react";

/*
Requirements:
- Input field to add a task
- Button to add task to a list
- Display list of tasks
- Bonus:
  - Delete a task
  - Mark task as completed
*/


export default function TodoList() {
  const [todos, setTodos] = useState<[]>()



  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <input className="border-2 rounded-md p-1 m-5" type="string" placeholder="Add to-do item here"></input>
        <button className="border-2 rounded-md p-1" type="submit">Add</button>
      </div>
      <div>
        {todos}
      </div>
    </>
  )
}
