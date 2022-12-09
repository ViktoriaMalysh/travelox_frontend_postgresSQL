import { Button, Grid, Icon, Image } from "semantic-ui-react";
import { destinations } from "../../../Backend/Data";
import DestinationsComponent from "../../DestinationsComponent/DestinationsComponent";
import styles from "./Destinations.module.scss";

const Destinations = () => {
  return (
    <div className={styles.destinationsDiv}>
      <span className={styles.destinationsSpan}>Destinations</span>
      <h2>Top destinations</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <DestinationsComponent />
    </div>
  );
};

export default Destinations;
