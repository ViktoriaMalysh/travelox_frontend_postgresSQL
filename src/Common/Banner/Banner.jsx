import { Grid } from "semantic-ui-react";
import styles from "./Banner.module.scss";
import banner from "../../assets/banner.jpg";

const Banner = () => {
	return (
		<Grid.Row floated="left">
			<Grid.Column>
				<div className={styles.tourPackageSegmentLeftImage}>
					<img src={banner} />
					<div>
						<h2>
							Get <span>35% Off</span> On Norway Lake Tour
						</h2>
					</div>
				</div>
			</Grid.Column>
		</Grid.Row>
	);
};

export default Banner;
