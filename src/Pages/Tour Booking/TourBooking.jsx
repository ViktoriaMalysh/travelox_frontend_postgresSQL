import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Segment, Form } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./TourBooking.module.scss";
import "../../Common/Calendar/Calendar.scss";
import dayjs from "dayjs";
import _ from "lodash";
import BookingSummary from "../../Common/Tour Booking Components/BookingSummary";
import YourDetails from "../../Common/Tour Booking Components/YourDetails";
import TourDetails from "../../Common/Tour Booking Components/TourDetails";

import PaymentInfo from "../../Common/Tour Booking Components/PaymentInfo";

const TourBooking = ({ data }) => {
  const [details, setDetails] = useState({
    firstName: new URLSearchParams(window.location.search).get("firstName"),
    lastName: new URLSearchParams(window.location.search).get("lastName"),
    email: new URLSearchParams(window.location.search).get("email"),
    phone: new URLSearchParams(window.location.search).get("phone"),
    address: "",
    dateArrival: new URLSearchParams(window.location.search).get("dateArrival"),
    dateDeparture: new URLSearchParams(window.location.search).get(
      "dateDeparture"
    ),
    packagesCost: new URLSearchParams(window.location.search).get(
      "packagesCost"
    ),
    additionalService: [],
  });

  const [discount, setDiscount] = useState(0);

  const [openCalendar, setOpenCalendar] = useState([
    {
      key: "check-in",
      open: false,
      date: new URLSearchParams(window.location.search).get("dateArrival"),
    },
    {
      key: "check-out",
      open: false,
      date: new URLSearchParams(window.location.search).get("dateDeparture"),
    },
  ]);

  // const [selectedAdditionalService, setSelectedAdditionalService] = useState(
  // 	new URLSearchParams(window.location.search).get("additionalService")
  // );

  // useEffect(() => {
  // 	const arrAdditionalService = selectedAdditionalService.split(/\s*,\s*/);
  // 	setDetails({ ...details, additionalService: arrAdditionalService });
  // }, []);

  const myHandleChangeCheck = (data, type) => {
    // const formattedType = _.snakeCase(type);
    // setSelectedAdditionalService((prevSeletedType) => {
    // 	return {
    // 		...prevSeletedType,
    // 		[formattedType]: {
    // 			...prevSeletedType[formattedType],
    // 			checked: data.checked,
    // 			value: data.value.value,
    // 		},
    // 	};
    // });
  };

	const handleClick = () => {
		
		// details
	};

  const handleSetDetails = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

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
      <Breadcrumb title="Tour booking" link="tour booking" />

      <Grid className={styles.tourBooking}>
        <Grid.Row>
          <Grid.Column>
            <YourDetails
              handleSetDetails={handleSetDetails}
              details={details}
            />

            <BookingSummary
              data={data}
              details={details}
              discount={discount}
              handleClick={handleClick}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <TourDetails
              handleClose={handleClose}
              handleSetDate={handleSetDate}
              openCalendar={openCalendar}
              myHandleChangeCheck={myHandleChangeCheck}
              setOpenCalendar={setOpenCalendar}
              // selectedAdditionalService={selectedAdditionalService}
              discount={discount}
              setDiscount={setDiscount}
            />
          </Grid.Column>
        </Grid.Row>
        {/* // <Grid.Row>
				// 	<Grid.Column>
				// 		<PaymentInfo />
				// 	</Grid.Column>
				// </Grid.Row> */}
      </Grid>

      <Footer />
    </>
  );
};

export default TourBooking;
