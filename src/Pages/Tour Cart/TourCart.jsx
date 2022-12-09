import styles from "./TourCart.module.scss";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import { Button, Divider, Icon, Image, Input, Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import CalendarContainer from "../../Common/Calendar/Calendar";
import "../../Common/Calendar/Calendar.scss";

const vat = 25;

const TourCart = ({ tourCartHeader, data }) => {
	const [items, setItems] = useState([]);
	const [sum, setSum] = useState(0);
	const [totalSum, setTotalSum] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [openCalendar, setOpenCalendar] = useState([
		{
			key: "check-in",
			open: false,
			date: dayjs(new Date()).format("YYYY-MM-DD"),
		},
		{
			key: "check-out",
			open: false,
			date: dayjs(new Date()).format("YYYY-MM-DD"),
		},
	]);

	useEffect(() => {
		setItems(data);
	}, []);

	useEffect(() => {
		let countPrice = 0;

		if (items.length) {
			items.forEach((item) => {
				countPrice = countPrice + item.count * item.price;
			});
		}
		setSum(countPrice);
	}, [items]);

	useEffect(() => {
		if (sum) {
			setTotalSum(sum - discount + vat);
		}
	}, [sum]);

	const handleClose = (key) => {
		setOpenCalendar(
			openCalendar.map((item) => {
				if (item.key === key) {
					item.open = !item.open;
				}
				return item;
			})
		);
	};

	const handleSetDate = (key, date) => {
		setOpenCalendar(
			openCalendar.map((item) => {
				if (item.key === key) {
					item.date = dayjs(date).format("YYYY-MM-DD");
				}
				return item;
			})
		);
	};

	return (
		<>
			<Breadcrumb title="Tour cart" link="tour cart" />

			<div className={styles.tourCart}>
				<Table basic="very">
					<Table.Header className={styles.tourCartTableHeader}>
						<Table.Row>
							{tourCartHeader.map((cell) => (
								<Table.HeaderCell className={styles.tourCartTableHeaderCell}>
									{cell}
								</Table.HeaderCell>
							))}
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{items.map((item) => (
							<Table.Row key={item.id} className={styles.tourCartTableRow}>
								<Table.Cell>
									<Image src={item.imgUrl} className={styles.tourCartImage} />
								</Table.Cell>
								<Table.Cell>
									<h5>{item.tourName}</h5>
								</Table.Cell>
								<Table.Cell>
									<span>${item.price}</span>
								</Table.Cell>
								<Table.Cell>
									<span>${item.price * item.count}</span>
								</Table.Cell>
								<Table.Cell>
									<div>
										<div>
											<input
												onClick={() => handleClose("check-out")}
												placeholder="YYYY - MM - DD"
												value={openCalendar[1].date}
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
								</Table.Cell>
								<Table.Cell>
									<div>
										<Button
											onClick={() =>
												setItems(
													items.map((el) => {
														if (el.id === item.id) {
															el.count = el.count - 1;
														}
														return el;
													})
												)
											}
											disabled={item.count === 1}
											className={styles.tourCartImageButtonAddSub}
										>
											<Icon name="minus" />
										</Button>
										<Input value={item.count} type="text" />
										<Button
											onClick={() =>
												setItems(
													items.map((el) => {
														if (el.id === item.id) {
															el.count = el.count + 1;
														}
														return el;
													})
												)
											}
											className={styles.tourCartImageButtonAddSub}
										>
											<Icon name="plus" />
										</Button>
									</div>
								</Table.Cell>
								<Table.Cell>
									<span>${item.price * item.count}</span>
								</Table.Cell>

								<Table.Cell>
									<Button className={styles.tourCartCancel}>
										<Icon name="times" />
									</Button>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
				<Divider />

				<div className={styles.tourCartDivFooter}>
					<div style={{ float: "left" }}>
						<Input placeholder="Your Coupon Code" />
						<Button className={styles.tourCartApply}>Apply</Button>
					</div>
					<div
						style={{
							float: "right",
							marginTop: "-15px",
							marginBottom: "80px",
						}}
					>
						<Table basic="very" singleLine>
							<Table.Body>
								<Table.Row>
									<Table.Cell className={styles.tourCartTable2CellLeft}>
										Sub Total:
										<br />
										Vat:
										<br />
										Discount:
									</Table.Cell>

									<Table.Cell className={styles.tourCartTable2CellRight}>
										${sum}
										<br />${vat}
										<br />${discount}
									</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell className={styles.tourCartTable2CellTotal}>
										Total:
									</Table.Cell>

									<Table.Cell className={styles.tourCartTable2CellRightTotal}>
										${totalSum}
									</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
						<Button className={styles.tourCartCheckout}>Checkout</Button>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default TourCart;
