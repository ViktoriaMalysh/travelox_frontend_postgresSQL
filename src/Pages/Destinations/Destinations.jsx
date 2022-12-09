import DestinationsComponent from "../../Common/DestinationsComponent/DestinationsComponent";
import styles from "./Destinations.module.scss";
import Footer from "../../Common/Footer/Footer";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";

const DestinationsPage = () => {
  return (
    <div>
      <Breadcrumb
        title={"destinations"}
        link={"destinations"}
      />
      <div className={styles.destPage}>
        <DestinationsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
