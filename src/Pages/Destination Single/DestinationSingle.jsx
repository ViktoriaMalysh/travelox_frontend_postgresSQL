import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./DestinationSingle.module.scss";
import singleDest from "../../assets/single-dest.jpg";

import { Button, Grid, Icon, Image, Segment, Table } from "semantic-ui-react";
import GalleryComponent from "../Gallery/Gallery Component/GalleryComponent";
import {
	destinationImages,
	gallerySingleTour,
	allCategoryMenu,
} from "../../Backend/Data";
import Banner from "../../Common/Banner/Banner";
import single from "../../assets/single.jpg";

const DestinationSingle = () => {
	const [prodKey, setProdKey] = useState(0);
	const [data, setData] = useState([]);
	const params = useParams();

	useEffect(() => {
		setProdKey(params.key);
	}, []);

	useEffect(() => {
		// setProdId(params.id);
		setData({
			imgUrl: single,
			country: "New York",
			included: {
				visaRequirements: true,
				languages: ["english", "norwegian"],
				address: "Norway City, Norway",
				currencyUsed: "USD",
				supportPhone: "+21234567789",
				supportEmail: "info@example.com",
				area: 427.63,
			},
		});
	}, [prodKey]);

	console.log("prodId", params);
	console.log("included", data);

	return (
		<>
			<Breadcrumb title={data?.country} link={data?.country} />

			<Grid className={styles.destinationSingle}>
				<Grid.Row>
					<Grid.Column width={11} style={{ width: "700px" }}>
						<Image
							src={data.imgUrl}
							className={styles.destinationSingleAvatar}
						/>

						<h2>{data.country}</h2>

						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem.
						</p>

						<p>
							All the Lorem Ipsum generators on the Internet tend to repeat
							predefined chunks as necessary, making this the first true
							generator on the Internet. It uses a dictionary of over 200 Latin
							words, combined with a handful of model sentence structures, to
							generate Lorem Ipsum which looks reasonable.
						</p>

						<Grid className={styles.destinationSingleGridImages}>
							<Grid.Row columns={3}>
								{destinationImages.map((item) => (
									<Grid.Column>
										<Image src={item} />
									</Grid.Column>
								))}
							</Grid.Row>
						</Grid>

						<p>
							But I must explain to you how all this mistaken idea of denouncing
							pleasure and praising pain was born and I will give you a complete
							account of the system, and expound the actual teachings of the
							great explorer of the truth, the master-builder of human
							happiness. No one rejects, dislikes, or avoids pleasure itself,
							because it is pleasure, but because those who do not know how to
							pursue pleasure rationally encounter consequences that are
							extremely painful.
						</p>

						<h3>Country Information</h3>

						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi sint occaecati cupiditate non
							provident, similique sunt in culpa qui officia deserunt mollitia
							animi, id est laborum et dolorum fuga.
						</p>

						{data.included ? (
							<Table celled as="table">
								<Table.Body>
									{Object.keys(data?.included).map((key) => (
										<Table.Row>
											<Table.Cell className={styles.tourSingleTableCellLeft}>
												<Icon
													name={"check circle"}
													className={styles.tourSingleIconTrue}
												/>
												Unknown
											</Table.Cell>
											<Table.Cell className={styles.tourSingleTableCellRight}>
												yes
											</Table.Cell>
										</Table.Row>
									))}
								</Table.Body>
							</Table>
						) : null}

						<h3>Destination Gallery</h3>
						<p>
							Accusamus et iusto odio dignissimos ducimus qui blanditiis
							praesentium voluptatum deleniti atque corrupti quos dolores et
							quas molestias excepturi sint occaecati cupiditate non provident,
							similique sunt in culpa qui officia deserunt mollitia animi, id
							est laborum et dolorum fuga.
						</p>

						<Grid>
							<Grid.Row columns={3}>
								<GalleryComponent data={gallerySingleTour} />
							</Grid.Row>
						</Grid>

						<h3>Location Map</h3>
						<p>
							On the other hand, we denounce with righteous indignation and
							dislike men who are so beguiled and demoralized by the charms of
							pleasure of the moment, so blinded by desire, that they cannot
							foresee the pain and trouble that are bound to ensue; and equal
							blame belongs to those who fail in their duty through weakness of
							will, which is the same as saying through shrinking from toil and
							pain.
						</p>

						{/* there should be a map (iframe)  */}
					</Grid.Column>
					<Grid.Column width={5} floated="right">
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Segment raised className={styles.destinationSingleSegment}>
										<h4>All Category</h4>
										{allCategoryMenu.map((item, index) => (
											<Link
												to={"/"}
												className={
													!(index + 1 === allCategoryMenu.length)
														? styles.destinationSingleLink
														: styles.destinationSingleLinkEnd
												}
											>
												{item.name}
											</Link>
										))}
									</Segment>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Grid.Column>
									<Segment raised className={styles.destinationSingleSegment}>
										<h4>Featured Tours</h4>
										{[1, 2, 3].map((item) => (
											<>
												<div className={styles.destinationSingleDivTours}>
													<div className={styles.destinationSingleDivTourImage}>
														<Image src={singleDest} />
													</div>
													<div className={styles.destinationSingleDivTour}>
														<h6>$1,500</h6>
														<h5>Singapore Holidays</h5>
														<span>
															<Icon name="clock outline" />4 Days/3 Nights
														</span>
													</div>
												</div>
												<br />
												<br />
												<br />
											</>
										))}
									</Segment>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Segment raised className={styles.destinationSingleSegment}>
										<h4>Download</h4>
										<Button>
											<Icon name="file pdf outline" />
											Travel Direction
										</Button>
										<Button>
											<Icon name="file pdf outline" />
											Country Info
										</Button>
									</Segment>
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
	);
};

export default DestinationSingle;
