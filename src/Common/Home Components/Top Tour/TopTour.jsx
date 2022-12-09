import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridColumn } from "semantic-ui-react";
import { topTour } from "../../../Backend/Data";
import { getTopTours } from "../../../redux/actions/actionApi";
import TourCard from "../../Tour Card/TourCard";
import styles from "./TopTour.module.scss";

const TopTour = () => {
	const dispatch = useDispatch();
	const store = useSelector((state) => state);

	useEffect(() => {
		dispatch(getTopTours());
	}, []);

	const handleChange = () => {};

	return (
		<div className={styles.topTourDiv}>
			<span className={styles.topTourSpan}>Top Tour</span>
			<h2>Top tour package</h2>
			<p>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>
			<Grid>
				<Grid.Row columns={3} className={styles.topTourRow}>
					{store.api.topTours?.map((item) => (
						<GridColumn>
							<TourCard item={item} onChange={handleChange} offer={false} />
						</GridColumn>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default TopTour;
