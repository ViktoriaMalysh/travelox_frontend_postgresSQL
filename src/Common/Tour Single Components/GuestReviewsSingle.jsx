import { useSelector } from "react-redux";
import { Button, Grid, Icon, Image, Rating } from "semantic-ui-react";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";
import dayjs from "dayjs";
import _ from "lodash";
import avatar from "../../assets/avatar2.jpg";
import defAvatar from "../../assets/def.png";
import { useState } from "react";

const GuestReviewsSingle = ({ tour }) => {
	const reviewsAll = useSelector((state) => _.slice(state.api.reviews, 5, 20));
	const reviewsSlice = useSelector((state) => _.slice(state.api.reviews, 5, 8));

	const [reviews, setReviews] = useState(reviewsSlice);

	return (
		<>
			<h4 style={{ marginBottom: "60px" }}>
				Reviews ({tour.guestReviews?.reviewsCount})
			</h4>

			<Grid className={styles.tourSingleGrid}>
				{reviews &&
					reviews.map((item, index) => (
						<Grid.Row
							columns={2}
							className={styles.tourSingleGridRowReviews}
							style={{ marginLeft: index % 2 !== 0 && "70px" }}
						>
							<Grid.Column width={3} floated="left">
								<Image src={item.recommendedBy ? avatar : defAvatar} />
							</Grid.Column>
							<Grid.Column width={13}>
								<h5>{item.recommendedBy ? item.recommendedBy : "anonym"}</h5>

								<h5
									style={{
										color:
											item.qualitativeBadgeText === "Exceptional"
												? "#155f06"
												: item.qualitativeBadgeText === "Very Good"
												? "#26b40a"
												: item.qualitativeBadgeText === "Good"
												? "#f3e302"
												: item.qualitativeBadgeText === "Fair"
												? "#fca702"
												: "#990808",
									}}
								>
									{item.qualitativeBadgeText}
								</h5>
								<span>
									{dayjs(Number(item.postedOn)).format("DD MMMM, YYYY")}
								</span>
								<p>{item.summary}</p>
								<Rating
									size="large"
									icon="star"
									defaultRating={item.rating / 2}
									maxRating={5}
									disabled
								/>
								{/* <Link to={"/"} className={styles.tourSingleButtonComment}>
								<Icon name="reply" />
								Reply
							</Link> */}
							</Grid.Column>
						</Grid.Row>
					))}

				{reviews.length > 3 ? (
					<Button
						className={styles.tourSingleButtonComment}
						onClick={() => setReviews(reviewsSlice)}
					>
						<Icon name="sync" />
						show less
					</Button>
				) : (
					<Button
						className={styles.tourSingleButtonComment}
						onClick={() => setReviews(reviewsAll)}
					>
						<Icon name="sync" />
						show more
					</Button>
				)}
			</Grid>
		</>
	);
};

export default GuestReviewsSingle;
