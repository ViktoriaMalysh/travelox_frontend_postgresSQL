import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Common/Footer/Footer";
import Counter from "../../Common/Home Components/Counter/Counter";
import Destinations from "../../Common/Home Components/Destinations/Destinations";
import HomeAbout from "../../Common/Home Components/HomeAbout/HomeAbout";
import IntroVideo from "../../Common/Home Components/Intro Video/IntroVideo";
import OurBlog from "../../Common/Home Components/Our Blog/OurBlog";
import Partners from "../../Common/Home Components/Partners/Partners";
import Testimonials from "../../Common/Home Components/Testimonials/Testimonials";
import TopTour from "../../Common/Home Components/Top Tour/TopTour";
import TourGuides from "../../Common/Home Components/Tour Guides/TourGuides";
import HomeBlock1 from "../../Common/HomeBlock1/HomeBlok1";
import HomeBlock2 from "../../Common/HomeBlock2/HomeBlock2";
import SearchArea from "../../Common/Search Area/SearchArea";
import Slider from "../../Common/Slider/Slider";
import { getMetaData } from "../../redux/actions/actionApi";

const Home = () => {
	const dispatch = useDispatch();
	const store = useSelector((state) => state);

	useEffect(() => {
		dispatch(getMetaData());
	}, []);

	return (
		<div>
			<Slider />
			<SearchArea />

			<HomeBlock1 />

			<HomeAbout />

			<Destinations />

			<TopTour />

			<Counter />

			<IntroVideo />

			<TourGuides title="Tour guides" text="Meet our tour guides" />

			<HomeBlock2 />

			<Testimonials />

			<Partners />

			<OurBlog />

			<Footer />
		</div>
	);
};

export default Home;
