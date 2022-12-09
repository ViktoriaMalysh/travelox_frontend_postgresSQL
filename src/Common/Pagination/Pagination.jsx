import { Icon } from "semantic-ui-react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const CustomPagination = ({ handlePageClick, pageCount }) => {
	return (
		<ReactPaginate
			className={styles.paginate}
			pageClassName={styles.pageClassName}
			pageLinkClassName={styles.pageLinkClassName}
			previousLinkClassName={styles.previousLinkClassName}
			nextLinkClassName={styles.nextLinkClassName}
			nextClassName={styles.nextClassName}
			previousClassName={styles.prevClassName}
			activeClassName={styles.activeClassName}
			activeLinkClassName={styles.activeLinkClassName}
			breakLabel="..."
			onPageChange={handlePageClick}
			pageRangeDisplayed={5}
			pageCount={pageCount}
			previousLabel={<Icon name="arrow left" />}
			nextLabel={<Icon name="arrow right" />}
			renderOnZeroPageCount={null}
		/>
	);
};

export default CustomPagination;
