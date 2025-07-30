import { useState } from "react";

function App() {
  const [input, setInput] = useState<string>("");

  function handleButtonClick(value: string): void {
    setInput((prev) => prev + value);
  }

  function clearInput(): void {
    setInput("");
  }

  function calculateResult(): void {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl mb-4">Calculator App</h1>
      <input
        type="text"
        value={input}
        readOnly
        className="border-2 border-gray-400 p-2 w-full max-w-md text-right mb-4"
      />
      <div className="flex flex-col w-full max-w-md">
        <div className="flex justify-center mb-2">
          <button
            onClick={() => handleButtonClick("7")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            7
          </button>
          <button
            onClick={() => handleButtonClick("8")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            8
          </button>
          <button
            onClick={() => handleButtonClick("9")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            9
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            /
          </button>
        </div>
        <div className="flex justify-center mb-2">
          <button
            onClick={() => handleButtonClick("4")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            4
          </button>
          <button
            onClick={() => handleButtonClick("5")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            5
          </button>
          <button
            onClick={() => handleButtonClick("6")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            6
          </button>
          <button
            onClick={() => handleButtonClick("*")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            *
          </button>
        </div>
        <div className="flex justify-center mb-2">
          <button
            onClick={() => handleButtonClick("1")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            1
          </button>
          <button
            onClick={() => handleButtonClick("2")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            2
          </button>
          <button
            onClick={() => handleButtonClick("3")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            3
          </button>
          <button
            onClick={() => handleButtonClick("-")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            -
          </button>
        </div>
        <div className="flex justify-center mb-2">
          <button
            onClick={() => handleButtonClick("0")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick(".")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            .
          </button>
          <button
            onClick={calculateResult}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            =
          </button>
          <button
            onClick={() => handleButtonClick("+")}
            className="bg-blue-500 text-white p-6 m-2 rounded text-2xl hover:bg-blue-400"
          >
            +
          </button>
        </div>
        <button
          onClick={clearInput}
          className="bg-red-500 text-white p-6 m-2 rounded text-2xl hover:bg-red-400 w-full"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;

