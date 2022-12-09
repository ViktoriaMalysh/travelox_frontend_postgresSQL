import { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { testimonials } from "../../Backend/Data";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import CustomPagination from "../../Common/Pagination/Pagination";
import TestimonialsCard from "../../Common/Testimonials Card/TestimonialsCard";
import styles from "./Testimonials.module.scss";

const TestimonialsPage = () => {
	const [pageCount, setPageCount] = useState(0);
	const [currentItems, setCurrentItems] = useState(null);
	const [itemOffset, setItemOffset] = useState(0);

	const itemsPerPage = 6;

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(testimonials.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(testimonials.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % testimonials.length;
		setItemOffset(newOffset);
	};

	return (
		<>
			<Breadcrumb title="Testimonials" link="testimonials" />

			<Grid className={styles.testimonialsGrid}>
				<Grid.Row columns={3}>
					{currentItems?.map((item) => (
						<Grid.Column>
							<TestimonialsCard item={item} />
						</Grid.Column>
					))}
				</Grid.Row>
				<CustomPagination
					handlePageClick={handlePageClick}
					pageCount={pageCount}
				/>
			</Grid>

			<Footer />
		</>
	);
};

export default TestimonialsPage;
