import React from "react";
import { Link } from "react-router-dom";
import "./Api.css";
function Api(props) {
  return (
    <>
      {props.copyrecord.map((r) => (
        <div className="card" key={r.show.id}>
          <h2>{r.show.name}</h2>
          <p>{r.show.ended}</p>
          <p>{r.show.summary}</p>
          <Link to={{ pathname: `/Summary/${r.show.id}` }}>
            <button type="button" class="btn btn-success">
              View more
            </button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Api;
