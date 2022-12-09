import styles from "./IntroVideo.module.scss";
import seaImg from "../../../assets/video-img.jpg";
import { Modal, Button, Image, Icon } from "semantic-ui-react";
import { useState } from "react";
import ReactPlayer from "react-player";

const IntroVideo = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.introVideoDiv}>
			<span>Intro video</span>
			<h2>Len`s check our video</h2>
			<p>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>
			<div className={styles.introVideoDivBlock}>
				<Image src={seaImg} />
				<div className={styles.introVideoDivButton}>
					<Button onClick={() => setOpen(true)}>
						<Icon name="play" className={styles.introVideoIcon} />
					</Button>
				</div>
			</div>

			<Modal open={open} onClose={() => setOpen(false)}>
				<ReactPlayer
					url="https://www.youtube.com/watch?v=LdsTydS4eww"
					width
					height="500px"
					playing={true}
				/>
			</Modal>
		</div>
	);
};

export default IntroVideo;
