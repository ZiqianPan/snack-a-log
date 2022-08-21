import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HeartHealth from "./HeartHealth";



const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {
  const [snack, setSnacks] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnacks(response.data.payload);
      })
      .catch(() => {
        navigate("/not found");
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate("/snacks");
      })
      .catch(() => {
        console.warn("error");
      });
  };

  return (
    <div className="show">
      <aside>
      <HeartHealth snackHealth={snack.is_healthy}/>
      </aside>

      <article>
        <div>
          <img src={snack.image} alt={snack.name} />
        </div>
      </article>

      <article className="ShowText">
        <div>
          <p>
            {" "}
            <strong>Name:</strong> {snack.name}
          </p>
          <p>
            {" "}
            <strong>Fiber:</strong> {snack.fiber}{" "}
          </p>
          <p>
            {" "}
            <strong>Protein:</strong> {snack.protein}{" "}
          </p>
          <p>
            {" "}
            <strong>Added Sugar:</strong> {snack.added_sugar}{" "}
          </p>
        </div>
      </article>

      <div className="showNavigation">
        <div>
          <Link to={`/snacks`}>
            <button className="show_button">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${snack.id}/edit`}>
            <button className="show_button">Edit</button>
          </Link>
        </div>
        <div>
          <button className="show_button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
