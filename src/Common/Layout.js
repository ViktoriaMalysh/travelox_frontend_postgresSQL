import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { verifyToken } from "../redux/actions/actionUser";
import Header from "./Header/Header";

const Layout = ({ children }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const [currentPath, setCurrentPath] = useState(location.pathname);
	const dispatch = useDispatch();
	const store = useSelector((state) => state);
	const token = localStorage.getItem("token");

	useEffect(() => {
		dispatch(verifyToken(token));
		// const isUser = localStorage.getItem("isUser");
		// if (!isUser) navigate("/login");
	}, [token]);

	useEffect(() => {
		const { pathname } = location;
		setCurrentPath(pathname);
	}, [location]);

	const mainStyle = {
		// background: "#e5e5e5",
	};

	const loginStyle = {
		background: "#fff",
	};

	return (
		<div>
			<div style={{ background: "#fff" }}>
				{currentPath !== "/login" &&
					currentPath !== "/register" &&
					currentPath !== "/forgot-password" &&
					currentPath !== "/err-404" && <Header />}
			</div>
			<div style={currentPath !== "/login" ? mainStyle : loginStyle}>
				{children}
			</div>
		</div>
	);
};

export default Layout;
