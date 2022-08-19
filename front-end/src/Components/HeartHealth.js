import heartSolid from "../assets/heart-solid.png";
import heart from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <h4 >
      <img className="heart"
        src={snackHealth ? heartSolid : heart}
        alt={snackHealth ? "healthy food" : "unhealthy food"}
      />
    </h4>
  );
}

export default HeartHealth;
