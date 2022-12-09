import OpenStreetMap from "../../Helpers/OpenStreetMap";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";

const TourMapSingle = () => {
  return (
    <>
      <h3>Tour Map</h3>
      <p>
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue; and equal blame belongs to those who
        fail in their duty through weakness of will, which is the same as saying
        through shrinking from toil and pain.
      </p>

      <div style={{ width: "1300px", marginLeft: "-15px" }}>
        <OpenStreetMap
          // coordinates={accommodation.coordinates}
					coordinates="42.5121, -12.5154"
          type="one-accomm"
        />
      </div>
      {/* there should be a map (iframe)  */}
    </>
  );
};

export default TourMapSingle;
