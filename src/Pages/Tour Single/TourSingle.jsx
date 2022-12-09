import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import styles from "./TourSingle.module.scss";
import Banner from "../../Common/Banner/Banner";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import GuestReviewsSingle from "../../Common/Tour Single Components/GuestReviewsSingle";
import HeaderSingle from "../../Common/Tour Single Components/Header";
import TableSingle from "../../Common/Tour Single Components/TableSingle";
import TextSingle from "../../Common/Tour Single Components/TextSingle";
import TourPlanSingle from "../../Common/Tour Single Components/TourPlanSingle";
import { getReviews, getTour } from "../../redux/actions/actionApi";
import GallerySingle from "../../Common/Tour Single Components/GallerySingle";
import TourMapSingle from "../../Common/Tour Single Components/TourMapSingle";
import FormReviewSingle from "../../Common/Tour Single Components/FormReviewSingle";
import BookBlock from "../../Common/Tour Single Components/BookBlock";
import LoadingPage from "../Loading/Loading";
import _ from "lodash";

const TourSingle = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const tour = useSelector((state) => state.api.tour);

	const [bookDetail, setBookDetail] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		dateArrival: "",
		dateDeparture: "",
		additionalService: [],
	});

	const [selectedAdditionalService, setSelectedAdditionalService] = useState(
		{}
	);

	console.log("[bookDetail]:", bookDetail);

	useEffect(() => {
		// dispatch(getTour(params.id));
		// dispatch(getReviews(params.id));

		// const option = {
		// 	firstName: "my name",
		// 	lastName: "my surname",
		// 	email: "myemail@gmail.com",
		// 	phone: "0676683643",
		// 	dateArrival: "2022-10-01",
		// 	dateDeparture: "2022-10-10",
		// 	additionalService: ["car rent", "dinner"],
		// 	packagesCost: 1500,
		// };
		// navigate("/tour-booking?" + new URLSearchParams(option).toString()); //option -> bookDetail
	}, []);

	const handleBook = () => {
		let additionalService = _.chain(selectedAdditionalService)
			.filter("checked")
			.mapValues("value")
			.values()
			.join(", ")
			.value();

		setBookDetail({ ...bookDetail, additionalService: additionalService });
		// navigate("/tour-booking");

		//add
		// history.push("/search?" + new URLSearchParams(form).toString())

		// history.push(
		// 	`/checkout/${id}?startDate=${startDate}&endDate=${endDate}&price=${price}&checkoutUrl=${res.data}`
		// )

		// createReservation({
		// 	accommodation: id,
		// 	dayOfArrival,
		// 	dayOfDeparture,
		// 	travellers: personCount ? Number(personCount) : 1,
		// 	cancelUrl: window.location.href,
		// 	successUrl: window.location.origin + "/confirmation",
		// })

		// const [startDate, setStartDate] = useState(
		// 	new URLSearchParams(window.location.search).get("startDate")
		// );
		// const personCount = new URLSearchParams(window.location.search).get(
		// 	"personCount"
		// );
	};

	const handleSetDetailsBook = (e) => {
		const { name, value } = e.target;
		setBookDetail({ ...bookDetail, [name]: value });
	};

	const myHandleChangeCheck = (data, type) => {
		const formattedType = _.snakeCase(type);
		setSelectedAdditionalService((prevSeletedType) => {
			return {
				...prevSeletedType,
				[formattedType]: {
					...prevSeletedType[formattedType],
					checked: data.checked,
					value: data.value.value,
				},
			};
		});
	};

	return (
		<>
			{tour.nameHotel ? (
				<>
					<Breadcrumb
						title={tour.nameHotel}
						link={tour.nameHotel ? tour.nameHotel : 5}
					/>
					<Grid className={styles.tourSingle}>
						<Grid.Row>
							<Grid.Column width={11} style={{ width: "700px" }}>
								{tour.photos?.length && (
									<Image
										src={tour?.photos[0]}
										className={styles.tourSingleAvatar}
									/>
								)}

								<HeaderSingle tour={tour && tour} />

								<TextSingle />

								<TableSingle />

								<TourPlanSingle />

								<GallerySingle />

								<TourMapSingle />

								<GuestReviewsSingle tour={tour && tour} />

								<FormReviewSingle />
							</Grid.Column>
							<Grid.Column width={5} floated="right">
								<Grid>
									<Grid.Row>
										<Grid.Column>
											<BookBlock
												bookDetail={bookDetail}
												handleSetDetailsBook={handleSetDetailsBook}
												handleBook={handleBook}
												myHandleChangeCheck={myHandleChangeCheck}
												selectedAdditionalService={selectedAdditionalService}
												setSelectedAdditionalService={
													setSelectedAdditionalService
												}
											/>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column>
											<Banner />
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Footer />
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
};

export default TourSingle;
