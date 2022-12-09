import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Login from "./Pages/Login";
import { routes } from "./Common/Routes";
import Layout from "./Common/Layout";
import "./App.css";
import history from "./Common/history";

const App = () => {
	const navigate = useNavigate();
	// if (!authStore.logined) {
	// 	return <Login />;
	// }

	useEffect(() => {
		if (localStorage.getItem("isUser")) {
			// navigate("/");
		}  
	}, [localStorage["isUser"]]);

	return (
		<>
			<Layout>
				<Routes history={history}>
					{routes.map((route, index) => (
						<Route path={route.path} element={route.component} key={index} />
					))}
				</Routes>
			</Layout>
		</>
	);
};

export default App;
