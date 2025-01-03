import { Link } from "react-router-dom";
import logo from "../ofdiceandthem-500px.png";
import * as Icons from "../components/icons";
import "./Index.css";

function Root() {
	return (
		<>
			<header>
				<img className="logo" src={logo} alt="Of Dice and Them logo" />
				<div className="hero-container">
					<h1 className="visually-hidden">Of Dice and Them</h1>
					<a 
						href="https://creators.spotify.com/pod/show/of-dice-and-them/episodes/S01E01-We-Are-The-Grebthian-Preservation-Society-e2jgk3k"
						className="hero-link"
					>
						<div className="hero-image season-one">
							<div className="hero-overlay">
								<h2>Season One</h2>
								<p>D&D 5e</p>
							</div>
						</div>
					</a>
					<a 
						href="https://creators.spotify.com/pod/show/of-dice-and-them/episodes/Blades-in-the-Dark---Episode-1-Session-Zero-e2jgk3c"
						className="hero-link"
					>
						<div className="hero-image season-two">
							<div className="hero-overlay">
								<h2>Season Two</h2>
								<p>Blades in the Dark</p>
							</div>
						</div>
					</a>
				</div>
			</header>
			<main>
				<div className="intro-section">
					<p className="intro-text">
						Welcome to <strong>Of Dice and Them</strong>! Join Jack, Ralph, Lou,
						Tove and Bambi, in their new TTRPG actual play podcast, as they laugh
						in each other's faces and try to get through a session where no one
						beefs it. Contains frustrated swearing, light-hearted DM bullying, and
						far too much owl-based combat.
					</p> 
					
					<p className="intro-text">
						Download wherever you get your podcasts!
					</p>
				</div>
				<nav className="social-nav">
					<a href="https://feed.ofdiceandthem.com" className="nav-link">
						<Icons.Rss />
						<span>All episodes</span>
					</a>
					<a href="https://bsky.app/profile/ofdiceandthem.com" className="nav-link">
						<Icons.Bluesky />
						<span>Follow us on Bluesky</span>
					</a>
					<a href="https://www.youtube.com/@OfDiceAndThemPod/videos" className="nav-link">
						<Icons.Youtube />
						<span>Subscribe on YouTube</span>
					</a>
					<a href="https://instagram.com/ofdiceandthem" className="nav-link">
						<Icons.Instagram />
						<span>Follow us on Instagram</span>
					</a>
					<a href="mailto:ofdiceandthem@gmail.com" className="nav-link">
						<Icons.Email />
						<span>Email us</span>
					</a>
					<Link to="/credits" className="nav-link">
						<Icons.Credits />
						<span>Credits</span>
					</Link>
				</nav>
				<section class="badges-and-awards" style={{ "margin-top": "24px" }}>
					<div
						style={{
							display: "flex",
							"flex-direction": "column",
							"align-items": "center",
						}}
					>
						<a
							href="https://goodpods.com/leaderboard/top-100-shows-by-category/leisure/games?indie=false&period=alltime#24937757"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="https://storage.googleapis.com/goodpods-images-bucket/leaderboard_badges/leisure_games_top100.png"
								alt="goodpods top 100 games podcasts"
								style={{ width: "250px", height: "77px" }}
							/>
						</a>
						<a
							href="https://goodpods.com/leaderboard/top-100-shows-by-category/leisure/games"
							style={{
								"text-decoration": "none",
								color: "#6F6F6F",
								"font-size": "13px",
								"font-family": "Arial, Helvetica sans-serif",
								"text-align": "center",
								"line-height": "16px",
								"margin-top": "4px",
							}}
							target="_blank"
							rel="noreferrer"
						>
							Goodpods Top 100 Games Podcasts
						</a>
						<a
							href="https://goodpods.com/podcasts/of-dice-and-them-250042"
							style={{
								"text-decoration": "none",
								color: "#6F6F6F",
								"font-size": "13px",
								"font-family": "Arial, Helvetica, sans-serif",
								"text-align": "center",
								"line-height": "16px",
								"margin-top": "4px",
							}}
							target="_blank"
							rel="noreferrer"
						>
							Listen now to Of Dice and Them podcast
						</a>
					</div>
				</section>
			</main>
		</>
	);
}

export default Root;
