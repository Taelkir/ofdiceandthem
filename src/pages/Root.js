import { Link } from "react-router-dom";
import logo from "../ofdiceandthem-500px.png";
import "./Index.css";

function Root() {
	return (
		<>
			<header>
				<img className="logo" src={logo} alt="Of Dice and Them logo" />
				<h1 className="main-title">Of Dice and Them</h1>
				<h2>
					<a href="https://feed.ofdiceandthem.com/s01e01-we-are-the-grebthian-preservation-society">
						Start with episode one!
					</a>
				</h2>
			</header>
			<main>
				<p>
					Welcome to <strong>Of Dice and Them</strong>! Join Jack, Ralph, Lou,
					Tove and Bambi, in their new TTRPG actual play podcast, as they laugh
					in each other's faces and try to get through a session where no one
					beefs it. Contains frustrated swearing, light-hearted DM bullying, and
					far too much owl-based combat. Download wherever you get your
					podcasts!
				</p>
				<nav>
					<a href="https://feed.ofdiceandthem.com">All episodes</a>
					<a href="https://twitter.com/ofdiceandthem">Follow us on Twitter</a>
					<a href="https://instagram.com/ofdiceandthem">
						Follow us on Instagram
					</a>
					<Link to="/credits">Credits</Link>
				</nav>
			</main>
		</>
	);
}

export default Root;
