import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack.js";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [Snacks, setSnacks] = useState([])
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Snacks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this snack</th>
            </tr>
          </thead>
          <tbody>

            {/* {console.log(Snacks.payload.map)} */}
    {/* {Snacks.payload.map((snack) =>  {
              console.log(snack)
              return <Snack key={snack.id} snack={snack} />;
            })} */}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;