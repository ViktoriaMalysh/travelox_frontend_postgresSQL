import { Grid } from "semantic-ui-react";
import { tourGuides } from "../../Backend/Data";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import TeamCard from "../../Common/Team Card/TeamCard";
import styles from "./Team.module.scss";

const Team = () => {
	return (
		<>
			<Breadcrumb title="Team" link="team" />
			<Grid className={styles.teamGrid}>
				<Grid.Row columns={4}>
					{tourGuides.map((guide) => (
						<Grid.Column>
							<TeamCard guide={guide} />
						</Grid.Column>
					))}
				</Grid.Row>
				<Grid.Row columns={4}>
					{tourGuides.map((guide) => (
						<Grid.Column>
							<TeamCard guide={guide} />
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
			<Footer />
		</>
	);
};

export default Team;
