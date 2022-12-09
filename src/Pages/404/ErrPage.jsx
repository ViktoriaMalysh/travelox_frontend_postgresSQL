import { Button, Icon, Image } from "semantic-ui-react";
import styles from "./ErrPage.module.scss";
import errImg from "../../assets/404.svg";

const ErrPage = () => {
  return (
    <div className={styles.errPage}>
      <Image src={errImg} />
      <h2>Opos... Page Not Found!</h2>
      <p>The page you looking for not found may be it not exist or removed.</p>
      <Button>
        <Icon name="home" />
        Go Back Home
      </Button>
    </div>
  );
};

export default ErrPage;
