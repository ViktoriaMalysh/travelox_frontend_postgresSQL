import React, { useEffect, useRef } from "react";
import "./Calendar.scss";
import { Icon } from "semantic-ui-react";
// import styles from "../Search Area/SearchArea.module.scss";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const useOutsideAlerter = (ref, setOpenCalendar, openCalendar, key) => {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpenCalendar(
					openCalendar.map((item) => {
						item.open = false;
						return item;
					})
				);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
};

const CalendarContainer = ({
	onClickDay,
	calendarType,
	locale,
	setOpenCalendar,
	key,
	openCalendar,
	className
}) => {
	const formatShortWeekday = (locale, date) =>
		["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()];

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, setOpenCalendar, openCalendar, key);

	return (
		<div className={className} ref={wrapperRef}>
			<Calendar
				formatShortWeekday={formatShortWeekday}
				next2Label={<Icon name="angle double right" />}
				prev2Label={<Icon name="angle double left" />}
				calendarType={calendarType}
				showNeighboringMonth={false}
				// locale="uk"
				onClickDay={onClickDay}
			/>
		</div>
	);
};

export default CalendarContainer;
