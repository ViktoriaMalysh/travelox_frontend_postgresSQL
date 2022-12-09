import styles from "./Breadcrumb.module.scss";
import { Icon, Placeholder } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, link }) => {
	return (
		<div className={styles.breadcrumb}>
			<h2>{title}</h2>

			<div className={styles.breadcrumbDiv}>
				<Link to={"/"} className={styles.breadcrumbLink}>
					Home
				</Link>
				<Icon name="angle double right" className={styles.breadcrumbIcon} />
				<p>{link}</p>
			</div>
		</div>
	);
};

export default Breadcrumb;
