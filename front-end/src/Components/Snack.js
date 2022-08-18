import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const API = process.env.REACT_APP_API_URL;

function Snack({ snack }) {
  return (
    <tr>
      <td>
        <a href={`/snacks/${snack.id}`} rel="noreferrer">
          {snack.name}
        </a>
      </td>
      <td>{snack.fiber}</td>
      <td>{snack.protein}</td>
      <td>{snack.added_sugar}</td>
      <td>{snack.is_healthy ? <span>⭐️</span> : "Nope"}</td>
      <td>
        <Link to={`/snacks/${snack.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Snack;
