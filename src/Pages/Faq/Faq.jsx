import { Grid, Image } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./Faq.module.scss";
import imgFaq from "../../assets/faq.jpg";
import AccordionComponent from "../../Common/Accordion/Accordion";

const Faq = () => {
  return (
    <>
      <Breadcrumb title="Faq" link="faq" />

      <div className={styles.faq}>
        <span className={styles.faqSpan}>Faq`s</span>
        <h2>General question</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <Grid className={styles.faqGrid}>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src={imgFaq} />
          </Grid.Column>
          <Grid.Column>
            <AccordionComponent />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer />
    </>
  );
};

export default Faq;
