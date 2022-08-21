import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack.js";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .then(console.log(snacks))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Snacks">

        <article className="Snacks">
          <h1 id="SnacksText">Snacks</h1>
          {snacks.map((snack) => {
            return <Snack key={snack.id} snack={snack} />;
          })}
        </article>
    
    </div>
  );
}

export default Snacks;
