import { Button, Form, Icon, Rating } from "semantic-ui-react";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";

const FormReviewSingle = () => {
	return (
		<>
			<h4 style={{ marginBottom: "60px" }}>Leave Your Review</h4>

			<Form className={styles.tourSingleForm}>
				<Form.Field>
					<span>Your Rate : </span>
					<Rating size="large" icon="star" maxRating={5} />
				</Form.Field>
				<Form.Group widths="equal">
					<Form.Field>
						<input placeholder="Your Name*" />
					</Form.Field>
					<Form.Field>
						<input placeholder="Your Email*" />
					</Form.Field>
				</Form.Group>
				<Form.TextArea placeholder="Your Review*" />

				<Button type="submit">
					<Icon name="paper plane outline" />
					Submit Review
				</Button>
			</Form>
		</>
	);
};

export default FormReviewSingle;
