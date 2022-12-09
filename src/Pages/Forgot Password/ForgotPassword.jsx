import { Button, Form, Icon, Segment } from "semantic-ui-react";
import styles from "./ForgotPassword.module.scss";
import logo from "../../assets/logo-login.png";
import { useState } from "react";
import { validate } from "../../Helpers/validation";

const ForgotPassword = ({}) => {
  const [candidateValid, setCandidateValid] = useState({
    email: true,
  });

  const [candidate, setCandidate] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidateValid({ ...candidateValid, [name]: validate(value, name) });
    setCandidate({ ...candidate, [name]: value });
  };

  return (
    <Segment className={styles.forgotPasswordSegment} raised>
      <div className={styles.forgotPasswordHeader}>
        <img src={logo} />
        <p>reset your travelox account</p>
      </div>
      <Form className={styles.forgotPasswordForm} as="form">
        <Form.Field>
          <label>Email Address</label>
          <Form.Input
            placeholder="Your Email"
            type="email"
            name="email"
            error={
              !candidateValid.email && !candidate.email
                ? {
                    content: "Required field",
                    pointing: "below",
                  }
                : !candidateValid.email && candidate.email
                ? {
                    content: "Invalid email",
                    pointing: "below",
                  }
                : null
            }
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" as="button">
          <Icon className={styles.forgotPasswordIcon} name="key" /> Send Reset
          Link
        </Button>
      </Form>
    </Segment>
  );
};

export default ForgotPassword;
