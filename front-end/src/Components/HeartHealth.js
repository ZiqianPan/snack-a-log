import heartSolid from "../assets/heart-solid.png";
import heart from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <h4 className="Heart" >
      <img
        src={snackHealth ? heartSolid : heart}
        alt={snackHealth ? "healthy food" : "unhealthy food"}
        width={"20px"}
      />
    </h4>
  );
}

export default HeartHealth;
