import { Button, Divider, Icon, Input, Segment } from "semantic-ui-react";
import { ADDITIONAL_SERVICE } from "../../Constants/magicNumbersValid";
import styles from "../../Pages/Tour Booking/TourBooking.module.scss";

const BookingSummary = ({ data, details, discount, handleClick }) => {
  // const arr =  Array(selectedAdditionalService)
  console.log("[additionalService]:", details.additionalService);

  return (
    <>
      <Segment raised className={styles.tourBookingSegmentRight}>
        <h4>Booking Summary</h4>
        <ul>
          <br />

          <li>
            <strong className={styles.tourBookingRightStrong}>
              Packages Cost
            </strong>
            <span className={styles.tourBookingRightSpan}>
              $ {details.packagesCost}
            </span>
          </li>
          <br />
          {details.additionalService.map((item) =>
            item === "tour guide" ? (
              <>
                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Tour Guide
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    $ {ADDITIONAL_SERVICE.tourGuide}
                  </span>
                </li>
                <br />{" "}
              </>
            ) : item === "insurance" ? (
              <>
                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Insurance
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    $ {ADDITIONAL_SERVICE.insurance}
                  </span>
                </li>
                <br />
              </>
            ) : item === "dinner" ? (
              <>
                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Dinner
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    $ {ADDITIONAL_SERVICE.dinner}
                  </span>
                </li>
                <br />{" "}
              </>
            ) : item === "car rent" ? (
              <>
                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Car Rent
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    $ {ADDITIONAL_SERVICE.carRent}
                  </span>
                </li>
                <br />
              </>
            ) : null
          )}

          {discount > 0 && (
            <>
              <li>
                <strong className={styles.tourBookingRightStrong}>
                  Discount
                </strong>
                <span className={styles.tourBookingRightSpan}>
                  ${data.discount}
                </span>
              </li>
              <br />
            </>
          )}

          <li>
            <strong className={styles.tourBookingRightStrong}>Vat:</strong>
            <span className={styles.tourBookingRightSpan}>${data.vat}</span>
          </li>
          <br />
          <li>
            <strong className={styles.tourBookingRightStrong}>
              Sub Total:
            </strong>
            <span className={styles.tourBookingRightSpan}>
              ${data.subTotal}
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <Divider className={styles.tourBookingRightDivider} />
          </li>
        </ul>
        <ul>
          <li>
            <strong className={styles.tourBookingRightStrong}>Total:</strong>
            <span className={styles.tourBookingRightSpan}>
              ${data.total ? data.total : 1000}
            </span>
          </li>
        </ul>
        <ul
        // style={{ border: "1px solid red" }}
        >
          <li>
            <Button
              className={styles.tourBookingRightButton}
              onClick={handleClick}
              // onClick={() =>
              // 	navigate(
              // 		"/tour-cart?" + new URLSearchParams(option).toString()
              // 	)
              // }
            >
              Checkout
              <Icon name="arrow right" />
            </Button>
          </li>
        </ul>
      </Segment>
    </>
  );
};

export default BookingSummary;
