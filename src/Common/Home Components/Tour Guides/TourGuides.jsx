import { Grid } from "semantic-ui-react";
import styles from "./TourGuides.module.scss";
import { tourGuides } from "../../../Backend/Data";
import TeamCard from "../../Team Card/TeamCard";

const TourGuides = ({ title, text }) => {
	return (
		<div className={styles.tourGuidesDiv}>
			<span className={styles.tourGuidesSpanTitle}>{title}</span>
			<h2>{text}</h2>
			<p>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>

			<Grid className={styles.tourGuidesGrid}>
				<Grid.Row columns={4}>
					{tourGuides.map((guide) => (
						<TeamCard guide={guide} />
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default TourGuides;
