import { Form, Segment } from "semantic-ui-react";
import styles from "../../Pages/Tour Booking/TourBooking.module.scss";

const YourDetails = ({ handleSetDetails, details }) => {
	return (
		<Segment raised className={styles.tourBookingSegmentLeft}>
			<h4>Your Details</h4>

			<Form className={styles.tourBookingSegmentLeftForm}>
				<Form.Group widths="equal">
					<Form.Input
						className={styles.tourBookingSegmentLeftInput}
						fluid
						id="form-subcomponent-shorthand-input-first-name"
						label="First name"
						placeholder="Your First Name"
						name="firstName"
						value={details.firstName}
						onChange={(e) => handleSetDetails(e)}
					/>
					<Form.Input
						className={styles.tourBookingSegmentLeftInput}
						fluid
						id="form-subcomponent-shorthand-input-last-name"
						label="Last name"
						placeholder="Your Last Name"
						name="lastName"
						value={details.lastName}
						onChange={(e) => handleSetDetails(e)}
					/>
				</Form.Group>
				<Form.Group widths="equal">
					<Form.Input
						className={styles.tourBookingSegmentLeftInput}
						fluid
						id="form-subcomponent-shorthand-input-first-name"
						label="Email"
						placeholder="Your Email"
						name="email"
						value={details.email}
						onChange={(e) => handleSetDetails(e)}
					/>
					<Form.Input
						className={styles.tourBookingSegmentLeftInput}
						fluid
						id="form-subcomponent-shorthand-input-last-name"
						label="Phone"
						placeholder="Your Phone"
						name="phone"
						value={details.phone}
						onChange={(e) => handleSetDetails(e)}
					/>
				</Form.Group>
				<Form.Input
					className={styles.tourBookingSegmentLeftInput}
					fluid
					id="form-subcomponent-shorthand-input-last-name"
					label="Address"
					placeholder="Your Address"
					name="address"
					value={details.address}
					onChange={(e) => handleSetDetails(e)}
				/>
			</Form>
		</Segment>
	);
};

export default YourDetails;
