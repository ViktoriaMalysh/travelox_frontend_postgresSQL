import styles from "./TourCard.module.scss";
import { Link } from "react-router-dom";
import {
	Button,
	Divider,
	Grid,
	Icon,
	Rating,
	Segment,
} from "semantic-ui-react";

const TourCard = ({ item, onChange, offer }) => {
	// console.log("item", item.guestReviews);

	return (
		<>
			{offer && (
				<div className={styles.topTourSale}>
					<h6>{item.discount}%</h6>
					<span>Off</span>
				</div>
			)}
			<Button className={styles.topTourAdd}>
				<Icon name="heart" />
			</Button>

			<Segment raised className={styles.topTourSegment}>
				<div className={styles.topTourSegmentDivImg}>
					<img
						src={item.optimizedThumbUrls?.srpDesktop}
						className={styles.topTourSegmentImg}
					/>
				</div>
				<Grid className={styles.topTourSegmentBlock} divided>
					<Grid.Row columns={3}>
						<Grid.Column width={5}>
							<Icon name="clock outline" />{" "}
							{item.countOfDays ? item.countOfDays : 1}D/
							{item.countOfDays ? item.countOfDays - 1 : 1}N
						</Grid.Column>

						<Grid.Column width={6}>
							<Icon name="users" />{" "}
							{item.countOfPerson ? item.countOfPerson : 1} Person
						</Grid.Column>

						<Grid.Column width={5}>
							<Icon name="map marker alternate" /> {item.address.countryName}
						</Grid.Column>
					</Grid.Row>
				</Grid>
				{offer ? (
					<>
						<div className={styles.topTourSegmentDivOffer}>
							<Rating
								defaultRating={item.starRating}
								maxRating={5}
								size="small"
								icon="star"
								disabled
								className={styles.topTourSegmentRatingOffer}
							/>{" "}
							<span className={styles.topTourSegmentSpanOffer}>
								({item.reviews} Reviews)
							</span>
						</div>
						<Link to={`/tour-package/${item.id}`}>
							<h5>{item.name}</h5>
						</Link>

						<div>
							<div className={styles.topTourSegmentDivOffer}>
								<span className={styles.topTourSegmentOfferSpanOldPrice}>
									${item.oldPrice}
								</span>
								<span className={styles.topTourSegmentOfferSpanNewPrice}>
									${Math.ceil(item.oldPrice - (item.oldPrice / 100) * 25)}
								</span>
								<span className={styles.topTourSegmentSpanRedOffer}>
									/per person
								</span>
							</div>
						</div>

						<Divider className={styles.topTourSegmentDevider} />

						<Button className={styles.topTourButtonOffer}>
							Book now <Icon name="arrow right" />
						</Button>
					</>
				) : (
					<>
						<Link to={`/tour-package/${item.id}`}>
							<h5>{item.name}</h5>
						</Link>
						<div className={styles.topTourSegmentDiv}>
							<Rating
								defaultRating={item.starRating}
								maxRating={5}
								size="small"
								icon="star"
								disabled
								className={styles.topTourSegmentRating}
							/>{" "}
							<span>({item.guestReviews?.total} Reviews)</span>
						</div>

						<Divider className={styles.topTourSegmentDevider} />

						<div className={styles.topTourSegmentDivButton}>
							<div className={styles.topTourSegmentDiv}>
								${Math.ceil(item.ratePlan.price.exactCurrent)}
								<span>/per person</span>
							</div>
							<Button className={styles.topTourButton}>
								Book now <Icon name="arrow right" />
							</Button>
						</div>
					</>
				)}
			</Segment>
		</>
	);
};

export default TourCard;
