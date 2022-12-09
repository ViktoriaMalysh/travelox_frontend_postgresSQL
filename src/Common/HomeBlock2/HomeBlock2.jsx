import { Button, Icon, Image } from "semantic-ui-react";
import styles from "./HomeBlock2.module.scss";
import ctaImg from "../../assets/cta.jpg";
import { useNavigate } from "react-router-dom";

const HomeBlock2 = () => {
  let navigate = useNavigate();
	
	return (
		<div className={styles.homeblock2}>
			<div className={styles.homeblock2DivImg}>
				<Image src={ctaImg} className={styles.homeblock2Img} />
			</div>
			<div className={styles.homeblock2Div}>
				<h2>
					Get discount <span>20-35%</span> off any tour package{" "}
				</h2>
				<p>when you purchase any package & get next tour</p>
				<Button onClick={(e)=> navigate('/tour-package')}>
					start your trip now <Icon name="arrow right" />
				</Button>
			</div>
		</div>
	);
};

export default HomeBlock2;
