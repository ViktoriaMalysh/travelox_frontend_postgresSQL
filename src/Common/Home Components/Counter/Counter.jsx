import { Grid, Icon } from "semantic-ui-react";
import { counterItems } from "../../../Backend/Data";
import styles from "./Counter.module.scss";

// add functional for counter

const Counter = () => {
	return (
		<Grid className={styles.counterGrid}>
			<Grid.Row columns={4}>
				{counterItems.map((item) => (
					<Grid.Column className={styles.counterGridColumn}>
						<div className={styles.counterGridColumnDiv}>
							<div>
								<Icon
									name={item.icon}
									className={styles.counterGridColumnDivIcon}
								/>
							</div>
							<span>{item.count}</span>
							<h6>
								{"+ "}
								{item.title}
							</h6>
						</div>
					</Grid.Column>
				))}
			</Grid.Row>
		</Grid>
	);
};
export default Counter;
