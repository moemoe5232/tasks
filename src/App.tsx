import { useState } from "react";

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<{ value: string; date: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  function ontaskchange(event: any): void {
    setTask(event.target.value);
  }

  function onSearchChange(event: any): void {
    setSearchQuery(event.target.value);
  }

  function addtask(): void {
    if (task.trim() === "") return;
    const currentDateTime = new Date().toLocaleString();
    setTasks((prevtasks) => [...prevtasks, { value: task, date: currentDateTime }]);
    setTask("");
  }

  function removetask(): void {
    const newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].value !== task) {
        newTasks.push(tasks[i]);
      }
    }
    setTasks(newTasks);
    setTask("");
  }

  function editTask(index: number): void {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.value);
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter((t) =>
    t.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen p-8">
      <h1 className="text-8xl text-white">TODO-LIST APP</h1>
      <input
        type="text"
        value={task}
        onChange={ontaskchange}
        className="border-2 border-gray-400 p-2 mt-4 w-full max-w-md"
        placeholder="Enter a task..."
      />
      <button
        onClick={addtask}
        className="bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-400 cursor-pointer"
      >
        Add Task
      </button>
      <button
        onClick={removetask}
        className="bg-red-500 text-white p-2 mt-4 rounded hover:bg-red-400 cursor-pointer"
      >
        Remove Task
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        className="border-2 border-gray-400 p-2 mt-4 w-full max-w-md"
        placeholder="Search tasks..."
      />
      <ul className="mt-4 w-full max-w-md">
        {filteredTasks.map((t, index) => (
          <li key={index} className="border p-4 flex items-center justify-between mb-3 text-lg">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 size-7" />
              <div className="flex flex-col">
                <span className="currentask">{t.value}</span>
                <span className="text-sm text-gray-400">{t.date}</span>
              </div>
            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 cursor-pointer"
              onClick={() => editTask(index)}
            >
              Edit Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default App;

