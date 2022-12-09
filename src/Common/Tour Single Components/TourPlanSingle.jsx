import { Icon } from "semantic-ui-react";
import { tourPlans } from "../../Backend/Data";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";

const TourPlanSingle = () => {
	return (
		<>
			<h3>Tour Plan</h3>
			<p>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui
				blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
				et quas molestias excepturi sint occaecati cupiditate non provident,
				similique sunt in culpa qui officia deserunt mollitia animi, id est
				laborum et dolorum fuga.
			</p>

			<div className={styles.tourSingleDiv2}>
				{tourPlans.map((item, index) => (
					<div
						className={
							!(index + 1 === tourPlans.length)
								? styles.tourSingleDiv2Block
								: styles.tourSingleDiv2BlockEnd
						}
					>
						<span className={styles.tourSingleSpanBlock}>0{index + 1}</span>
						<h4>{item.time}</h4>
						<h3>{item.title}</h3>
						<p>{item.text}</p>
						<ul>
							{item.ul.map((el) => (
								<li>
									<Icon name="check" className={styles.tourPlansIconBlock} />
									{el}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default TourPlanSingle;
