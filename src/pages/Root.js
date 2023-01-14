import { Link } from "react-router-dom";
import logo from "../ofdiceandthem-500px.png";
import "./Index.css";

function Root() {
	return (
		<>
			<header>
				<img class="logo" src={logo} alt="Of Dice and Them logo" />
				<h1 class="main-title">Of Dice and Them</h1>
				<h2>coming 6th February 2023</h2>
			</header>
			<main>
				<p>
					A TTRPG Actual Play Podcast that blends the bizzare and the beautiful.
					Join Bambi, Lou, Ralph, and Tove as our heroes, under the guidance of
					Dungeon Master Jack, as they explore the world of Eren.
				</p>
				<nav>
					<a href="https://feed.ofdiceandthem.com">Episodes</a>
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
