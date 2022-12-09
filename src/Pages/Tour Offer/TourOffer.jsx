import { Grid } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import TourCard from "../../Common/Tour Card/TourCard";
import styles from "./TourOffer.module.scss";

const TourOffer = ({ data }) => {
	return (
		<>
			<Breadcrumb title="Tour offer" link="tour offer" />

			<Grid className={styles.tourOffer}>
				<Grid.Row columns={3}>
					{data.map((tour) => (
						<Grid.Column>
							<TourCard item={tour} offer={true} />
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>

			<Footer />
		</>
	);
};

export default TourOffer;
