import { Icon, Image, Rating, Segment } from "semantic-ui-react";
import styles from "./TestimonialsCard.module.scss";

const TestimonialsCard = ({ item }) => {
	return (
		<Segment raised className={styles.testimonialsItem}>
			<Icon name="quote right" className={styles.testimonialsItemIcon} />
			<Rating
				disabled
				icon="star"
				defaultRating={item.rate}
				maxRating={5}
				className={styles.testimonialsItemRating}
			/>
			<span className={styles.testimonialsItemSpan}>{item.comment}</span>
			<div className={styles.testimonialsItemUser}>
				<Image src={item.avatar} />
				<div className={styles.testimonialsItemBlock}>
					<h4>{item.name}</h4>
					<span>{item.status}</span>
				</div>
			</div>
		</Segment>
	);
};

export default TestimonialsCard;
