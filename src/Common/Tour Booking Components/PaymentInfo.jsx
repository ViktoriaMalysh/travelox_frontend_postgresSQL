import { Form, Segment } from "semantic-ui-react";
import styles from "../../Pages/Tour Booking/TourBooking.module.scss";

const PaymentInfo = () => {
	return (
		<Segment raised className={styles.tourBookingSegmentLeft}>
			<h4>Payment Info</h4>

			<Form className={styles.tourBookingSegmentLeftForm}>
				<Form.Group widths="equal">
					<Form.Input
						className={styles.tourBookingSegmentLeftInput}
						fluid
						id="form-subcomponent-shorthand-input-first-name"
						label="Card Holder Name"
						placeholder="Name On Card"
					/>
					<Form.Input
						className={styles.tourBookingSegmentLeftInput}
						fluid
						id="form-subcomponent-shorthand-input-last-name"
						label="Card Number"
						placeholder="Your Card Number"
					/>
				</Form.Group>
				<Form.Group widths="equal">
					<Form.Input
						className={styles.tourBookingSegmentLeftInput}
						fluid
						id="form-subcomponent-shorthand-input-first-name"
						label="Expire"
						placeholder="Expire Date"
					/>
					<Form.Input
						className={styles.tourBookingSegmentLeftInput}
						fluid
						id="form-subcomponent-shorthand-input-last-name"
						label="CCV"
						placeholder="CCV"
					/>
				</Form.Group>
			</Form>
		</Segment>
	);
};

export default PaymentInfo;
