import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import "react-18-image-lightbox/style.css";
import GalleryComponent from "./Gallery Component/GalleryComponent";
import { gallery } from "../../Backend/Data";
import { Button, Grid, Icon } from "semantic-ui-react";
import styles from "./Gallery Component/GalleryComponent.module.scss";


const GalleryPage = () => {
	return (
		<>
			<Breadcrumb title="Gallery" link="gallery" />

			<Grid className={styles.galleryGrid}>
				<Grid.Row columns={3}>
					<GalleryComponent data={gallery} />
				</Grid.Row>
				<Button className={styles.galleryButton}>
					Load more
					<Icon name="sync" className={styles.galleryIcon} />
				</Button>
			</Grid>

			<Footer />
		</>
	);
};

export default GalleryPage;
