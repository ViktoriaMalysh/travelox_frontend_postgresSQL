import { Dimmer, Loader } from "semantic-ui-react";
import styles from "./Loading.module.scss";

const LoadingPage = () => {

	return (
		<div className={styles.divLoader}>
			<Dimmer active inverted>
				<Loader inverted content="Loading" className={styles.loader} />
			</Dimmer>
		</div>
	);
};

export default LoadingPage;
