import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack.js";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([])
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .then(console.log(snacks))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Snacks">
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Fiber</th>
              <th>Protein</th>
              <th>Added Sugar</th>
              <th>Is Healthy?</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
              {snacks.map((snack) =>  {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;