import { Link } from "react-router-dom";

function Credits() {
	return (
		<main>
			<header>
				<h1>Of Dice and Them - Credits</h1>
				<nav>
					<Link to="/">Take me home</Link>
				</nav>
			</header>
			<h2>Cast (in alphabetical order)</h2>
			<ul>
				<li>
					Lyosha Podkholmov: <a href="https://twitter.com/oddballham">Bambi</a>
				</li>
				<li>
					Dungeon Master: <a href="https://twitter.com/dmofdiceandthem">Jack</a>
				</li>
				<li>
					Augustina Miller: <a href="https://twitter.com/iamloufryer">Lou</a>
				</li>
				<li>
					Ser Gladstone Pyke:{" "}
					<a href="https://twitter.com/ralph_stickley">Ralph</a>
				</li>
				<li>
					Light-on-the-Lake-at-Midnight:{" "}
					<a href="https://twitter.com/toveberry">Tove</a>
				</li>
			</ul>

			<h2>Crew</h2>
			<ul>
				<li>Editing & Website: Tove</li>
				<li>Producer & Socials & Office Management: Lou</li>
				<li>Producer & Story Direction: Jack</li>
				<li>Producer & Art Direction: Ralph</li>
				<li>Executive Producer & Technical Support: Bambi</li>
				<li>Creatures: Cilla 😸, Connie 😸, Daisy 😸, Jasper 😸, Matilda 🐢</li>
			</ul>

			<h2>Resources</h2>
			<p>
				Our logo was designed and illuminated by{" "}
				<a href="https://www.sbgd.co.uk/">Simon Barnes</a>.
			</p>
			<p>
				Of Dice and Them wouldn't be possible without the world of royalty-free
				and permissively licenced audio - you can find an attribution guide
				below.
			</p>
			<p>
				Special thanks to Michael Ghelfi Studios who provide our sound design &
				background ambience resources, alongside some music. Check out their{" "}
				<a href="https://www.patreon.com/MichaelGhelfi">Patreon</a> and{" "}
				<a href="https://www.youtube.com/channel/UCDed9jQ1Y1gKeyjvkyFGkCA">
					YouTube
				</a>
				.
			</p>
			<section>
				<h3>Music</h3>
				<ul>
					<li>
						"Midnight Tale" Kevin MacLeod (incompetech.com) Licensed under
						Creative Commons: By Attribution 4.0 License
						http://creativecommons.org/licenses/by/4.0/
					</li>
					<li>
						"Fluffing a Duck" Kevin MacLeod (incompetech.com) Licensed under
						Creative Commons: By Attribution 4.0 License
						http://creativecommons.org/licenses/by/4.0/
					</li>
					<li>
						Grunge Rock Instrumental by Wayne John Bradley |
						https://soundcloud.com/ayneohnradley Music promoted by
						https://www.free-stock-music.com Creative Commons Attribution 3.0
						Unported License
						https://creativecommons.org/licenses/by/3.0/deed.en_US
					</li>
					<li>
						Music: Crossroads by Alexander Nakarada
						(www.serpentsoundstudios.com) Licensed under Creative Commons BY
						Attribution 4.0 License https://creativecommons.org/licenses/by/4.0/
					</li>
					<li>
						"Unseen Horrors" Kevin MacLeod (incompetech.com) Licensed under
						Creative Commons: By Attribution 4.0 License
						http://creativecommons.org/licenses/by/4.0/
					</li>
				</ul>
			</section>
		</main>
	);
}

export default Credits;
