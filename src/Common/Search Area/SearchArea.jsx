import { Segment, Form, Icon, Button, Dropdown } from "semantic-ui-react";
import styles from "./SearchArea.module.scss";
import { useState } from "react";
import CalendarContainer from "../Calendar/Calendar";
import "../Calendar/Calendar.scss";
import { accommodationTypes, calendarItems } from "../../Backend/Data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import dayjs from "dayjs";
import { getTours } from "../../redux/actions/actionApi";
import { useNavigate } from "react-router-dom";

const SearchArea = () => {
	// const store = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const locale = useSelector((state) => state.api.locale);
	const [search, setSearch] = useState({
		destination: "",
		accommodationType: "",
	});

	useEffect(() => {
		if (locale.length) {
			setSearch({
				destination: locale[0].key,
				accommodationType: accommodationTypes[0].value,
			});
		}
	}, [locale]);

	const [openCalendar, setOpenCalendar] = useState([
		{ key: "check-in", open: false, date: new Date() },
		{ key: "check-out", open: false, date: new Date() },
	]);

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

	const handleSearch = () => {
		const options = {
			method: "get",
			url: "https://hotels4.p.rapidapi.com/properties/list",
			params: {
				destinationId: "1506246",
				pageNumber: "1",
				pageSize: "26",
				checkIn: openCalendar[0].date,
				checkOut: openCalendar[1].date,
				adults1: "1",
				sortOrder: "PRICE",
				locale: search.destination,
				currency: "USD",
				accommodationIds: search.accommodationType,
			},
			headers: {
				"X-RapidAPI-Key": "41c8a73cc0msh36005253ddf9396p1a020ajsn71ab7eb472c5",
				"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
			},
		};
		dispatch(getTours(options));
		navigate("/tour-package");
	};

	return (
		<Segment className={styles.searchAreaSegment}>
			<Form>
				<Form.Group widths="equal" className={styles.searchAreaGroup}>
					<Form.Field>
						<label>Destination</label>
						<div>
							<Icon
								name="map marker alternate"
								className={styles.searchAreaIcon}
							/>
							<Dropdown
								selection
								label="Travel Type"
								placeholder={locale.length ? locale[0].value : null}
								options={locale}
								defaultValue={search.destination}
								value={search.destination}
								onChange={(e, data) => {
									locale.map((item) => {
										if (item.value === data.value) {
											setSearch({ ...search, destination: item.key });
										}
									});
								}}
								className={styles.searchAreaSelect}
							/>
						</div>
					</Form.Field>
					{calendarItems.map((item) => (
						<Form.Field>
							<div>
								<label>{item.label}</label>
								{openCalendar.map(
									(block) =>
										block.key === item.key &&
										block.open &&
										(console.log(block.key === item.key && block.open),
										(
											<CalendarContainer
												onClickDay={(value, event) => {
													handleSetDate(item.key, value);
													handleClose(item.key);
												}}
												calendarType="US"
												setOpenCalendar={setOpenCalendar}
												openCalendar={openCalendar}
												key={item.key}
												className={styles.searchAreaCalendar}
												// locale="uk"
											/>
										))
								)}

								<div>
									<Icon
										name="map marker alternate"
										className={styles.searchAreaIconCalendar}
									/>
									<input
										onClick={() => handleClose(item.key)}
										className={styles.searchAreaInputCalendar}
										placeholder={item.placeholder}
									/>
								</div>
							</div>
						</Form.Field>
					))}
					<Form.Field>
						<label>Travel Type</label>
						<Icon name="globe" className={styles.searchAreaIcon} />

						<Dropdown
							selection
							label="Travel Type"
							placeholder={accommodationTypes[0].value}
							options={accommodationTypes}
							defaultValue={search.accommodationType}
							value={search.accommodationType}
							onChange={(e, data) => {
								setSearch({ ...search, accommodationType: data.value });
							}}
							className={styles.searchAreaSelect}
						/>
					</Form.Field>

					<Form.Field>
						<Button
							className={styles.searchAreaButton}
							onClick={() => handleSearch()}
						>
							<Icon name="search" />
							Find now
						</Button>
					</Form.Field>
				</Form.Group>
			</Form>
		</Segment>
	);
};

export default SearchArea;
