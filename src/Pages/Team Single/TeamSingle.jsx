import { Grid, Icon, Image, Segment } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./TeamSingle.module.scss";
import bio from "../../assets/bio.jpg";
import { linksIconSingleTeam, tourGuides } from "../../Backend/Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamSingle = () => {
	const [team, setTeam] = useState({});
	const params = useParams();

	useEffect(() => {
		tourGuides.map((item) => {
			if (item.id === Number(params.id)) {
				setTeam(item);
			}
		});
	}, []);

	return (
		<>
			<Breadcrumb title="Marie R Lippert" link="Marie R Lippert" />

			<Grid className={styles.teamSingle}>
				<Grid.Row columns={2}>
					<Grid.Column width={4}>
						<Image src={team.avatar} />
					</Grid.Column>
					<Grid.Column width={12}>
						<Segment raised className={styles.teamSingleSegment}>
							<h3>{team.name}</h3>
							<span>Tour Manager</span>
							<p>
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters packages and web page editors now
								usepackages and web page editors now use.
							</p>
							<div className={styles.teamSingleSegmentDiv}>
								<Icon name="mail" className={styles.teamSingleIcon} />
								marie@example.com
							</div>
							<div className={styles.teamSingleSegmentDiv}>
								<Icon name="phone" className={styles.teamSingleIcon} />
								+2 123 456 7892
							</div>
							<ul>
								{linksIconSingleTeam.map((item) => (
									<li>
										<base target="_blank"></base>
										<a href={item.link}>
											<Icon name={item.icon} />
										</a>
									</li>
								))}
							</ul>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row columns={2} className={styles.teamSingleRow}>
					<Grid.Column width={9}>
						<h4>Biography</h4>
						<p>
							Sed ut perspiciatis unde omnis totam rem chitecto beatae vitae
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
					</Grid.Column>
					<Grid.Column width={7}>
						<Image src={bio} />
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Footer />
		</>
	);
};

export default TeamSingle;
