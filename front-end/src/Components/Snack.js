import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HeartHealth from "./HeartHealth";
const API = process.env.REACT_APP_API_URL;

function Snack({ snack }) {
  return (
    <div className="SnackCard">
      <div className="singleCard Snack">
        <h4>
          {" "}
          <img src={snack.image} alt="healthy food" width="200px" />
        </h4>

        <br />

        <h4>
          <HeartHealth snackHealth={snack.is_healthy} />
        </h4>

        <a href={`/snacks/${snack.id}`} rel="noreferrer">
          <h4>{snack.name}</h4>
        </a>
      </div>
    </div>
  );
}

export default Snack;
