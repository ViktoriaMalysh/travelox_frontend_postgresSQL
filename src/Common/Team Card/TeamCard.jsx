import { Grid, Icon, Image } from "semantic-ui-react";
import styles from "./TeamCard.module.scss";
import { Link } from "react-router-dom";


const TeamCard = ({ guide }) => {
  // console.log(guide)
	return (
		<>
			<Grid.Column className={styles.tourGuidesGridColumn}>
				<Image src={guide.avatar} />
				<div className={styles.tourGuidesBlock}>
					<div>
						<Icon name="facebook f" className={styles.tourGuidesIcon} />
						<Icon name="twitter" className={styles.tourGuidesIcon} />
						<Icon name="instagram" className={styles.tourGuidesIcon} />
						<Icon name="linkedin" className={styles.tourGuidesIcon} />
						<Icon name="youtube" className={styles.tourGuidesIcon} />
					</div>
					<Link to={`/team/${guide.id}`} className={styles.tourGuidesLink}>
						{guide.name}
					</Link>
					<span className={styles.tourGuidesSpan}>Tour Guide</span>
				</div>
			</Grid.Column>
		</>
	);
};

export default TeamCard;
