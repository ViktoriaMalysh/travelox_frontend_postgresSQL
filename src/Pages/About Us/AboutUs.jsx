import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import HomeAbout from "../../Common/Home Components/HomeAbout/HomeAbout";
import Testimonials from "../../Common/Home Components/Testimonials/Testimonials";
import Counter from "../../Common/Home Components/Counter/Counter";
import TourGuides from "../../Common/Home Components/Tour Guides/TourGuides";

const AboutUsPage = () => {
	return (
		<>
			<Breadcrumb title="About us" link="about us" />
			<HomeAbout />
			<Testimonials />
			<Counter />
			<TourGuides title="team" text="meet our team" />
			<Footer />
		</>
	);
};

export default AboutUsPage;
