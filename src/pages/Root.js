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
