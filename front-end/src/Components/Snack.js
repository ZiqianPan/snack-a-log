import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HeartHealth from "./HeartHealth";
const API = process.env.REACT_APP_API_URL;

function Snack({ snack }) {
  return (
    <div className="singleCard Snack">
      <img src={snack.image} alt={snack.name} width="200px" />

      <a href={`/snacks/${snack.id}`} rel="noreferrer">
        <span>
          <HeartHealth snackHealth={snack.is_healthy}  />
        </span>
        <h4>{snack.name}</h4>
      </a>
    </div>
  );
}

export default Snack;
