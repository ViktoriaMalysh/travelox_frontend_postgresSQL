import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Button, Grid, Icon, Image } from "semantic-ui-react";
import { ourBlog } from "../../../Backend/Data";
import styles from "./OurBlog.module.scss";

const OurBlog = () => {
	return (
		<div className={styles.ourBlog}>
			<span className={styles.ourBlogSpan}>Our blog</span>
			<h2>Latest news & blog</h2>
			<p>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>
			<Grid className={styles.ourBlogGrid}>
				<Grid.Row columns={3}>
					{ourBlog.map((item) => (
						<Grid.Column className={styles.ourBlogGridColumn}>
							<div className={styles.ourBlogGridDivImg}>
								<Image src={item.imgUrl} />
							</div>
							<div className={styles.ourBlogGridColumnDiv}>
								<div className={styles.ourBlogGridColumnLeft}>
									<Icon name="user outline" className={styles.ourBlogIcon} />
									<span>{item.user}</span>
								</div>
								<div className={styles.ourBlogGridColumnRight}>
									<Icon
										name="calendar alternate outline"
										className={styles.ourBlogIcon}
									/>
									{/* <span>{dayjs(new Date(item.date))}</span> */}
									<span>25 June, 2021</span>
								</div>
							</div>
							<h5>{item.title}</h5>
							<Link to={"/"} className={styles.ourBlogLink}>
								Read more <Icon name="arrow right" />
							</Link>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default OurBlog;
