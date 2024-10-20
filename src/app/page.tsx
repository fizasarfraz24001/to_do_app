'use client'
import { useState } from "react";

export default function Home() {
  const [todoItem, setTodoItem] = useState<string[]>([])
  const [todoCompItem, setTodoCompItem] = useState<string[]>([])
  const [inputField, setInputField] = useState<string>("")

  const addTodoItem = () => {
    const newTodoItem = [...todoItem]
    newTodoItem.push(inputField)
    setTodoItem(newTodoItem)
    setInputField("")
  }

  const removeTodoItem = (index: number) => {
    const removeItem = [...todoItem]
    removeItem.splice(index, 1)
    setTodoItem(removeItem)
  }

  const markAsCompleted = (singleItem: string) => {
    const newCompItem = [...todoCompItem]
    newCompItem.push(singleItem)
    setTodoCompItem(newCompItem)
  }

  console.log("todoCompItem", todoCompItem)
  return (

    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>

        <div className="flex mb-4">
          <input
            className="w-full p-2 border rounded-l outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter todo item"
            value={inputField}
            onChange={(e) => {
              setInputField(e.target.value)
            }}
          />
          <button
            className="bg-purple-600 text-white p-2 rounded-r hover:bg-blue-600 transition"
            onClick={addTodoItem}
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {
            todoItem.length > 0 ?

              todoItem.map((singleItem, index) => {

                const markComplete = todoCompItem.includes(singleItem)
                return (
                  <li key={index}
                    className=
                    {(markComplete ? "bg-blue-950 text-white" : "bg-white") + " flex justify-between items-center p-2 rounded"}
                  >
                    <span className="flex-1">{singleItem}</span>
                    {
                      markComplete ?
                        null
                        :
                        <>
                          <button
                            className="text-blue-950 hover:text-blue-800 border-2 p-2"
                            onClick={() => markAsCompleted(singleItem)}
                          >
                            Complete
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700 border-2 p-2"
                            onClick={() => removeTodoItem(index)}
                          >
                            Remove
                          </button>
                        </>
                    }

                  </li>
                )
              })

              :
              <p>No task for today</p>
          }


        </ul>
      </div>
    </div>
  );
}