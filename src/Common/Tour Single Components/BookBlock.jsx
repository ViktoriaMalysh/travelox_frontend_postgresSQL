import { Button, Checkbox, Form, Icon, Segment } from "semantic-ui-react";
import { additionalService, additionalServiceData } from "../../Backend/Data";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";
import _ from "lodash";

const BookBlock = ({
	bookDetail,
	handleSetDetailsBook,
	handleBook,
	myHandleChangeCheck,
	selectedAdditionalService,
	setSelectedAdditionalService,
}) => {
	return (
		<Segment raised className={styles.tourSingleSegment}>
			<h4 style={{ marginBottom: "10px" }}>Book This Tour</h4>
			<Form>
				<Form.Field className={styles.tourPackageFormField}>
					<label>First Name</label>
					<input
						placeholder="First Name"
						name="firstName"
						value={bookDetail.firstName}
						onChange={(e) => handleSetDetailsBook(e)}
					/>
				</Form.Field>
				<Form.Field className={styles.tourPackageFormField}>
					<label>Last Name</label>
					<input
						placeholder="Last Name"
						name="lastName"
						value={bookDetail.lastName}
						onChange={(e) => handleSetDetailsBook(e)}
					/>
				</Form.Field>
				<Form.Field className={styles.tourPackageFormField}>
					<label>Email</label>
					<input
						placeholder="Your Email"
						name="email"
						value={bookDetail.email}
						onChange={(e) => handleSetDetailsBook(e)}
					/>
				</Form.Field>
				<Form.Field className={styles.tourPackageFormField}>
					<label>Phone</label>
					<input
						placeholder="Your Phone"
						name="phone"
						value={bookDetail.phone}
						onChange={(e) => handleSetDetailsBook(e)}
					/>
				</Form.Field>
				<Form.Field className={styles.tourPackageFormField}>
					<label>Day Of Arrival</label>
					<input
						placeholder="MM / DD / YY"
						name="dateArrival"
						value={bookDetail.dateArrival}
						onChange={(e) => handleSetDetailsBook(e)}
					/>
				</Form.Field>
				<Form.Field className={styles.tourPackageFormField}>
					<label>Day Of Departure</label>
					<input
						placeholder="MM / DD / YY"
						name="dateDeparture"
						value={bookDetail.dateDeparture}
						onChange={(e) => handleSetDetailsBook(e)}
					/>
				</Form.Field>

				<h5>Additional Service</h5>
				{additionalServiceData.map((option, option_index) => (
					<Checkbox
						className={styles.tourSingleCheckbox}
						label={option.value}
						type="checkbox"
						checked={_.get(
							selectedAdditionalService,
							[_.snakeCase(option.value), "checked"],
							false
						)}
						key={`${option_index}`}
						name={`${option_index}`}
						value={option}
						onChange={(e, data) => myHandleChangeCheck(data, option.value)}
					/>
				))}

				<Form.Field className={styles.tourPackageFormField}>
					<Button
						className={styles.tourPackageButton}
						onClick={() => handleBook()}
					>
						<Icon name="check circle outline" />
						Book now
					</Button>
				</Form.Field>
			</Form>
		</Segment>
	);
};

export default BookBlock;
