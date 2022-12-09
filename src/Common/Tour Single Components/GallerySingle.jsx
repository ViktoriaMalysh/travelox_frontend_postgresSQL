import { Grid } from "semantic-ui-react";
import { gallerySingleTour } from "../../Backend/Data";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";
import GalleryComponent from "../../Pages/Gallery/Gallery Component/GalleryComponent";

const GallerySingle = () => {
	return (
		<>
			<h3>Tour Gallery</h3>
			<p>
				Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
				voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in
				culpa qui officia deserunt mollitia animi, id est laborum et dolorum
				fuga.
			</p>

			<Grid>
				<Grid.Row columns={3}>
					<GalleryComponent data={gallerySingleTour} />
				</Grid.Row>
			</Grid>
		</>
	);
};

export default GallerySingle;
