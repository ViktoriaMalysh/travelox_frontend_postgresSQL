import styles from "./GalleryComponent.module.scss";
import GalleryModal from "../GalleryModal/GalleryModal";
import { Grid, Image } from "semantic-ui-react";

const GalleryComponent = ({ data }) => {
	return (
		<>
			{data.map((item) => (
				<Grid.Column width={item.width} className={styles.galleryGridColumn}>
					{item.map((arr) => (
						<div className={styles.galleryGridColumnDivImg1}>
							<div className={styles.galleryGridColumnDivImg}>
								<Image src={arr.url} />
								<div className={styles.galleryGridButton}>
									<GalleryModal id={arr.id} />
								</div>
							</div>
						</div>
					))}
				</Grid.Column>
			))}
		</>
	);
};

export default GalleryComponent;
