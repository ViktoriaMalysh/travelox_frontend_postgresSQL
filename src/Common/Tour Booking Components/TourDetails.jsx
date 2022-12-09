import { Button, Checkbox, Form, Input, Segment } from "semantic-ui-react";
import styles from "../../Pages/Tour Booking/TourBooking.module.scss";
import CalendarContainer from "../Calendar/Calendar";
import _ from "lodash";
import { additionalServiceData, discounts } from "../../Backend/Data";
import { useState } from "react";

const TourDetails = ({
	handleClose,
	handleSetDate,
	openCalendar,
	myHandleChangeCheck,
	setOpenCalendar,
	selectedAdditionalService,
	discount,
	setDiscount,
}) => {



  const [coupon, setCoupon] = useState("")

  console.log("[discount]:", discount)

  const handleSetDiscount = () =>{
    
    setDiscount(_.get(discounts, coupon))
    // console.log('[test]:', test)
  }

	return (
		<Segment raised className={styles.tourBookingSegmentLeft}>
			<h4>Tour Details</h4>

			<Form className={styles.tourBookingSegmentLeftForm}>
				<Form.Group widths="equal">
					<div style={{ width: "48%", marginLeft: "7px" }}>
						<div>
							<label>Date Arrival</label>
							<input
								onClick={() => handleClose("check-in")}
								placeholder="YYYY - MM - DD"
								value={openCalendar[0].date}
								className={styles.tourBookingSegmentLeftInput}
							/>
						</div>

						{openCalendar.map(
							(block) =>
								block.key === "check-in" &&
								block.open && (
									<CalendarContainer
										onClickDay={(value, event) => {
											handleSetDate("check-in", value);
											handleClose("check-in");
										}}
										calendarType="US"
										setOpenCalendar={setOpenCalendar}
										openCalendar={openCalendar}
										key={"check-in"}
										className={styles.tourPackageAreaCalendar}
										// locale="uk"
									/>
								)
						)}
					</div>
					<div style={{ width: "48%", marginLeft: "12px" }}>
						<div>
							<label>Date Departure</label>
							<input
								onClick={() => handleClose("check-out")}
								placeholder="YYYY - MM - DD"
								value={openCalendar[1].date}
								className={styles.tourBookingSegmentLeftInput}
							/>
						</div>

						{openCalendar.map(
							(block) =>
								block.key === "check-out" &&
								block.open && (
									<CalendarContainer
										onClickDay={(value, event) => {
											handleSetDate("check-out", value);
											handleClose("check-out");
										}}
										calendarType="US"
										setOpenCalendar={setOpenCalendar}
										openCalendar={openCalendar}
										key={"check-out"}
										className={styles.tourPackageAreaCalendar}
										// locale="uk"
									/>
								)
						)}
					</div>
				</Form.Group>
				<h5>Additional Service</h5>
				{additionalServiceData.map((option, option_index) => (
					<Checkbox
						className={styles.tourBookingCheckbox}
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
				<div>
					<Input
						placeholder="Your Coupon Code"
            value={coupon}
						onChange={(e) => setCoupon(e.target.value)}
					/>
					<Button className={styles.tourCartApply} onClick={handleSetDiscount}>Apply</Button>
				</div>
			</Form>
		</Segment>
	);
};

export default TourDetails;
