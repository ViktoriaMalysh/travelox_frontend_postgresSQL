import { Button, Divider, Grid, Icon, Input } from "semantic-ui-react";
import styles from "./Footer.module.scss";
import logoWhite from "../../assets/logo_white.png";
import { itemsHeader } from "../../Backend/Data";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
	let navigate = useNavigate();

	return (
		<div className={styles.footer}>
			<Grid>
				<Grid.Row columns={4} className={styles.footerRow}>
					<Grid.Column className={styles.footerColumn}>
						<Link to={"/"}>
							<img alt="logo" src={logoWhite} />
						</Link>
						<p>
							There are many variations of the passages available the majority
							have suffered alteration in some form by injected humour.
						</p>
						<div className={styles.footerDivIcon}>
							<base target="_blank"></base>
							<a href="https://uk-ua.facebook.com/">
								<Icon name="facebook f" className={styles.footerIcon} />
							</a>
							<base target="_blank"></base>
							<a href="https://www.instagram.com/">
								<Icon name="instagram" className={styles.footerIcon} />
							</a>
							<base target="_blank"></base>
							<a href="https://twitter.com/">
								<Icon name="twitter" className={styles.footerIcon} />
							</a>
							<base target="_blank"></base>
							<a href="https://www.youtube.com/">
								<Icon name="youtube" className={styles.footerIcon} />
							</a>
						</div>
					</Grid.Column>
					<Grid.Column className={styles.footerColumn}>
						<h4>Quick Links</h4>
						<ul>
							<li onClick={() => navigate("/about-us")}>About Us</li>
							<li onClick={() => navigate("/faq")}>FAQ's</li>
							<li onClick={() => navigate("/terms-of-service")}>
								Terms Of Service
							</li>
							<li onClick={() => navigate("/privacy-policy")}>
								Privacy policy
							</li>
							<li onClick={() => navigate("/")}>Our Services</li>
						</ul>
					</Grid.Column>
					<Grid.Column className={styles.footerColumnContact}>
						<h4>Contact Us</h4>
						<ul>
							<li className={styles.footerLiText}>
								<Icon
									name="map marker alternate"
									className={styles.footerIcon}
								/>
								15/B Road, New York, USA
							</li>
							<li>
								<Icon name="phone" className={styles.footerIcon} /> +2 123 4566
								789
							</li>
							<li>
								<Icon name="mail" className={styles.footerIcon} />
								info@example.com
							</li>
							<li className={styles.footerLiText}>
								<Icon name="clock" className={styles.footerIcon} />
								Sun - Fri (10AM - 08PM)
							</li>
						</ul>
					</Grid.Column>
					<Grid.Column className={styles.footerColumnContact}>
						<h4>Newsletter</h4>
						<p>Subscribe our newsletter to get latest update and news</p>
						<Input className={styles.footerInput} placeholder="Your Email" />
						<Button className={styles.footerButton}>
							<Icon name="paper plane outline" />
							Subscribe now
						</Button>
					</Grid.Column>
				</Grid.Row>
				<Divider />
				<Grid.Row className={styles.footerRowEnd}>
					<Grid.Column floated="left">
						{itemsHeader.map((item) => (
							<Link to={item.path} className={styles.footerLink}>
								{item.item}
							</Link>
						))}

						<p className={styles.footerP}>
							© Copyright 2022{" "}
							<Link to={"/"} className={styles.footerLinkTravelox}>
								Travelox
							</Link>{" "}
							All Rights Reserved.
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default Footer;
