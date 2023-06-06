import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Summary() {
  const params = useParams();
  console.log(params.id);
  const [record, setRecord] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${params.id}`)
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
      <div className="summ">
        <h1>{record.name}</h1>
        <p>{record.summary}</p>
      </div>
    </>
  );
}

export default Summary;
