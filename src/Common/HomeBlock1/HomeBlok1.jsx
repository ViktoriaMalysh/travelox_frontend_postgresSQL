import { Grid, Icon, Segment } from "semantic-ui-react";
import { homeBlok1Items } from "../../Backend/Data";
import styles from "./HomeBlock1.module.scss";

const HomeBlock1 = () => {
	return (
		<Grid columns={3} className={styles.homeBlok1Items}>
			<Grid.Row>
				{homeBlok1Items.map((item, index) => (
					<Grid.Column>
						<Segment className={styles.homeBlok1ItemsSegment}>
							<div>
								<Icon name={item.icon} className={styles.homeBlok1ItemsIcon} />
								<span className={styles.homeBlok1ItemsSpan}>0{index + 1}</span>
							</div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</Segment>
					</Grid.Column>
				))}
			</Grid.Row>
		</Grid>
	);
};

export default HomeBlock1;
