import { useState, useEffect } from "react";
import "./App.css";
import Api from "./Components/Api";
import Summary from "./Components/Summary";
import { Route, Routes } from "react-router-dom";
const dummy_data = [];
function App() {
  const [record, setRecord] = useState(dummy_data);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRecord(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="main">
          <Routes>
            <Route path="/" element={<Api copyrecord={record} />} />
            <Route path="/Summary/:id" element={<Summary />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
