import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [is24Hour, setIs24Hour] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeFormat = is24Hour
        ? currentTime.toLocaleTimeString("en-GB")
        : currentTime.toLocaleTimeString("en-US");
      setTime(timeFormat);
      setDate(currentTime.toLocaleDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, [is24Hour]);

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
     
     <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">
        Digital Clock
      </h1>
     
      <div className="text-7xl font-extrabold bg-white text-blue-600 p-8 rounded-lg shadow-2xl border-4 border-blue-300 mb-4">
        {time}
      </div>
     
      <div className="text-2xl font-semibold text-white mb-8">
        {date}
      </div>
     
      <button
        onClick={() => setIs24Hour((prev) => !prev)}
        className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition"
      >
        Toggle {is24Hour ? "12-Hour" : "24-Hour"} Format
     
      </button>
    </div>
  );
}

export default App;

