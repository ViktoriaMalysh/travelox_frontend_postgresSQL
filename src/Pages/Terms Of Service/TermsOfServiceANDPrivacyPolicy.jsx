import { Container, Header } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./TermsOfServiceANDPrivacyPolicy.module.scss";

const TermsOfServiceANDPrivacyPolicy = ({ data, title, link }) => {
	return (
		<>
			<Breadcrumb title={title} link={link} />
			<div className={styles.termsBlock}>
				{data.map((item) => (
					<Container fluid className={styles.termsContainer}>
						<Header as="h3">{item.title}</Header>
						{item.text}
					</Container>
				))}
			</div>
			<Footer />
		</>
	);
};

export default TermsOfServiceANDPrivacyPolicy;
