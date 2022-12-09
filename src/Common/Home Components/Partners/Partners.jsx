import { Grid, Image } from "semantic-ui-react";
import { partners } from "../../../Backend/Data";
import styles from "./Partners.module.scss";

const Partners = () => {
	return (
		<div className={styles.partners}>
			<Grid>
				<Grid.Row columns={6}>
					{partners.map((partner) => (
						<Grid.Column className={styles.partnersColumn}>
							<div className={styles.partnersDivImg}>
								<Image src={partner.logo} />
							</div>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default Partners;
