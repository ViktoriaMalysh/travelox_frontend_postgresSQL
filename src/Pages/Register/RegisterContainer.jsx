import { Button, Checkbox, Form, Icon, Segment } from "semantic-ui-react";
import styles from "./Register.module.scss";
import logo from "../../assets/logo-login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { validate } from "../../Helpers/validation";
import { signUp } from "../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const RegisterContainer = ({}) => {
	const dispatch = useDispatch();
	const store = useSelector((state) => state);
	const navigate = useNavigate();

	const [candidateValid, setCandidateValid] = useState({
		firstName: true,
		lastName: true,
		email: true,
		password: true,
	});

	const [candidate, setCandidate] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCandidateValid({ ...candidateValid, [name]: validate(value, name) });
		setCandidate({ ...candidate, [name]: value });
	};

	const handleSubmit = () => {
		console.log("save");
		dispatch(signUp(candidate)).then(navigate("/"));
	};

	return (
		<Segment className={styles.registerSegment} raised>
			<div className={styles.registerHeader}>
				<img src={logo} />
				<p>create your travelox account</p>
			</div>
			<Form className={styles.registerForm} as="form">
				<Form.Field>
					<label>First Name</label>
					<Form.Input
						placeholder="Your First Name"
						type="text"
						name="firstName"
						error={
							!candidateValid.firstName && !candidate.firstName
								? {
										content: "Required field",
										pointing: "below",
								  }
								: !candidateValid.firstName && candidate.firstName
								? {
										content: "First name must contain from 3 to 30 letters",
										pointing: "below",
								  }
								: null
						}
						onChange={handleChange}
					/>
				</Form.Field>

				<Form.Field>
					<label>Last Name</label>
					<Form.Input
						placeholder="Your Last Name"
						type="text"
						name="lastName"
						error={
							!candidateValid.lastName && !candidate.lastName
								? {
										content: "Required field",
										pointing: "below",
								  }
								: !candidateValid.lastName && candidate.lastName
								? {
										content: "Last name must contain from 3 to 30 letters",
										pointing: "below",
								  }
								: null
						}
						onChange={handleChange}
					/>
				</Form.Field>
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
				<Form.Field>
					<label>Password</label>
					<Form.Input
						placeholder="Your Password"
						type="password"
						name="password"
						error={
							!candidateValid.password && !candidate.password
								? {
										content: "Required field",
										pointing: "below",
								  }
								: !candidateValid.password && candidate.password
								? {
										content: "Password must contain at least 8 characters",
										pointing: "below",
								  }
								: null
						}
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<div className={styles.registerCheckbox}>
						<Checkbox /> I agree to the{" "}
						<Link to="/" className={styles.registerLink}>
							Terms Of Service
						</Link>
					</div>
				</Form.Field>
				<Button as="button" onClick={() => handleSubmit()}>
					<Icon className={styles.registerIcon} name="paper plane outline" />{" "}
					Register
				</Button>
			</Form>

			<div className={styles.registerFooter}>
				Already have an account?{" "}
				<Link to="/" className={styles.registerLink}>
					Login.
				</Link>
			</div>
		</Segment>
	);
};

export default RegisterContainer;
