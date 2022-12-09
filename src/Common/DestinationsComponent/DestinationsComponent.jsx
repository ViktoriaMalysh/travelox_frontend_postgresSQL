import { useNavigate } from "react-router-dom";
import { Grid, Icon, Button, Image } from "semantic-ui-react";
import { destinations } from "../../Backend/Data";
import styles from "./DestinationsComponent.module.scss";

const DestinationsComponent = () => {
	let navigate = useNavigate();

	return (
		<Grid className={styles.destinationsGrid}>
			<Grid.Row columns={3}>
				{destinations.map((item) => (
					<Grid.Column
						width={item.width}
						className={styles.destinationsGridColumn}
					>
						<div className={styles.destinationsGridColumnDivImg1}>
							<div className={styles.destinationsGridColumnDivImg}>
								<Image src={item.imgUrl} />
								<Button
									className={styles.destinationsGridButton}
									onClick={() => navigate(`/destinations/${item.key}`)}
								>
									<Icon name="arrow right" />
								</Button>
							</div>
						</div>
						<div className={styles.destinationsGridColumnDiv}>
							<h3>{item.country}</h3>
							<span>Staging from{item.price}</span>
						</div>
					</Grid.Column>
				))}
			</Grid.Row>
		</Grid>
	);
};

export default DestinationsComponent;
