import { Table } from "semantic-ui-react";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";

const TableSingle = () => {
  return(
    <Table celled as="table">
    <Table.Body>
      {/* {tour.included.map((item) => (
      <Table.Row>
        <Table.Cell className={styles.tourSingleTableCellLeft}>
          <Icon
            name={item.type ? "check circle" : "times circle"}
            className={
              item.type
                ? styles.tourSingleIconTrue
                : styles.tourSingleIconFalse
            }
          />
          Unknown
        </Table.Cell>
        <Table.Cell className={styles.tourSingleTableCellRight}>
          {item.type ? "Yes" : "No"}
        </Table.Cell>
      </Table.Row>
    ))} */}
    </Table.Body>
  </Table>

  )
}

export default TableSingle;